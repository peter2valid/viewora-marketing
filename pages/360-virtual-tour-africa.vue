<template>
  <div>
    <SeoHero 
      title="360 Virtual Tour Software Africa | Leading Property Tech"
      subtitle="Empowering property professionals across the continent with world-class immersive technology. A virtual tour platform built for the African market."
      badge="Africa Wide Platform"
    />

    <SeoContent>
      <h2>The Definitive 360 Virtual Tour Choice for Africa</h2>
      <p>
        Across Africa, from the tech hubs of Nairobi and Lagos to the growing cities of Kigali and Accra, the property market is evolving. <strong>Viewora</strong> is <span class="highlight">360° virtual tour software built for Africa</span>, providing high-performance technology that enables real estate agents and developers to reach a global audience.
      </p>

      <h3>Transforming Property Marketing Across the Continent</h3>
      <p>
        Digital disruption in the African real estate sector is here. Viewora is at the forefront, providing tools that are optimized for the continent's specific infrastructure and network requirements.
      </p>
      <ul>
        <li><strong>Lightweight and Fast:</strong> Tours load instantly on mobile networks in Kenya, Nigeria, South Africa, and beyond.</li>
        <li><strong>Diaspora and International Focus:</strong> Showcase African properties to investors around the world with stunning immersive detail.</li>
        <li><strong>Cross-Sector Versatility:</strong> Suitable for residential sales, commercial leasing, and hospitality marketing across Africa.</li>
      </ul>

      <blockquote>
        "Viewora is by far the most reliable property tech we've used in our pan-African expansion. It works seamlessly wherever we deploy it." <br>— International Real Estate Network Operating in 12 African Countries
      </blockquote>

      <h2>Building Trust in the African Property Market</h2>
      <p>
        Trust is the key to scaling any property business in Africa. Viewora is <span class="highlight">virtual tour software built for African agents</span>, providing transparency and credibility that images alone cannot deliver.
      </p>

      <h3>Leading the PropTech Revolution in Africa</h3>
      <p>
        Our goal is to be the foundation for digital property marketing in every major African city. Viewora is the definitive solution for **360° property tours in Africa**.
      </p>

      <h2>Join Africa's Real Estate Leaders</h2>
      <p>
        Become part of the most innovative property community on the continent. Start using Viewora today and give your African property listings the world-class digital presence they deserve.
      </p>
    </SeoContent>

    <SeoCTA />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
useSeoMeta({
  title: '360 Virtual Tour Software Africa | Viewora',
  description: 'Virtual tour software for businesses across Africa. Showcase Kenyan, Nigerian, and South African properties with professional 360° tours on Viewora.',
  ogTitle: '360 Virtual Tour Software Africa | Leading ProTech',
  ogDescription: 'Experience the future of African property marketing. Immersive 360° tours for a global audience.',
  ogImage: 'https://viewora.software/og-image.jpg',
  ogUrl: 'https://viewora.software/360-virtual-tour-africa',
  twitterCard: 'summary_large_image',
})

useBreadcrumb('360° Virtual Tours Africa', '/360-virtual-tour-africa')

useHead({
  link: [{ rel: 'canonical', href: 'https://viewora.software/360-virtual-tour-africa' }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Viewora Africa",
        "description": "The definitive 360 virtual tour platform for the African real estate market."
      })
    }
  ]
})
</script>
