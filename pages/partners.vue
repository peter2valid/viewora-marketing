<template>
  <div>
    <section class="pt-hero">
      <div class="container">
        <p class="pt-eyebrow">For property and car platforms</p>
        <h1 class="pt-title">Build Viewora 360° tours into <span class="highlight">your own product</span></h1>
        <p class="pt-sub">
          Your platform creates tours through the Viewora API and shows them wherever your users are: your website,
          your Android and iPhone apps, and links shared on WhatsApp. We host and process the tours. Your users stay yours.
        </p>
        <div class="pt-actions">
          <a href="#request" class="btn btn-primary btn-lg" @click="track('partner_cta_clicked', { where: 'hero' })">Request partner access</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container pt-narrow">
        <h2 class="pt-h2">Who it's for</h2>
        <dl class="pt-who">
          <div><dt>Property portals and listing sites</dt><dd>Add a 360° walk-through to every listing, uploaded by the agent who owns it.</dd></div>
          <div><dt>Car marketplaces and dealer groups</dt><dd>Show each car as a spin buyers can turn, plus interior 360° photos.</dd></div>
          <div><dt>Real estate agencies</dt><dd>Run tours for all your agents from your own system, under your own listing ids.</dd></div>
          <div><dt>Software companies</dt><dd>Building a property or car product for a client? Add tours without building a 360° viewer.</dd></div>
        </dl>
      </div>
    </section>

    <section class="section pt-alt" aria-labelledby="pt-reuse">
      <div class="container pt-narrow">
        <h2 id="pt-reuse" class="pt-h2">Use the tours in your own apps and sites</h2>
        <p class="pt-lead">Every tour you create through the API can be reused across your product. This is included; there is nothing extra to buy.</p>
        <div class="pt-table-wrap">
          <table class="pt-table">
            <thead><tr><th scope="col">Where</th><th scope="col">How</th></tr></thead>
            <tbody>
              <tr><th scope="row">Your website</th><td>Put the tour's embed link in an iframe on the listing page. It loads only on the websites you register with us.</td></tr>
              <tr><th scope="row">Your Android or iPhone app</th><td>Open the same embed link in a WebView. Works in Flutter, React Native and native apps.</td></tr>
              <tr><th scope="row">Listing cards and search results</th><td>Use the tour's cover image as the thumbnail in your own lists.</td></tr>
              <tr><th scope="row">WhatsApp, SMS and social media</th><td>Share the tour's public link. It shows a preview image in the chat.</td></tr>
              <tr><th scope="row">Your agents' own work</th><td>Each agent gets a Viewora login and can edit their tours later, for example to add rooms.</td></tr>
            </tbody>
          </table>
        </div>
        <p class="pt-note">Embedded tours carry a small Viewora mark.</p>
      </div>
    </section>

    <section class="section">
      <div class="container pt-narrow">
        <h2 class="pt-h2">How partnering works</h2>
        <ol class="pt-steps">
          <li><strong>Request access</strong> with the form below. We reply within one working day.</li>
          <li><strong>Get a test key</strong> and build. Test tours are kept apart from real ones.</li>
          <li><strong>Register your websites</strong> so tours load on them.</li>
          <li><strong>Agree the number of agent seats</strong> and get your live key.</li>
          <li><strong>Go live.</strong> Your platform creates agents and tours as listings come in.</li>
        </ol>
      </div>
    </section>

    <section class="section pt-alt" aria-labelledby="pt-dev">
      <div class="container pt-dev">
        <div>
          <h2 id="pt-dev" class="pt-h2">What your developers get</h2>
          <ul class="pt-list">
            <li>A JSON API over HTTPS, with separate test and live keys.</li>
            <li>Your own ids for agents and listings, so you never store ours.</li>
            <li>Three kinds of upload: 360° photos, normal listing photos, and car photos for a spin.</li>
            <li>Direct uploads to storage, so large 360° files never pass through your servers twice.</li>
            <li>An embed link, a share link and a cover image for every published tour.</li>
            <li>Plain error codes, published limits, and examples in JavaScript and PHP.</li>
          </ul>
        </div>
        <figure class="pt-code">
          <figcaption>Create a tour for one of your listings</figcaption>
<pre><code>POST https://api.viewora.software/v1/tours
Authorization: Bearer vo_test_…

{
  "agent_external_id": "dealer-7",
  "external_id": "CAR-123",
  "title": "Toyota Prado TX 2019",
  "type": "automotive"
}</code></pre>
        </figure>
      </div>
    </section>

    <section class="section">
      <div class="container pt-narrow">
        <h2 class="pt-h2">Pricing</h2>
        <p class="pt-lead">You pay per agent seat, and every agent you add gets a Viewora plan covered by your agreement. Agents pay nothing. Prices depend on the number of seats, so <a href="#request" @click="track('partner_cta_clicked', { where: 'pricing' })">contact us for pricing</a>.</p>
      </div>
    </section>

    <SeoFAQ
      heading="Partner API questions"
      :faqs="faqs"
    />

    <section id="request" class="section pt-request" aria-labelledby="pt-req-h">
      <div class="container pt-req-grid">
        <div>
          <h2 id="pt-req-h" class="pt-h2">Request partner access</h2>
          <p class="pt-lead">Tell us about your platform. We'll reply by email or phone within one working day (Mon–Fri, 9am–6pm EAT) and send a test key once we've talked.</p>
        </div>

        <div>
          <div v-if="done" class="app-state-box app-state-box--success" role="status" style="margin: 0;">
            <p><strong>Thanks, {{ sentName }}.</strong> We've got your request for {{ sentCompany }} and will reply to {{ sentEmail }} within one working day.</p>
          </div>

          <form v-else novalidate @submit.prevent="submit" @focusin.once="track('partner_request_form_started')">
            <div class="pt-row">
              <div class="pt-field">
                <label for="pt-company">Company</label>
                <input id="pt-company" v-model="form.company" type="text" autocomplete="organization" required :aria-invalid="bad.company || undefined" aria-describedby="pt-error" />
              </div>
              <div class="pt-field">
                <label for="pt-site">Website or app link <span class="pt-opt">(optional)</span></label>
                <input id="pt-site" v-model="form.site" type="url" inputmode="url" autocomplete="url" placeholder="https://" :aria-invalid="bad.site || undefined" aria-describedby="pt-error" />
              </div>
            </div>
            <div class="pt-row">
              <div class="pt-field">
                <label for="pt-platform">What do you run?</label>
                <select id="pt-platform" v-model="form.platform" required :aria-invalid="bad.platform || undefined" aria-describedby="pt-error">
                  <option value="">Choose one</option>
                  <option v-for="t in PARTNER_PLATFORM_TYPES" :key="t" :value="t">{{ t }}</option>
                </select>
              </div>
              <div class="pt-field">
                <label for="pt-agents">How many agents or dealers? <span class="pt-opt">(optional)</span></label>
                <select id="pt-agents" v-model="form.agents">
                  <option value="">Choose one</option>
                  <option v-for="a in PARTNER_AGENT_BANDS" :key="a" :value="a">{{ a }}</option>
                </select>
              </div>
            </div>
            <div class="pt-field">
              <label for="pt-name">Your name</label>
              <input id="pt-name" v-model="form.name" type="text" autocomplete="name" required :aria-invalid="bad.name || undefined" aria-describedby="pt-error" />
            </div>
            <div class="pt-row">
              <div class="pt-field">
                <label for="pt-email">Work email</label>
                <input id="pt-email" v-model="form.email" type="email" autocomplete="email" required :aria-invalid="bad.email || undefined" aria-describedby="pt-error" />
              </div>
              <div class="pt-field">
                <label for="pt-phone">Phone or WhatsApp</label>
                <input id="pt-phone" v-model="form.phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="0712 345 678" required :aria-invalid="bad.phone || undefined" aria-describedby="pt-error" />
              </div>
            </div>
            <div class="pt-field">
              <label for="pt-note">What do you want to build? <span class="pt-opt">(optional)</span></label>
              <textarea id="pt-note" v-model="form.note" rows="3" maxlength="2000"></textarea>
            </div>

            <!-- Honeypot -->
            <div aria-hidden="true" style="position: absolute; left: -9999px;">
              <label>Homepage <input v-model="form.homepage" type="text" tabindex="-1" autocomplete="off" /></label>
            </div>

            <label class="pt-consent">
              <input v-model="form.consent" type="checkbox" required :aria-invalid="bad.consent || undefined" />
              <span>{{ PARTNER_CONSENT_TEXT }}</span>
            </label>

            <p v-if="error" id="pt-error" class="modal-error" role="alert" style="margin-bottom: 1rem;">{{ error }}</p>

            <button type="submit" class="btn btn-primary btn-lg btn-block" :disabled="sending">
              {{ sending ? 'Sending…' : 'Request partner access' }}
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { PARTNER_AGENT_BANDS, PARTNER_CONSENT_TEXT, PARTNER_PLATFORM_TYPES } from '~/utils/partnerRequest'

const faqs = [
  { q: 'Can we show the tours inside our mobile app?', a: 'Yes. Open the tour\'s embed link in a WebView. It works in Flutter, React Native and native Android and iPhone apps.' },
  { q: 'Can we use the tour images in our own listing cards?', a: 'Yes. Every published tour has a cover image you can use as the thumbnail in your listings and search results.' },
  { q: 'Can our agents upload their own photos?', a: 'Yes. Your platform uploads 360° photos, normal photos and car photos for each agent. Viewora processes them into the tour.' },
  { q: 'Can Viewora shoot the tours for our agents?', a: 'Yes. Our capture team shoots properties and cars across Kenya. Tell us in the form and we\'ll talk about linking shoots to your listings.' },
  { q: 'What does each agent get?', a: 'Their own Viewora account on the plan your agreement covers. Creating the account sends them no email. They can sign in later to edit their tours.' },
  { q: 'How is it priced?', a: 'Per agent seat. The price depends on the number of seats, so contact us for pricing.' },
  { q: 'Can we try it before going live?', a: 'Yes. You build with a test key first. Test agents and tours are kept apart from real ones.' },
]

const form = ref({ company: '', site: '', platform: '', agents: '', name: '', email: '', phone: '', note: '', homepage: '', consent: false })
const sending = ref(false)
const done = ref(false)
const error = ref<string | null>(null)
const bad = ref<Record<string, boolean>>({})
const sentName = ref('')
const sentCompany = ref('')
const sentEmail = ref('')

const { $posthog } = useNuxtApp() as any
// Analytics never carry personal data: only which button, platform type and seat band.
const track = (event: string, props?: Record<string, unknown>) => $posthog?.capture(event, props)

onMounted(() => track('partner_page_viewed'))

const EMAIL_RE = /^[^\s@<>()",;:]+@[^\s@<>()",;:]+\.[^\s@<>()",;:]+$/
const MESSAGES: Record<string, string> = {
  company: 'Please enter your company name.',
  platform: 'Please choose what you run.',
  name: 'Please enter your name.',
  email: 'Please enter a work email we can reply to.',
  phone: 'Please enter a phone number we can reach, e.g. 0712 345 678.',
  site: 'Please check the website link, e.g. https://yoursite.co.ke',
  consent: 'Please tick the box so we can contact you.',
}

function check(): string[] {
  const f = form.value
  const p: string[] = []
  if (f.company.trim().length < 2) p.push('company')
  if (!f.platform) p.push('platform')
  if (f.name.trim().length < 2) p.push('name')
  if (!EMAIL_RE.test(f.email.trim())) p.push('email')
  if (f.phone.replace(/\D/g, '').length < 9) p.push('phone')
  if (f.site.trim() && !/^(https?:\/\/)?[a-z0-9.-]+\.[a-z]{2,}(\/\S*)?$/i.test(f.site.trim())) p.push('site')
  if (!f.consent) p.push('consent')
  return p
}

function showProblems(p: string[]) {
  bad.value = Object.fromEntries(p.map(k => [k, true]))
  error.value = p.map(k => MESSAGES[k]).filter(Boolean).join(' ') || 'Please check the form.'
  nextTick(() => document.getElementById(`pt-${p[0]}`)?.focus())
}

async function submit() {
  error.value = null
  const problems = check()
  if (problems.length) return showProblems(problems)
  bad.value = {}
  sending.value = true
  const f = form.value
  try {
    await $fetch('/api/partner-request', { method: 'POST', body: { ...f, consentText: PARTNER_CONSENT_TEXT } })
    sentName.value = f.name.trim().split(' ')[0]
    sentCompany.value = f.company.trim()
    sentEmail.value = f.email.trim()
    done.value = true
    track('partner_request_submitted', { platform: f.platform, agents: f.agents || null })
  } catch (e: any) {
    const p = e?.data?.data?.problems
    if (Array.isArray(p) && p.length) return showProblems(p)
    error.value = 'We could not send your request. Please email info@viewora.software or WhatsApp us on +254 117 537 025.'
  } finally {
    sending.value = false
  }
}

const PAGE_URL = 'https://viewora.software/partners'
useSeoMeta({
  title: 'Virtual Tour API for Property & Car Platforms in Kenya | Viewora Partners',
  description: 'Add 360° property tours and car spins to your listing site or app with the Viewora Partner API. Show tours on your website, in your mobile app and in listing cards. Pricing per agent seat.',
  ogTitle: 'Viewora Partner API: 360° tours inside your own product',
  ogDescription: 'Property portals, car marketplaces and agencies can create Viewora tours through an API and show them on their own sites and apps.',
  ogImage: 'https://viewora.software/og-image.jpg',
  ogUrl: PAGE_URL,
  twitterCard: 'summary_large_image',
})

useBreadcrumb('Partners', '/partners')

useHead({
  link: [{ rel: 'canonical', href: PAGE_URL }],
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebAPI',
      name: 'Viewora Partner API',
      description: 'An API for property and car platforms to create 360° virtual tours and car spins and show them on their own websites and apps.',
      url: PAGE_URL,
      provider: { '@type': 'Organization', name: 'Viewora', url: 'https://viewora.software' },
      areaServed: 'KE',
    }),
  }],
})
</script>

<style scoped>
.pt-hero { background: var(--ink); color: #fff; padding: 3rem 0 2.5rem; border-bottom: 4px solid var(--accent); }
.pt-eyebrow { font-size: 0.8rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--accent); margin: 0 0 0.5rem; }
.pt-title { font-size: clamp(1.75rem, 5vw, 2.9rem); line-height: 1.12; margin: 0 0 0.9rem; text-align: left; color: #fff; max-width: 22ch; }
.pt-sub { max-width: 620px; color: #c9ccd1; text-align: left; margin: 0; font-size: 1.05rem; }
.pt-actions { margin-top: 1.5rem; display: flex; flex-wrap: wrap; gap: 0.75rem; }

.pt-narrow { max-width: 860px; }
.pt-alt { background: var(--paper-alt); }
.pt-h2 { font-size: clamp(1.4rem, 3.5vw, 1.9rem); line-height: 1.2; margin: 0 0 1rem; text-align: left; }
.pt-lead { color: var(--slate); max-width: 65ch; margin: 0 0 1.25rem; text-align: left; }
.pt-lead a { color: var(--ink); text-decoration: underline; text-underline-offset: 3px; }
.pt-note { color: var(--slate); font-size: 0.9rem; margin: 0.75rem 0 0; }

.pt-who { display: grid; gap: 1.25rem 2.5rem; grid-template-columns: 1fr; margin: 0; }
@media (min-width: 720px) { .pt-who { grid-template-columns: 1fr 1fr; } }
.pt-who div { border-top: 1px solid var(--border); padding-top: 0.9rem; }
.pt-who dt { font-weight: 700; margin-bottom: 0.25rem; }
.pt-who dd { margin: 0; color: var(--slate); }

.pt-table-wrap { overflow-x: auto; border: 1px solid var(--border); border-radius: 0.6rem; background: var(--paper); }
.pt-table { width: 100%; border-collapse: collapse; font-size: 0.95rem; }
.pt-table th, .pt-table td { text-align: left; vertical-align: top; padding: 0.85rem 1rem; border-bottom: 1px solid var(--border); }
.pt-table tbody tr:last-child th, .pt-table tbody tr:last-child td { border-bottom: 0; }
.pt-table thead th { font-size: 0.8rem; letter-spacing: 0.04em; text-transform: uppercase; color: var(--slate); background: var(--paper-dim); }
.pt-table tbody th { font-weight: 700; width: 34%; min-width: 9rem; }
.pt-table td { color: var(--slate); }

.pt-steps { list-style: none; counter-reset: s; margin: 0; padding: 0; }
.pt-steps li { counter-increment: s; position: relative; padding: 0 0 1.1rem 2.75rem; color: var(--slate); max-width: 62ch; }
.pt-steps li strong { color: var(--ink); }
.pt-steps li::before { content: counter(s); position: absolute; left: 0; top: -0.1rem; width: 1.85rem; height: 1.85rem; border-radius: 50%; border: 1.5px solid var(--ink); display: grid; place-items: center; font-weight: 700; font-size: 0.85rem; color: var(--ink); font-variant-numeric: tabular-nums; }

.pt-dev { display: grid; gap: 2rem; grid-template-columns: 1fr; align-items: start; }
@media (min-width: 900px) { .pt-dev { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 3rem; } }
.pt-list { margin: 0; padding-left: 1.2rem; color: var(--slate); display: grid; gap: 0.5rem; }
.pt-code { margin: 0; border: 1px solid var(--ink); border-radius: 0.6rem; overflow: hidden; background: var(--ink); min-width: 0; }
.pt-code figcaption { font-size: 0.8rem; color: var(--slate-light); padding: 0.6rem 1rem; border-bottom: 1px solid var(--border-dark); }
.pt-code pre { margin: 0; padding: 1rem; overflow-x: auto; color: #e6e6e3; font-family: var(--font-mono); font-size: 0.82rem; line-height: 1.6; }

.pt-request { border-top: 1px solid var(--border); }
.pt-req-grid { display: grid; gap: 1.5rem; grid-template-columns: 1fr; max-width: 1040px; }
@media (min-width: 900px) { .pt-req-grid { grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr); gap: 3rem; align-items: start; } }
.pt-row { display: grid; gap: 0 1rem; grid-template-columns: 1fr; }
@media (min-width: 560px) { .pt-row { grid-template-columns: 1fr 1fr; } }
.pt-field { margin-bottom: 1.1rem; min-width: 0; }
.pt-field label { display: block; font-weight: 600; margin-bottom: 0.4rem; }
.pt-opt { font-weight: 400; color: var(--slate); }
.pt-field input, .pt-field select, .pt-field textarea {
  width: 100%; min-height: 48px; padding: 0.7rem 0.8rem; font: inherit;
  border: 1px solid var(--border-sharp); border-radius: 0.5rem; background: var(--paper); color: var(--ink);
}
.pt-field [aria-invalid="true"], .pt-consent input[aria-invalid="true"] { border-color: #ef4444; outline: 1px solid #ef4444; }
.pt-field input:focus-visible, .pt-field select:focus-visible, .pt-field textarea:focus-visible,
.pt-consent input:focus-visible { outline: 2px solid var(--ink); outline-offset: 2px; }
.pt-consent { display: flex; gap: 0.75rem; align-items: flex-start; margin: 1.25rem 0; font-size: 0.9rem; color: var(--slate); min-height: 48px; }
.pt-consent input { width: 22px; height: 22px; margin-top: 2px; flex-shrink: 0; }
</style>
