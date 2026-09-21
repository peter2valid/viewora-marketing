<template>
  <div>
    <SeoHero 
      title="Terms of Service | Viewora Africa"
      subtitle="The agreement for professional property marketing. Understand the standards and responsibilities of the Viewora community."
      badge="Service Agreement"
    />

    <SeoContent>
      <h2>Governing Your Use of Viewora</h2>
      <p>
        Welcome to <strong>Viewora</strong>. By using our platform, you agree to these Terms of Service. These terms are designed to ensure a high-quality, professional environment for all property agents, developers, and hosts using <NuxtLink to="/product" class="highlight">Viewora's virtual tour software</NuxtLink>.
      </p>

      <h2>1. Use of the Platform</h2>
      <p>
        You are responsible for the content of the <span class="highlight">360 virtual tours Kenya</span> you create. You must have the legal right to photograph and showcase any property listed on your account. This ensures integrity in the <strong>real estate market in Kenya</strong> and across Africa.
      </p>

      <h2>2. Account Responsibilities</h2>
      <p>
        You must provide accurate information when creating your account. Your account is for your professional use in <strong>property marketing in Africa</strong>. You are responsible for maintaining the security of your login credentials.
      </p>

      <h3>Key Service Standards:</h3>
      <ul>
        <li><strong>Professional Conduct:</strong> Use Viewora to build trust and provide accurate property information.</li>
        <li><strong>Fair Use:</strong> Our platform is built for high performance across Africa, and we expect users to avoid actions that disrupt service for others.</li>
        <li><strong>Content Ownership:</strong> You retain ownership of your property panoramas, while granting Viewora the rights necessary to host and display them as part of your tours.</li>
      </ul>

      <blockquote>
        "Viewora is a community of professional marketers. Our terms are built to uphold the highest standards of PropTech in Africa."
      </blockquote>

      <h2>3. Subscription and Payments</h2>
      <p>
        Viewora offers various plans tailored to your needs—from solo Airbnb hosts to large real estate firms. Fees are transparent and designed to provide strong value in <strong>virtual tour software in Kenya</strong>.
      </p>

      <h2>4. Termination</h2>
      <p>
        We reserve the right to suspend or terminate accounts that violate these terms or compromise the integrity of the <strong>African property market</strong>. We value our relationship with every professional in our community.
      </p>

      <h2>Contact for Legal Matters</h2>
      <p>
        For any questions regarding these terms, please contact legal@viewora.software. Join us in setting the standard for <NuxtLink to="/virtual-tours-kenya" class="highlight">360 property marketing</NuxtLink> in Africa.
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
  title: 'Terms of Service',
  description: 'The official terms of service for the Viewora platform. Professional standards for real estate agents and hosts using virtual tours in Kenya and Africa.',
  ogTitle: 'Terms of Service | Viewora Africa Service Agreement',
  ogDescription: 'Upholding the highest standards in African property technology.',
  ogImage: 'https://viewora.software/og-image.jpg',
  ogUrl: 'https://viewora.software/legal/terms',
  twitterCard: 'summary_large_image',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://viewora.software/legal/terms' }],
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Terms of Service',
      url: 'https://viewora.software/legal/terms',
      publisher: { '@type': 'Organization', name: 'Viewora', url: 'https://viewora.software' }
    })
  }]
})
</script>
