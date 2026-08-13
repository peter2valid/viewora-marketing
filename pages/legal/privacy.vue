<template>
  <div>
    <SeoHero 
      title="Privacy Policy | Viewora Africa"
      subtitle="Your trust is our foundation. Learn how we protect your data and the information of your property viewers across the continent."
      badge="Data Protection"
    />

    <SeoContent>
      <h2>Our Commitment to Your Privacy</h2>
      <p>
        At <strong>Viewora</strong>, we understand that privacy is paramount in the <strong>real estate market in Kenya</strong> and across Africa. This Privacy Policy outlines how we collect, use, and safeguard the information you provide when using the <NuxtLink to="/virtual-tours-kenya" class="highlight">#1 virtual tour software in Kenya</NuxtLink>.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        To provide you with the best <span class="highlight">360 property marketing</span> experience, we collect basic registration data and information related to the property tours you create. This allows us to offer tailored insights and support for your <strong>property marketing in Africa</strong>.
      </p>

      <h2>2. How We Use Your Data</h2>
      <p>
        We use your information to operate and improve the Viewora platform, provide customer support, and ensure a smooth experience for your property viewers. We do not sell your personal data to third parties. Our focus is purely on helping you grow with <NuxtLink to="/virtual-tours-kenya" class="highlight">virtual tours in Kenya</NuxtLink>.
      </p>

      <h3>Key Privacy Protections:</h3>
      <ul>
        <li><strong>Secure Storage:</strong> Your property data is stored on encrypted, high-performance servers.</li>
        <li><strong>User Control:</strong> You have full control over the visibility and access of your 360° tours.</li>
        <li><strong>Compliance:</strong> We strive to comply with relevant data protection regulations across the African markets we serve.</li>
      </ul>

      <blockquote>
        "We believe privacy is a fundamental right. Building trust in Africa's PropTech sector starts with how we handle your information."
      </blockquote>

      <h2>3. Third-Party Integrations</h2>
      <p>
        Viewora may integrate with trusted third-party services to enhance your marketing (e.g., analytics or social sharing). We ensure these partners adhere to high standards of <strong>data privacy in Africa</strong>.
      </p>

      <h2>4. WhatsApp Communications</h2>
      <p>
        Viewora offers an optional WhatsApp bot feature that allows clients to submit property information and receive professionally curated WhatsApp posters for their listings. This feature is powered by the <strong>WhatsApp Business API</strong>, provided by <strong>Meta Platforms, Inc.</strong>, which acts as a data processor for messages sent and received through this feature.
      </p>

      <h3>What We Collect</h3>
      <ul>
        <li><strong>Phone number:</strong> used to identify and communicate with you via WhatsApp.</li>
        <li><strong>Message content:</strong> the text of conversations exchanged with the bot.</li>
        <li><strong>Message metadata:</strong> including timestamps, delivery status, and read receipts.</li>
        <li><strong>Images and documents:</strong> primarily photos of rental properties that you submit, used to generate your professional property poster.</li>
      </ul>

      <h3>How We Use This Data</h3>
      <p>
        We use WhatsApp conversation data solely to curate and generate professional WhatsApp posters and property presentations on your behalf, respond to inquiries and provide support through the WhatsApp bot, and improve the quality and accuracy of the poster generation feature. We do not sell WhatsApp conversation data to third parties.
      </p>

      <h3>Data Retention and Access</h3>
      <p>
        WhatsApp conversation data is retained and made accessible to you directly through your <strong>Viewora dashboard</strong>, where you can review your conversation history at any time. You may delete individual conversations at your discretion — this option is available directly within your dashboard.
      </p>

      <h3>Opting Out</h3>
      <p>
        If you no longer wish to use the WhatsApp bot feature or have your data processed through it, you may delete your Viewora profile at any time via your <strong>account settings</strong>. Profile deletion can be performed at your convenience and will remove associated WhatsApp conversation data tied to your account.
      </p>

      <h3>Compliance</h3>
      <p>
        Our use of the WhatsApp Business API complies with <strong>Meta's WhatsApp Business Messaging Policy</strong> and <strong>Meta's Platform Terms</strong>. As the underlying infrastructure provider for this feature, Meta Platforms, Inc. processes WhatsApp message data on our behalf in accordance with its own data processing terms.
      </p>

      <h2>5. Updates to This Policy</h2>
      <p>
        As we continue to lead the way in <strong>property technology in Africa</strong>, we may update this policy. We will notify you of any significant changes via the platform or email.
      </p>

      <h2>Contact Our Privacy Team</h2>
      <p>
        If you have any questions about our privacy practices, please contact us at privacy@viewora.software. We are committed to maintaining your trust as the leading provider of <NuxtLink to="/virtual-tours-kenya" class="highlight">360 virtual tours Kenya</NuxtLink>.
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
  title: 'Privacy Policy | Viewora #1 PropTech Africa',
  description: 'Learn how Viewora protects your data and property information. Our high standards for privacy and security in the African real estate tech market.',
  ogTitle: 'Privacy Policy | Viewora Africa Data Protection',
  ogDescription: 'Your trust and privacy are our top priorities. Professional PropTech standards.',
  ogImage: 'https://viewora.software/og-image.jpg',
  ogUrl: 'https://viewora.software/legal/privacy',
  twitterCard: 'summary_large_image',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://viewora.software/legal/privacy' }],
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Privacy Policy',
      url: 'https://viewora.software/legal/privacy',
      publisher: { '@type': 'Organization', name: 'Viewora', url: 'https://viewora.software' }
    })
  }]
})
</script>
