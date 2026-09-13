// ============================================================================
// Canonical Viewora pricing data for the marketing site.
//
// Mirrors the columns returned by `GET /billing/plans` on viewora-backend
// (see D:\Viewora\PRICING_CANONICAL_SPEC.md and
// D:\Viewora\VIEWORA_PRICING_MIGRATION.sql — this is the single source of
// truth; do not hand-type prices/limits elsewhere in this repo).
//
// Used as:
//   1. The SSR-safe fallback plan list in pages/pricing.vue, shown whenever
//      the live API call fails or returns nothing (so the page never renders
//      empty/broken because the backend was briefly unreachable).
//   2. The shared source for pricing structured data (JSON-LD) across every
//      marketing page that mentions plans/pricing, instead of hand-typed
//      numbers duplicated (and drifting) per page.
//
// Never used to actually charge anyone — real checkout always prices off the
// live `price_monthly_kes` / `price_yearly_kes` returned by the API.
// ============================================================================

export interface PricingPlan {
  slug: string
  name: string
  description: string
  cta_label: string
  price_monthly_kes: number | null
  price_yearly_kes: number | null
  max_active_properties: number | null
  max_scenes_per_tour: number | null
  max_team_members: number | null
  is_popular: boolean
  is_active: boolean
  is_custom_pricing: boolean
  sort_order: number
}

// Static fallback — matches the live `plans` table rows at time of writing.
// Update if the canonical spec changes; the live API is always authoritative.
export const FALLBACK_PLANS: PricingPlan[] = [
  {
    slug: 'free',
    name: 'Free',
    description: 'For trying Viewora and creating your first virtual tours.',
    cta_label: 'Start Free',
    price_monthly_kes: 0,
    price_yearly_kes: 0,
    max_active_properties: 2,
    max_scenes_per_tour: 5,
    max_team_members: 1,
    is_popular: false,
    is_active: true,
    is_custom_pricing: false,
    sort_order: 0,
  },
  {
    slug: 'creator',
    name: 'Creator',
    description: 'For individuals, small agents and businesses.',
    cta_label: 'Start Creator',
    price_monthly_kes: 999,
    price_yearly_kes: 9990,
    max_active_properties: 5,
    max_scenes_per_tour: 25,
    max_team_members: 1,
    is_popular: false,
    is_active: true,
    is_custom_pricing: false,
    sort_order: 1,
  },
  {
    slug: 'professional',
    name: 'Professional',
    description: 'For serious agents, property marketers and professional sellers.',
    cta_label: 'Start Professional',
    price_monthly_kes: 2499,
    price_yearly_kes: 24990,
    max_active_properties: 25,
    max_scenes_per_tour: 75,
    max_team_members: 1,
    is_popular: true,
    is_active: true,
    is_custom_pricing: false,
    sort_order: 2,
  },
  {
    slug: 'business',
    name: 'Business',
    description: 'For agencies, developers and growing teams.',
    cta_label: 'Start Business',
    price_monthly_kes: 4999,
    price_yearly_kes: 49990,
    max_active_properties: 100,
    max_scenes_per_tour: 150,
    max_team_members: 3,
    is_popular: false,
    is_active: true,
    is_custom_pricing: false,
    sort_order: 3,
  },
  {
    slug: 'enterprise',
    name: 'Enterprise',
    description: 'For organizations that need scale, control and custom solutions.',
    cta_label: 'Contact Sales',
    price_monthly_kes: null,
    price_yearly_kes: null,
    max_active_properties: null,
    max_scenes_per_tour: null,
    max_team_members: null,
    is_popular: false,
    is_active: true,
    is_custom_pricing: true,
    sort_order: 4,
  },
]

// Verbatim feature-checklist copy per plan, per product spec. Do not add,
// remove, or embellish items here without an updated product decision —
// several of these (e.g. floor plans, Street View, custom domain, white
// label, team workspace, API access) are data/entitlement flags only today
// with no real backend functionality behind them yet; that's a known,
// accepted gap, not something to soften or omit from this copy.
export const PLAN_FEATURES: Record<string, string[]> = {
  free: [
    '2 active tours',
    'Up to 5 scenes per tour',
    'Standard 360° tours',
    'Shareable Viewora links',
    'QR codes',
    'Basic hotspots',
    'Basic gallery',
    'Mobile & desktop viewing',
    'Basic analytics',
    'Viewora branding',
  ],
  creator: [
    '5 active tours',
    'Up to 25 scenes per tour',
    'HD panoramas',
    'Custom logo',
    'Remove Viewora branding',
    'Custom cover images',
    'Interactive hotspots',
    'Video embeds',
    'Property information',
    'Website embeds',
    'Password protection',
    'Tour duplication',
    'Basic analytics',
    'Professional presentation',
  ],
  professional: [
    '25 active tours',
    'Up to 75 scenes per tour',
    'Premium panorama hosting',
    'Advanced hotspots',
    'Custom hotspot icons',
    'Interactive floor plans',
    'Advanced analytics',
    'Visitor journey analytics',
    'Lead capture',
    'WhatsApp/contact CTA',
    'Branded property pages',
    'Project collections',
    'Google Street View',
    'Advanced maps',
    'Advanced embed options',
    'Priority support',
  ],
  business: [
    '100 active tours',
    'Up to 150 scenes per tour',
    'Team workspace',
    'Multiple team members',
    'Client/project organization',
    'Multiple brand profiles',
    'Advanced analytics',
    'Exportable analytics',
    'Custom domain',
    'White-label viewer',
    'Agency portfolio',
    'Project/estate mode',
    'Lead management',
    'Advanced permissions',
    'Priority hosting',
    'Priority support',
    'Bulk tour management',
    'Increased storage & bandwidth',
  ],
}

/** The 4 self-serve plans for the pricing grid, sorted for display. Excludes Enterprise / any custom-pricing plan. */
export function getCardPlans(plans: PricingPlan[] = FALLBACK_PLANS): PricingPlan[] {
  return plans
    .filter((p) => p.is_active !== false && !p.is_custom_pricing && p.slug !== 'enterprise')
    .slice()
    .sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0))
}

/** The Enterprise (or other custom-pricing) plan, rendered as a separate section below the 4-card grid. */
export function getEnterprisePlan(plans: PricingPlan[] = FALLBACK_PLANS): PricingPlan | undefined {
  return plans.find((p) => p.is_custom_pricing || p.slug === 'enterprise')
}

// Structured-data (JSON-LD) offers for the 4 self-serve KES-priced plans,
// shared across every marketing page that advertises pricing. Enterprise is
// intentionally excluded from this list — it has no numeric price, and
// schema.org's Offer type expects a valid price; Enterprise is described in
// on-page copy ("Contact Sales") instead.
export function buildPricingOffers(plans: PricingPlan[] = FALLBACK_PLANS) {
  return getCardPlans(plans).map((p) => ({
    '@type': 'Offer',
    name: p.name,
    price: String(p.price_monthly_kes ?? 0),
    priceCurrency: 'KES',
    description: `${p.description} ${p.max_active_properties} active tours, up to ${p.max_scenes_per_tour} scenes per tour.`,
  }))
}
