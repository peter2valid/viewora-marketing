<template>
  <section class="section cars" aria-labelledby="cars-title">
    <div class="container">
      <div class="cars__head">
        <h2 id="cars-title" class="cars__title">Try it on a real car</h2>
        <p class="cars__sub">These cars are live on Viewora. Drag to turn one, zoom in on the details, then step inside.</p>
      </div>

      <div class="cars__pick" role="tablist" aria-label="Choose a car">
        <button
          v-for="(c, i) in cars"
          :id="`car-tab-${c.slug}`"
          :key="c.slug"
          type="button"
          role="tab"
          class="cars__tab"
          :class="{ 'is-on': i === active }"
          :aria-selected="i === active"
          :aria-controls="`car-panel-${c.slug}`"
          @click="choose(i)"
        >{{ c.name }}</button>
      </div>

      <div
        v-for="(c, i) in cars"
        v-show="i === active"
        :id="`car-panel-${c.slug}`"
        :key="c.slug"
        role="tabpanel"
        :aria-labelledby="`car-tab-${c.slug}`"
        class="cars__panel"
      >
        <div class="cars__stage">
          <!-- The live spin loads only when asked for: the page stays light on mobile data. -->
          <iframe
            v-if="loaded.has(c.slug)"
            :src="`${APP}/embed/${c.slug}`"
            class="cars__frame"
            allowfullscreen
            allow="fullscreen; clipboard-write; gyroscope; accelerometer; magnetometer; xr-spatial-tracking; screen-wake-lock"
            :title="`${c.name}: 360° spin on Viewora`"
          />
          <button v-else type="button" class="cars__poster" :aria-label="`Load the 360° view of the ${c.name}`" @click="load(c.slug)">
            <img
              v-if="c.image"
              :src="c.image"
              :alt="`${c.name}, front view`"
              width="1200"
              height="630"
              :loading="i === 0 ? 'eager' : 'lazy'"
              :fetchpriority="i === 0 ? 'high' : 'auto'"
              decoding="async"
              referrerpolicy="no-referrer"
            />
            <span class="cars__play">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M21 12a9 9 0 1 1-3-6.7" /><path d="M21 4v5h-5" />
              </svg>
              {{ c.hasSpin ? 'Turn this car' : 'Look inside' }}
            </span>
          </button>
        </div>

        <div class="cars__info">
          <div>
            <h3 class="cars__name">{{ c.name }}</h3>
            <p class="cars__facts">{{ c.facts }}</p>
            <p v-if="c.description" class="cars__desc">{{ c.description }}</p>
          </div>
          <a :href="`${APP}/spin/${c.slug}`" class="cars__open" target="_blank" rel="noopener">
            Open full screen
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const APP = 'https://app.viewora.software'

/** The cars shown, in order. Names, pictures and descriptions come from the live listing at build time. */
const SLUGS: Array<{ slug: string; name: string }> = [
  { slug: 'toyota', name: 'Toyota' },
  { slug: 'lexus', name: 'Lexus' },
  { slug: 'jetour-hargeisa', name: 'Jetour G700' },
]

type Car = { slug: string; name: string; image: string | null; hasSpin: boolean; facts: string; description: string | null }

const config = useRuntimeConfig()
const api = ((config.public.apiBaseUrl as string) || 'https://api.viewora.software').replace(/\/+$/, '')

// Fetched once when the site is built (every page here is prerendered). A slow or failed
// lookup leaves that car with its name and link only, never a broken page.
const { data } = await useAsyncData('car-showcase', () => Promise.all(SLUGS.map(async (s): Promise<Car> => {
  try {
    const res: any = await $fetch(`${api}/p/${s.slug}`, { timeout: 10000 })
    const t = res?.data?.tour ?? res?.data ?? res?.tour ?? {}
    const frames = t.vehicle_spins?.[0]?.views?.length ?? 0
    const rooms = t.scenes?.length ?? 0
    const facts = [
      frames ? 'Exterior 360° spin' : null,
      rooms ? `${rooms} interior ${rooms === 1 ? 'view' : 'views'} in 360°` : null,
    ].filter(Boolean).join(' · ')
    const desc = typeof t.space?.description === 'string' ? t.space.description.trim() : ''
    return {
      slug: s.slug,
      name: s.name,
      image: t.share_image?.url ?? null,
      hasSpin: frames > 0,
      facts: facts || '360° tour',
      description: desc ? (desc.length > 220 ? `${desc.slice(0, 217).replace(/\s+\S*$/, '')}…` : desc) : null,
    }
  } catch {
    return { slug: s.slug, name: s.name, image: null, hasSpin: true, facts: '360° tour', description: null }
  }
})))

const cars = computed<Car[]>(() => data.value ?? SLUGS.map(s => ({ ...s, image: null, hasSpin: true, facts: '360° tour', description: null })))

const active = ref(0)
const loaded = ref(new Set<string>())
function load(slug: string) { loaded.value = new Set(loaded.value).add(slug) }
/** Once someone has turned one car, the next one they pick loads straight away. */
function choose(i: number) {
  const engaged = loaded.value.size > 0
  active.value = i
  if (engaged) load(cars.value[i].slug)
}

// Search engines: the three cars as a list, each with its picture and its own page.
useHead(() => ({
  script: [{
    type: 'application/ld+json',
    key: 'car-showcase-ld',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Cars with 360° spins on Viewora',
      itemListElement: cars.value.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${APP}/spin/${c.slug}`,
        item: {
          '@type': 'Car',
          name: c.name,
          url: `${APP}/spin/${c.slug}`,
          ...(c.image ? { image: c.image } : {}),
          ...(c.description ? { description: c.description } : {}),
        },
      })),
    }),
  }],
}))
</script>

<style scoped>
.cars__head { max-width: 680px; margin: 0 0 1.5rem; }
.cars__title {
  font-family: var(--font-display); font-size: 2rem; font-weight: 800; letter-spacing: -0.03em; line-height: 1.15;
  margin: 0 0 0.5rem; color: var(--ink);
}
.cars__sub { margin: 0; color: var(--slate); font-size: 1.0625rem; line-height: 1.6; }

.cars__pick { display: flex; gap: 0.5rem; margin-bottom: 1rem; overflow-x: auto; scrollbar-width: none; }
.cars__pick::-webkit-scrollbar { display: none; }
.cars__tab {
  flex: none; min-height: 48px; padding: 0 1.125rem; border-radius: 999px; cursor: pointer;
  border: 1px solid var(--border); background: var(--paper); color: var(--ink);
  font: 600 0.9375rem var(--font-sans); transition: border-color 150ms ease, background 150ms ease, transform 120ms ease;
}
.cars__tab:hover { border-color: var(--border-sharp); }
.cars__tab:active { transform: scale(0.97); }
.cars__tab.is-on { background: var(--ink); border-color: var(--ink); color: var(--paper); }
.cars__tab:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }

/* Wide enough to look at the car properly, short enough to keep the page moving. */
.cars__panel { max-width: min(100%, 1000px, calc(70vh * 16 / 9)); }
.cars__stage {
  position: relative; width: 100%; aspect-ratio: 16 / 9; border-radius: 12px; overflow: hidden;
  background: #0b0b0c; border: 1px solid var(--border);
}
.cars__frame { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; display: block; }
.cars__poster {
  position: absolute; inset: 0; width: 100%; height: 100%; padding: 0; border: 0; cursor: pointer; background: #0b0b0c;
  display: grid; place-items: end center; padding-bottom: 1.25rem;
}
.cars__poster img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.cars__play {
  position: relative; display: inline-flex; align-items: center; gap: 0.5rem; min-height: 48px; padding: 0 1.25rem;
  border-radius: 999px; background: var(--accent); color: var(--ink); font: 700 0.9375rem var(--font-sans);
  transition: transform 120ms ease;
}
.cars__poster:hover .cars__play { background: var(--primary-hover, #00c972); }
.cars__poster:active .cars__play { transform: scale(0.97); }
.cars__poster:focus-visible { outline: 3px solid var(--accent); outline-offset: -3px; }

.cars__info { display: flex; align-items: flex-start; justify-content: space-between; gap: 1.5rem; margin-top: 1rem; }
.cars__name { margin: 0; font-family: var(--font-display); font-size: 1.25rem; font-weight: 700; color: var(--ink); }
.cars__facts { margin: 0.25rem 0 0; color: var(--slate); font-size: 0.9375rem; }
.cars__desc { margin: 0.5rem 0 0; max-width: 640px; color: var(--ink-soft); font-size: 0.9375rem; line-height: 1.6; }
.cars__open {
  flex: none; display: inline-flex; align-items: center; gap: 0.375rem; min-height: 48px; padding: 0 0.25rem;
  color: var(--ink); font-weight: 600; font-size: 0.9375rem; text-decoration: underline; text-underline-offset: 3px;
}
.cars__open:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }

@media (max-width: 640px) {
  .cars__title { font-size: 1.625rem; }
  .cars__stage { aspect-ratio: 4 / 5; }
  .cars__info { flex-direction: column; gap: 0.25rem; }
}
@media (prefers-reduced-motion: reduce) {
  .cars__tab, .cars__play { transition: none; }
}
</style>
