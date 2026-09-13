// ============================================================================
// Display-only KES → local-currency conversion (see PRICING_CANONICAL_SPEC.md
// "Currency (decided: DISPLAY-ONLY conversion)").
//
// All prices are stored and billed in KES only — this never touches the
// actual checkout/billing amount, it only renders a secondary approximate
// line under the KES price, e.g.:
//
//   KES 2,499/month
//   ≈ $19.30/month
//
// Same approach/shape as the app repo's composable of the same name and
// path (composables/useCurrencyDisplay.ts) — written independently per repo
// since the repos don't share files.
// ============================================================================

// Small locale → currency lookup. Doesn't need to be exhaustive — covers the
// common visitor markets. Kenya itself (and anything unrecognized) resolves
// to null, meaning "just show KES, no conversion line".
const LOCALE_CURRENCY_MAP: Record<string, string> = {
  'en-US': 'USD',
  'en-GB': 'GBP',
  'en-CA': 'USD',
  'en-AU': 'USD',
  'de-DE': 'EUR',
  'de-AT': 'EUR',
  'de-CH': 'EUR',
  'fr-FR': 'EUR',
  'es-ES': 'EUR',
  'it-IT': 'EUR',
  'nl-NL': 'EUR',
  'pt-PT': 'EUR',
  'en-NG': 'NGN',
  'en-ZA': 'ZAR',
  'af-ZA': 'ZAR',
  'en-IN': 'INR',
  'hi-IN': 'INR',
  'en-KE': null as unknown as string, // Kenya — no conversion needed
  'sw-KE': null as unknown as string,
}

// Fallback static KES → currency rate table, used if the live FX fetch fails
// (network error, blocked, or an SSR context with no sessionStorage).
// Approximate rates — update periodically. Never blocks rendering: the KES
// price is always shown regardless; this is a nice-to-have that degrades to
// "not shown" if unavailable for a given currency.
const FALLBACK_RATES: Record<string, number> = {
  USD: 0.0077,
  EUR: 0.0071,
  GBP: 0.0061,
  NGN: 12.1,
  ZAR: 0.14,
  INR: 0.65,
}

const FX_ENDPOINT = 'https://open.er-api.com/v6/latest/KES'
const SESSION_CACHE_KEY = 'viewora_fx_rates_kes'

interface FxCache {
  rates: Record<string, number>
  fetchedAt: number
}

let ratesPromise: Promise<Record<string, number> | null> | null = null

function detectCurrency(): string | null {
  try {
    const locale = Intl.NumberFormat().resolvedOptions().locale || navigator.language || 'en-KE'
    if (/-KE$/i.test(locale) || /^sw/i.test(locale)) return null

    if (locale in LOCALE_CURRENCY_MAP) {
      return LOCALE_CURRENCY_MAP[locale] ?? null
    }

    // Fall back to matching just the language prefix if the exact locale isn't listed
    const lang = locale.split('-')[0]
    const match = Object.entries(LOCALE_CURRENCY_MAP).find(([key]) => key.split('-')[0] === lang)
    return match ? (match[1] ?? null) : null
  } catch {
    return null
  }
}

async function fetchLiveRates(): Promise<Record<string, number> | null> {
  if (typeof window === 'undefined') return null

  try {
    const cachedRaw = window.sessionStorage?.getItem(SESSION_CACHE_KEY)
    if (cachedRaw) {
      const cached = JSON.parse(cachedRaw) as FxCache
      if (cached?.rates) return cached.rates
    }
  } catch {
    // sessionStorage unavailable or corrupted — ignore, fetch fresh
  }

  try {
    const res = await fetch(FX_ENDPOINT)
    if (!res.ok) return null
    const data = await res.json()
    if (data?.result !== 'success' || !data?.rates) return null

    try {
      window.sessionStorage?.setItem(
        SESSION_CACHE_KEY,
        JSON.stringify({ rates: data.rates, fetchedAt: Date.now() } satisfies FxCache)
      )
    } catch {
      // sessionStorage write can fail (private mode, quota) — non-fatal
    }

    return data.rates as Record<string, number>
  } catch {
    return null
  }
}

async function getRates(): Promise<Record<string, number> | null> {
  if (!ratesPromise) {
    ratesPromise = fetchLiveRates()
  }
  return ratesPromise
}

/**
 * Returns a formatter for a secondary, approximate, display-only currency
 * line under a KES price. `formatPrice` resolves to `null` when the
 * visitor's locale already implies KES, or no conversion is available for
 * their currency — callers should just show the KES price alone in that case.
 */
export function useCurrencyDisplay() {
  const currency = detectCurrency()

  async function formatPrice(kesAmount: number): Promise<string | null> {
    if (!currency) return null
    if (!kesAmount || kesAmount <= 0) return null

    let rate: number | undefined
    try {
      const liveRates = await getRates()
      rate = liveRates?.[currency]
    } catch {
      rate = undefined
    }

    if (rate === undefined) rate = FALLBACK_RATES[currency]
    if (rate === undefined) return null

    const converted = kesAmount * rate

    try {
      return new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency,
        maximumFractionDigits: converted < 10 ? 2 : 0,
      }).format(converted)
    } catch {
      return null
    }
  }

  return { formatPrice }
}
