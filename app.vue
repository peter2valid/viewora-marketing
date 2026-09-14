<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// Single-language, single-currency-of-record site with no locale/region
// variants — x-default tells Google this content isn't geo-restricted to
// any particular market, which matters now that pricing.vue's structured
// data was already fixed to say the same thing. Self-referencing per
// route, so it works across every page without touching all 44 of them
// individually.
const route = useRoute()
useHead({
  link: [
    {
      rel: 'alternate',
      hreflang: 'x-default',
      href: () => `https://viewora.software${route.path}`,
    },
  ],
})

useSeoMeta({
  title: 'Viewora | Immersive 360° Virtual Tour Platform',
  ogTitle: 'Viewora | Immersive 360° Virtual Tour Platform',
  description: 'Create, host, and share interactive 360° virtual tours in minutes. The professional platform for real estate, hospitality, automotive, and retail spaces.',
  ogDescription: 'Create, host, and share interactive 360° virtual tours in minutes.',
  ogType: 'website',
  ogUrl: 'https://viewora.software',
  ogSiteName: 'Viewora',
  twitterCard: 'summary_large_image',
})

useSchemaOrg([
  defineOrganization({
    name: 'Viewora',
    url: 'https://viewora.software',
    logo: 'https://viewora.software/icon.png',
  }),
  defineWebSite({
    name: 'Viewora',
    url: 'https://viewora.software',
  }),
])
</script>
