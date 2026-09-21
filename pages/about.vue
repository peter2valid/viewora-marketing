<template>
  <div>
    <section class="section section-bg text-center">
      <div class="container" style="max-width: 800px;">
        <h1 class="section-title">Bridging the Gap Between Screen and Reality</h1>
        <p class="section-subtitle" style="margin-bottom: 3rem;">
          We are Viewora. We believe that finding a home, booking a stay, choosing a venue, or investing in space should be a transparent and immersive experience.
        </p>
        
        <div style="background: var(--paper-dim); padding: 1.5rem; border-radius: 0.75rem; border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; width: 100%;">
          <NuxtImg src="/images/home/dollhouse-commercial.png" width="492" height="277" format="webp" loading="lazy" alt="Viewora 3D Virtual Tour" style="max-width: 100%; object-fit: contain; border-radius: 0.375rem; filter: drop-shadow(0 8px 16px rgba(0,0,0,0.08));" />
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container" style="max-width: 800px;">
        <div class="mb-12">
          <h2 class="mb-4">The Market Problem</h2>
          <p class="text-muted mb-4 text-lg">
            For decades, the real estate and hospitality industries have relied on static images to sell physical spaces. But photos are fundamentally limited. They can be manipulated with clever angles, wide lenses, and heavy editing—creating a mismatch between expectation and reality.
          </p>
          <p class="text-muted text-lg">
            This lack of transparency leads to wasted physical viewings for real estate agents, disappointed guests for Airbnb hosts, and longer sales cycles for businesses. Buyers, renters, and customers want to know <em>exactly</em> what a space feels like before committing their time or money.
          </p>
        </div>

        <div class="mb-12">
          <h2 class="mb-4">Why Viewora Exists</h2>
          <p class="text-muted mb-4 text-lg">
            Viewora was founded in Kenya to solve this problem globally. We recognized that while enterprise-grade virtual tour software existed, it was often prohibitively expensive, required specialized hardware, and involved steep learning curves.
          </p>
          <p class="text-muted text-lg">
            We built Viewora to democratize spatial marketing. Our mission is to provide an accessible, powerful, and intuitive SaaS platform that empowers any business—from a single-space Airbnb host to a national dealership or university—to create and share immersive 360° virtual tours.
          </p>
        </div>

        <div class="card bg-surface-alt">
          <h3 class="mb-2">Our Mission</h3>
          <p class="text-muted">
            To make virtual walkthroughs the standard for space exploration worldwide, building trust through spatial transparency.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "About | Kenya's Virtual Tour Platform",
  description: 'Viewora is a SaaS company, founded in Kenya, making immersive 360° virtual tours and photo galleries accessible to any business that needs to showcase a space.',
  ogTitle: 'About Viewora | Our Story & Mission',
  ogDescription: 'Founded in Kenya to democratize spatial marketing. Viewora empowers agents, hosts and developers to create immersive 360° virtual tours in minutes.',
  ogUrl: 'https://viewora.software/about',
  ogImage: 'https://viewora.software/og-image.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'About Viewora',
  twitterDescription: 'The story behind an immersive space showcase platform built in Kenya for the world.',
})

useBreadcrumb('About', '/about')

useHead({
  link: [{ rel: 'canonical', href: 'https://viewora.software/about' }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About Viewora',
      url: 'https://viewora.software/about',
      description: 'Viewora is a SaaS platform for creating interactive 360° virtual tours for real estate, hospitality, automotive, and retail spaces.',
      publisher: {
        '@type': 'Organization',
        name: 'Viewora',
        url: 'https://viewora.software',
        foundingLocation: 'Nairobi, Kenya',
        foundingDate: '2024',
      }
    })
  }]
})
</script>
