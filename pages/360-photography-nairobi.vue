<template>
  <div>
    <SeoHero
      title="360° Photography Nairobi | Virtual Tour Photographer Near You"
      subtitle="Nairobi's most affordable professional 360° photography service. We dispatch a certified photographer to your property anywhere in Nairobi — Westlands, Karen, Kilimani, CBD, Kasarani, Ngong Road and beyond. From KES 5,000."
      badge="Nairobi 360° Photographer"
    />

    <SeoContent>
      <h2>Professional 360° Photography Service in Nairobi</h2>
      <p>
        Viewora provides the best <strong>360° photography service in Nairobi</strong>. Whether you own an apartment in Westlands, a restaurant in Kilimani, a showroom along Ngong Road, or a hotel in the CBD — our certified photographers will come to you, capture your space in stunning 360°, and deliver a fully interactive virtual tour within 24–48 hours.
      </p>

      <h3>Areas We Cover in Nairobi</h3>
      <p>We dispatch photographers to all Nairobi areas including:</p>
      <ul>
        <li>Westlands · Parklands · Lavington</li>
        <li>Kilimani · Kileleshwa · Spring Valley</li>
        <li>Karen · Langata · Runda · Gigiri</li>
        <li>CBD · Upper Hill · Upperhill</li>
        <li>Kasarani · Roysambu · TRM Area</li>
        <li>Ngong Road · Rongai · Satellite</li>
        <li>South C · South B · Donholm · Embakasi</li>
        <li>Thika Road corridor (Ruiru, Juja)</li>
      </ul>

      <h3>Property Types We Shoot in Nairobi</h3>
      <ul>
        <li><strong>Nairobi apartments</strong> — bedsitters to penthouses, from KES 5,000</li>
        <li><strong>Airbnb properties</strong> — boost your Nairobi short-let bookings</li>
        <li><strong>Nairobi restaurants and cafés</strong> — from Westlands to Ngong Road</li>
        <li><strong>Nairobi offices and co-working spaces</strong> — virtual office tours</li>
        <li><strong>Nairobi hotels and guest houses</strong> — full property capture</li>
        <li><strong>Nairobi car showrooms</strong> — along Waiyaki Way and beyond</li>
        <li><strong>Nairobi schools and colleges</strong> — virtual open days</li>
        <li><strong>Retail showrooms</strong> — furniture, tiles, kitchens, electronics</li>
      </ul>

      <blockquote>
        "I needed 360° photos for my Kilimani apartment listing urgently. Viewora confirmed same-day and the tour was live before I even met the first viewing." <br>— Landlord, Kilimani Nairobi
      </blockquote>

      <h2>360° Photography Prices in Nairobi</h2>
      <p>
        Our Nairobi 360° photography packages start from <strong>KES 5,000</strong> and include the full shoot, professional editing, and direct upload to your Viewora space.
      </p>
      <ul>
        <li><strong>Mini (KES 5,000)</strong> — 1 small room, studio, salon, or shop</li>
        <li><strong>Starter (KES 7,500)</strong> — 1BR Airbnb, small office, boutique</li>
        <li><strong>Standard (KES 10,000)</strong> — 2BR apartment, clinic, gym, small restaurant</li>
        <li><strong>Pro (KES 15,000)</strong> — 3BR house, larger business, showroom</li>
        <li><strong>Business (KES 25,000)</strong> — hotel, school, large event venue</li>
        <li><strong>Premium (from KES 40,000)</strong> — large campus, resort, factory</li>
      </ul>

      <h2>How to Book a 360° Photographer in Nairobi</h2>
      <ol>
        <li>Choose your <a href="/360-photography-service-kenya">package</a> based on property size</li>
        <li>Enter your Nairobi address and preferred shoot date</li>
        <li>We confirm within 24 hours</li>
        <li>Your tour is live within 48 hours of the shoot</li>
      </ol>
    </SeoContent>

    <SeoFAQ heading="360° Photography Nairobi — FAQs" :faqs="faqs" />
    <SeoCTA />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '360° Photography Nairobi | Virtual Tour Photographer — From KES 5,000 | Viewora',
  description: 'Professional 360° photography anywhere in Nairobi. Apartments, Airbnbs, restaurants, offices, hotels & showrooms. From KES 5,000. Confirmed in 24hrs, delivered in 48hrs.',
  robots: 'index, follow',
  keywords: '360 photography Nairobi, 360 photographer Nairobi, virtual tour photographer Nairobi, 360 photography service Nairobi, virtual tour photography Nairobi, property photographer Nairobi',
})
useHead({
  link: [{ rel: 'canonical', href: 'https://viewora.software/360-photography-nairobi' }],
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: '360° Photography Service Nairobi',
      provider: { '@type': 'Organization', name: 'Viewora', url: 'https://viewora.software' },
      areaServed: { '@type': 'City', name: 'Nairobi', containedInPlace: { '@type': 'Country', name: 'Kenya' } },
      offers: { '@type': 'AggregateOffer', lowPrice: '5000', highPrice: '40000', priceCurrency: 'KES' },
    }),
  }],
})
const faqs = [
  { q: 'How much does 360° photography cost in Nairobi?', a: 'Nairobi 360° photography starts from KES 5,000 for a small space. A standard 2–3BR apartment or restaurant costs KES 10,000–15,000. Full hotel packages start from KES 25,000.' },
  { q: 'How quickly can you come to my Nairobi property?', a: 'We typically confirm shoots within 24 hours of booking. For urgent same-day or next-day requests in Nairobi, contact us directly at hello@viewora.software.' },
  { q: 'Do you cover all areas of Nairobi?', a: 'Yes — we cover all Nairobi estates including Westlands, Kilimani, Karen, Kasarani, CBD, Upper Hill, Ngong Road, South C/B, Thika Road corridor and more.' },
  { q: 'What is included in the price?', a: 'All packages include the shoot (photographer travel to your property), 360° panorama capture, professional editing, gallery photos, and direct upload to your Viewora space.' },
]
</script>
