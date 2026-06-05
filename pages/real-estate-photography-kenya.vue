<template>
  <div>
    <SeoHero
      title="Real Estate Photography Kenya | 360° Property Photographer Nairobi"
      subtitle="Professional real estate photography and 360° virtual tours for properties across Kenya. Apartments, houses, villas, estates, and commercial listings. From KES 5,000. Sell faster with immersive visuals."
      badge="Kenya's Property Photographer"
    />

    <SeoContent>
      <h2>Professional Real Estate Photography in Kenya</h2>
      <p>
        <strong>Real estate photography in Kenya</strong> has evolved. Static photos no longer cut through in a competitive market. The agents and developers closing deals faster are the ones offering <strong>360° virtual tours alongside professional photography</strong> — and Viewora provides both in a single affordable package.
      </p>
      <p>
        Our certified real estate photographers serve Nairobi, Mombasa, and Kisumu. We arrive at your property, capture stunning 360° panoramas and gallery shots, edit everything professionally, and deliver the complete package within 48 hours.
      </p>

      <h3>What's Included in Every Real Estate Photography Package</h3>
      <ul>
        <li><strong>360° panorama per room</strong> — interactive, explorable, embeddable</li>
        <li><strong>DSLR gallery photos</strong> — professionally lit and edited</li>
        <li><strong>Direct upload to Viewora</strong> — instant publishing, no extra steps</li>
        <li><strong>Shareable tour link</strong> — send to WhatsApp, email, or listing portals</li>
        <li><strong>Embed code</strong> — add to your agency website</li>
      </ul>

      <h3>Real Estate Photography Packages for Every Budget</h3>
      <ul>
        <li><strong>Bedsitter / Studio (KES 3,500–5,000)</strong> — compact urban rentals in Nairobi</li>
        <li><strong>1BR Apartment (KES 5,000–7,500)</strong> — standard residential listings</li>
        <li><strong>2BR Apartment (KES 7,500–10,000)</strong> — family apartments</li>
        <li><strong>3BR House / Apartment (KES 10,000–15,000)</strong> — full residential property</li>
        <li><strong>4BR+ House / Maisonette (KES 15,000–25,000)</strong> — larger family homes</li>
        <li><strong>Luxury Villa (KES 25,000–40,000)</strong> — premium listings with drone aerial</li>
        <li><strong>Estate / Apartment Block (from KES 40,000)</strong> — development marketing</li>
      </ul>

      <blockquote>
        "We switched to Viewora for all our Nairobi listings. Virtual tours get 8x more engagement than photos alone, and our time-on-page doubled. It pays for itself on the first deal." <br>— Agency Director, Nairobi Real Estate
      </blockquote>

      <h2>Why Kenyan Real Estate Agents Use 360° Photography</h2>
      <ul>
        <li><strong>Diaspora buyers</strong> — Kenyans abroad can do a full property walkthrough before flying in</li>
        <li><strong>Pre-qualify viewings</strong> — only serious buyers request physical visits</li>
        <li><strong>Stand out on portals</strong> — Properties with virtual tours get 3x more enquiries on listing sites</li>
        <li><strong>Agency credibility</strong> — professional photography positions your brand above the competition</li>
        <li><strong>Off-plan sales</strong> — show show units and model apartments to distant investors</li>
      </ul>

      <h2>Areas Covered for Real Estate Photography in Kenya</h2>
      <p>
        We photograph properties across <strong>Nairobi</strong> (Westlands, Kilimani, Karen, Kasarani, South C, Ngong Road and all estates), <strong>Mombasa</strong> (Nyali, Bamburi, Diani, Malindi), and <strong>Kisumu</strong>. Contact us for other Kenyan towns.
      </p>

      <p>
        Ready to get your property photographed? <a href="/360-photography-service-kenya">View our packages and book a shoot →</a>
      </p>
    </SeoContent>

    <SeoFAQ heading="Real Estate Photography Kenya — FAQs" :faqs="faqs" />
    <SeoCTA />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Real Estate Photography Kenya | 360° Property Photographer Nairobi | Viewora',
  description: 'Professional real estate photography and 360° virtual tours for Kenya properties. Apartments, houses, villas, estates. From KES 5,000. Nairobi, Mombasa, Kisumu. Delivered in 48hrs.',
  robots: 'index, follow',
  keywords: 'real estate photography Kenya, property photographer Kenya, real estate photographer Nairobi, 360 real estate photography Kenya, property photography Nairobi, virtual tour real estate Kenya',
})
useHead({
  link: [{ rel: 'canonical', href: 'https://viewora.software/real-estate-photography-kenya' }],
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Real Estate Photography Kenya',
      description: 'Professional 360° real estate photography and virtual tour creation for properties across Kenya.',
      provider: { '@type': 'Organization', name: 'Viewora', url: 'https://viewora.software' },
      areaServed: { '@type': 'Country', name: 'Kenya' },
      offers: { '@type': 'AggregateOffer', lowPrice: '3500', highPrice: '40000', priceCurrency: 'KES' },
    }),
  }],
})
const faqs = [
  { q: 'How much does real estate photography cost in Kenya?', a: 'Real estate photography starts from KES 3,500 for a bedsitter to KES 40,000+ for luxury villas and estates. Our most popular package is the Standard at KES 10,000, covering a 2–3BR property with 360° tour and gallery photos.' },
  { q: 'Do you include both 360° and regular photos?', a: 'Yes. All packages include 360° equirectangular panoramas for the interactive tour plus edited DSLR gallery photos suitable for listing portals like Property24, BuyRentKenya, and your own website.' },
  { q: 'Can I use the photos on property listing sites?', a: 'Absolutely. The gallery photos are fully licensed for commercial use on any property listing portal. The 360° tour link can be embedded or shared on any platform.' },
  { q: 'Do you shoot off-plan properties in Kenya?', a: 'Yes. We photograph show units, model apartments, and presentation rooms for off-plan developments. A 360° show unit tour is a powerful sales tool for diaspora investors.' },
]
</script>
