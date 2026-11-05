<template>
  <div>
    <section class="rd-hero">
      <div class="container">
        <p class="rd-eyebrow">Request a demo</p>
        <h1 class="rd-title">See your space as a <span class="highlight">360° tour</span></h1>
        <p class="rd-sub">Leave your number. We'll call or WhatsApp you and walk through a live tour built for your kind of property or business.</p>
      </div>
    </section>

    <section class="section" style="padding-top: 2rem;">
      <div class="container rd-grid">
        <!-- Form -->
        <div class="rd-form-col">
          <div v-if="done" class="app-state-box app-state-box--success" style="margin: 0;">
            <p><strong>Thanks, {{ firstName }}.</strong> We've got your request and will contact you on {{ lastPhone }} within one working day (Mon–Fri, 9am–6pm EAT).</p>
            <p>While you wait: <NuxtLink to="/demo" style="text-decoration: underline;">explore live tours</NuxtLink>.</p>
          </div>

          <form v-else novalidate @submit.prevent="submit">
            <div class="rd-field">
              <label for="rd-name">Your name</label>
              <input id="rd-name" v-model="form.name" type="text" autocomplete="name" required />
            </div>
            <div class="rd-field">
              <label for="rd-phone">Phone / WhatsApp number</label>
              <input id="rd-phone" v-model="form.phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="0712 345 678" required />
            </div>
            <div class="rd-field">
              <label for="rd-type">What do you want a tour of?</label>
              <select id="rd-type" v-model="form.type">
                <option value="">Choose one</option>
                <option v-for="t in types" :key="t" :value="t">{{ t }}</option>
              </select>
            </div>
            <div class="rd-row">
              <div class="rd-field">
                <label for="rd-email">Email <span class="rd-opt">(optional)</span></label>
                <input id="rd-email" v-model="form.email" type="email" autocomplete="email" />
              </div>
              <div class="rd-field">
                <label for="rd-city">Town or city <span class="rd-opt">(optional)</span></label>
                <input id="rd-city" v-model="form.city" type="text" autocomplete="address-level2" />
              </div>
            </div>
            <div class="rd-field">
              <label for="rd-business">Business or property name <span class="rd-opt">(optional)</span></label>
              <input id="rd-business" v-model="form.business" type="text" autocomplete="organization" />
            </div>
            <div class="rd-field">
              <label for="rd-note">Anything we should know? <span class="rd-opt">(optional)</span></label>
              <textarea id="rd-note" v-model="form.note" rows="3"></textarea>
            </div>

            <!-- Honeypot -->
            <div aria-hidden="true" style="position: absolute; left: -9999px;">
              <label>Website <input v-model="form.website" type="text" tabindex="-1" autocomplete="off" /></label>
            </div>

            <label class="rd-consent">
              <input v-model="form.consent" type="checkbox" required />
              <span>{{ consentText }}</span>
            </label>

            <div v-if="error" class="modal-error" role="alert" style="margin-bottom: 1rem;">{{ error }}</div>

            <button type="submit" class="btn btn-primary btn-lg btn-block" :disabled="sending">
              {{ sending ? 'Sending…' : 'Request my demo' }}
            </button>
          </form>
        </div>

        <!-- Visual: a real tour + what happens next -->
        <aside class="rd-side">
          <div class="rd-tour">
            <iframe
              v-if="tourOn"
              src="https://app.viewora.software/embed/onyx-apartmentshouse-and-homes"
              title="Live Viewora tour: Onyx Apartments"
              allowfullscreen
              allow="fullscreen; gyroscope; accelerometer; xr-spatial-tracking"
            ></iframe>
            <button v-else type="button" class="rd-tour-start" @click="tourOn = true">
              <span class="rd-play" aria-hidden="true">▶</span>
              <span><strong>Try a live tour</strong><br /><small>Onyx Apartments. Drag to look around.</small></span>
            </button>
          </div>

          <ol class="rd-steps">
            <li><strong>You send this form.</strong> Takes about a minute.</li>
            <li><strong>We reach out.</strong> A call or WhatsApp within one working day.</li>
            <li><strong>You see a tour of your kind of space.</strong> Then you decide, with no obligation.</li>
          </ol>
        </aside>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const types = ['Real estate / property', 'Hotel or Airbnb', 'School or institution', 'Car dealership', 'Gym or hospital', 'Event or venue', 'Something else']
// TODO(legal): consent wording needs a lawyer's review under Kenya's Data Protection Act.
const consentText = 'I agree that Viewora may use my details to contact me about this demo request. I can ask to have them deleted at any time.'

const form = ref({ name: '', phone: '', email: '', business: '', type: '', city: '', note: '', website: '', consent: false })
const tourOn = ref(false)
const sending = ref(false)
const done = ref(false)
const error = ref<string | null>(null)
const firstName = ref('')
const lastPhone = ref('')
const route = useRoute()
const { $posthog } = useNuxtApp() as any

onMounted(() => {
  $posthog?.capture('demo_request_form_view', { page: route.path })
  // Load the tour once the page is interactive so it never delays the form.
  const start = () => { tourOn.value = true }
  if ('requestIdleCallback' in window) (window as any).requestIdleCallback(start, { timeout: 1500 })
  else setTimeout(start, 800)
})

async function submit() {
  error.value = null
  const f = form.value
  if (f.name.trim().length < 2) { error.value = 'Please enter your name.'; return }
  if (f.phone.replace(/\D/g, '').length < 9) { error.value = 'Please enter a phone number we can reach, e.g. 0712 345 678.'; return }
  if (!f.consent) { error.value = 'Please tick the box so we can contact you.'; return }
  sending.value = true
  try {
    await $fetch('/api/request-demo', { method: 'POST', body: { ...f, consentText } })
    firstName.value = f.name.trim().split(' ')[0]
    lastPhone.value = f.phone
    done.value = true
    $posthog?.capture('demo_request_submitted', { type: f.type || null }) // no personal data
  } catch {
    error.value = 'We could not send your request. Please WhatsApp us on +254 117 537 025 or try again.'
  } finally {
    sending.value = false
  }
}

useSeoMeta({
  title: 'Request a Demo — Viewora 360° Virtual Tours',
  description: 'Request a Viewora demo. Leave your name and number and we will walk you through a live 360° tour for your property or business.',
})
useHead({ link: [{ rel: 'canonical', href: 'https://viewora.software/request-demo' }] })
</script>

<style scoped>
.rd-hero { background: var(--ink); color: #fff; padding: 2.75rem 0 2.25rem; border-bottom: 4px solid var(--accent); }
.rd-eyebrow { font-size: 0.8rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--accent); margin-bottom: 0.5rem; }
.rd-title { font-size: clamp(1.75rem, 5vw, 2.75rem); line-height: 1.15; margin: 0 0 0.75rem; text-align: left; color: #fff; }
.rd-sub { max-width: 560px; color: #c9ccd1; text-align: left; margin: 0; }
.rd-grid { display: grid; gap: 2rem; grid-template-columns: 1fr; }
@media (min-width: 900px) {
  .rd-grid { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 3rem; align-items: start; }
  .rd-side { position: sticky; top: 5.5rem; }
}
.rd-row { display: grid; gap: 0 1rem; grid-template-columns: 1fr; }
@media (min-width: 560px) { .rd-row { grid-template-columns: 1fr 1fr; } }
.rd-field { margin-bottom: 1.1rem; }
.rd-field label { display: block; font-weight: 600; margin-bottom: 0.4rem; }
.rd-opt { font-weight: 400; color: var(--slate); }
.rd-field input, .rd-field select, .rd-field textarea {
  width: 100%; min-height: 48px; padding: 0.7rem 0.8rem; font: inherit;
  border: 1px solid var(--border-sharp); border-radius: 0.5rem; background: var(--paper);
}
.rd-field input:focus-visible, .rd-field select:focus-visible, .rd-field textarea:focus-visible,
.rd-consent input:focus-visible, .rd-tour-start:focus-visible { outline: 2px solid var(--ink); outline-offset: 2px; }
.rd-consent { display: flex; gap: 0.75rem; align-items: flex-start; margin: 1.25rem 0; font-size: 0.9rem; color: var(--slate); }
.rd-consent input { width: 22px; height: 22px; margin-top: 2px; flex-shrink: 0; }

.rd-tour { border: 1px solid var(--ink); border-radius: 0.75rem; overflow: hidden; background: var(--ink); height: min(70svh, 520px); min-height: 360px; }
.rd-tour iframe { width: 100%; height: 100%; border: 0; display: block; }
.rd-tour-start { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; gap: 1rem; background: var(--ink); color: #fff; border: 0; cursor: pointer; font: inherit; text-align: left; transition: background 0.15s; }
.rd-tour-start:hover { background: var(--ink-soft); }
.rd-tour-start:active { transform: scale(0.99); }
.rd-tour-start small { color: var(--slate-light); }
.rd-play { width: 56px; height: 56px; border-radius: 50%; background: var(--accent); color: var(--ink); display: grid; place-items: center; font-size: 1.1rem; flex-shrink: 0; }

.rd-steps { list-style: none; counter-reset: s; margin: 1.5rem 0 0; padding: 0; }
.rd-steps li { counter-increment: s; position: relative; padding: 0 0 1rem 2.5rem; color: var(--slate); }
.rd-steps li strong { color: var(--ink); }
.rd-steps li::before { content: counter(s); position: absolute; left: 0; top: 0; width: 1.75rem; height: 1.75rem; border-radius: 50%; border: 1.5px solid var(--ink); display: grid; place-items: center; font-weight: 700; font-size: 0.85rem; color: var(--ink); font-variant-numeric: tabular-nums; }
@media (prefers-reduced-motion: reduce) { .rd-tour-start { transition: none; } }
</style>
