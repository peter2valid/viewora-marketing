<template>
  <div>
    <SeoHero 
      title="Viewora Company: Shaping the Future of African Real Estate"
      subtitle="Dedicated to building the technological infrastructure that enables trust and transparency in the African property and hospitality market."
      badge="Our Company"
    />

    <SeoContent>
      <h2>Leading the Digital Transformation of African Property</h2>
      <p>
        Viewora is a high-growth PropTech company headquartered in Nairobi, Kenya. We are on a mission to become the definitive platform for <strong>immersive property marketing across Africa</strong>. We believe that by providing world-class <NuxtLink to="/virtual-tours-kenya" class="highlight">virtual tour software in Kenya</NuxtLink>, we can unlock the multi-billion dollar real estate potential on the continent.
      </p>

      <h2>1. Our Purpose: Trust and Transparency</h2>
      <p>
        In many African markets, trust remains the biggest barrier to property investment. Viewora's company focus is on solving this through technology. Our 360° virtual tours provide an unedited, honest look at every property, reducing the friction in sales and rental transactions for <span class="highlight">real estate marketing in Kenya</span>.
      </p>

      <h2>2. Engineering for Global Performance from Africa</h2>
      <p>
        Unlike many PropTech platforms designed for western infrastructure, Viewora is engineered for the African reality first. Our software is mobile-first, lightweight, and optimized to load instantly on 3G and 4G networks from Nairobi to Lagos — while working just as well anywhere else in the world. See it in action for <NuxtLink to="/virtual-tours-kenya" class="highlight">virtual tours in Kenya</NuxtLink>.
      </p>

      <h3>Company Milestones:</h3>
      <ul>
        <li><strong>Nairobi Hub:</strong> Strategically based in the heartbeat of African innovation.</li>
        <li><strong>Africa-Wide Reach:</strong> Thousands of tours published across Kenya, Nigeria, South Africa, and Rwanda.</li>
        <li><strong>Mission-Driven:</strong> Every feature we build is designed to help African property professionals succeed globally.</li>
      </ul>

      <blockquote>
        "Viewora is by far the most reliable property tech we've used in our African expansion. It's fast, simple, and the support in Kenya is outstanding." <br>— International Real Estate Network partner
      </blockquote>

      <h2>3. Scaling the PropTech Ecosystem</h2>
      <p>
        We are not just a software company; we are partners in growth for our community of agents, developers, and Airbnb hosts. Our long-term vision is to provide the central technological layer for <strong>property discovery in Africa</strong>. Join us as we build the future of immersive property marketing.
      </p>

      <h2>4. A Commitment to Excellence</h2>
      <p>
        Whether you are a solo host or a multi-national agency, our company is committed to providing you with world-class <span class="highlight">360 property marketing</span> tools. Experience the Viewora advantage today and lead the way in <strong>property technology in Africa</strong>.
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
  title: 'Viewora Company | Our Mission',
  description: 'Meet the team behind Viewora, a 360° virtual tour and photo gallery platform founded in Kenya, making spatial marketing accessible worldwide.',
  ogTitle: 'Viewora Company | Our Mission',
  ogDescription: 'Meet the team behind Viewora and the mission driving our virtual tour and photo gallery software.',
  ogImage: 'https://viewora.software/og-image.jpg',
  ogUrl: 'https://viewora.software/company',
  twitterCard: 'summary_large_image',
})

useBreadcrumb('Company', '/company')

useHead({
  link: [{ rel: 'canonical', href: 'https://viewora.software/company' }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Viewora Company",
        "description": "Leading African PropTech company based in Nairobi, Kenya, providing the #1 360 virtual tour platform for the continent."
      })
    }
  ]
})
</script>
