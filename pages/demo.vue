<template>
  <div>
    <section class="section section-bg text-center">
      <div class="container" style="max-width: 800px;">
        <h1 class="section-title">See Real Viewora Tours</h1>
        <p class="section-subtitle mb-8">
          No mockups, no stock demos — these are live tours published by real Viewora customers across different industries. Click through, explore a room, and see exactly what your own tour would feel like.
        </p>
      </div>
    </section>

    <section class="section" v-for="(demo, i) in demos" :key="demo.slug" :style="i % 2 === 1 ? 'background-color: var(--paper-dim);' : ''">
      <div class="container">
        <div class="section-header text-center mb-8">
          <h2 class="section-title" style="font-size: 1.75rem;">{{ demo.title }}</h2>
          <p class="section-subtitle" style="max-width: 700px; margin: 0 auto;">{{ demo.description }}</p>
        </div>
        <div class="card" style="padding: 0; overflow: hidden; max-width: 1000px; margin: 0 auto; border: 1px solid var(--border); box-shadow: var(--shadow-lg);">
          <iframe
            :src="demo.embedUrl"
            style="width: 100%; height: 500px; border: none; display: block; background: #000;"
            allowfullscreen
            loading="lazy"
            allow="fullscreen; gyroscope; accelerometer; xr-spatial-tracking"
            :title="`Live Viewora Tour — ${demo.title}`"
          ></iframe>
        </div>
      </div>
    </section>

    <section class="section section-bg text-center">
      <div class="container">
        <h2 class="mb-4" style="font-size: 2rem;">Want a tour like this for your own space?</h2>
        <p class="section-subtitle mb-8" style="max-width: 600px; margin: 0 auto 2rem;">
          Start free — no credit card required — and have your first tour live in minutes.
        </p>
        <NuxtLink to="https://app.viewora.software/register" class="btn btn-primary btn-lg">Start Free</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const demos = [
  {
    slug: 'onyx-apartmentshouse-and-homes',
    title: 'Real Estate — Onyx Apartments',
    description: 'A full walkthrough of a residential property, room by room — exactly what a buyer or tenant explores before scheduling a physical viewing.',
    embedUrl: 'https://app.viewora.software/embed/onyx-apartmentshouse-and-homes',
  },
  {
    slug: 'azari-suites',
    title: 'Hospitality — Azari Suites',
    description: 'A hotel and suites tour, built to let guests explore rooms and amenities before booking.',
    embedUrl: 'https://app.viewora.software/embed/azari-suites',
  },
  {
    slug: 'thika-green-holiday-homes',
    title: 'Vacation Rentals — Thika Green Holiday Homes',
    description: 'A holiday rental listing, published the same way any Airbnb or short-let host would use Viewora to boost booking confidence.',
    embedUrl: 'https://app.viewora.software/embed/thika-green-holiday-homes',
  },
]

useSeoMeta({
  title: 'Live Demo — Real Viewora Tours | Viewora',
  description: 'Explore real 360° virtual tours published by Viewora customers across real estate, hospitality, and vacation rentals. See the product in action, no sign-up required.',
  ogTitle: 'Live Demo — Real Viewora Tours',
  ogDescription: 'Explore real, live 360° virtual tours published by Viewora customers. See exactly what your own tour would look like.',
  ogImage: 'https://viewora.software/og-image.jpg',
  ogUrl: 'https://viewora.software/demo',
  twitterCard: 'summary_large_image',
})

useBreadcrumb('Demo', '/demo')

useHead({
  link: [{ rel: 'canonical', href: 'https://viewora.software/demo' }],
})
</script>
