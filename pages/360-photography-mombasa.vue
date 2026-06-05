<template>
  <div>
    <SeoHero
      title="360° Photography Mombasa | Virtual Tour Photographer Coastal Kenya"
      subtitle="Professional 360° virtual tour photography across Mombasa, Diani, Malindi, Watamu, and the Kenyan Coast. Hotels, Airbnbs, restaurants, and real estate — from KES 5,000. Delivered in 48 hours."
      badge="Mombasa 360° Photographer"
    />

    <SeoContent>
      <h2>360° Photography Service in Mombasa and the Kenyan Coast</h2>
      <p>
        Viewora provides professional <strong>360° photography in Mombasa</strong> and across the Kenyan coast. Our certified photographers cover Mombasa Island, Nyali, Bamburi, Diani Beach, Malindi, Watamu, and surrounding areas. We capture your coastal property in stunning 360° panoramas and deliver a fully interactive virtual tour within 48 hours.
      </p>

      <h3>Areas We Cover Along the Kenyan Coast</h3>
      <ul>
        <li><strong>Mombasa Island</strong> — CBD, Old Town, Port Reitz</li>
        <li><strong>North Coast</strong> — Nyali, Bamburi, Shanzu, Mtwapa</li>
        <li><strong>South Coast</strong> — Diani Beach, Ukunda, Tiwi, Galu</li>
        <li><strong>Malindi & Watamu</strong> — beach resorts and eco-lodges</li>
        <li><strong>Kilifi County</strong> — boutique properties and retreats</li>
      </ul>

      <h3>Perfect for Coastal Kenya's Property Types</h3>
      <p>The Kenyan coast is one of Africa's top tourism destinations. Virtual tours are critical for:</p>
      <ul>
        <li><strong>Beach hotels and resorts</strong> — let international guests preview before booking</li>
        <li><strong>Diani Beach Airbnbs and villas</strong> — stand out on Airbnb with immersive 360° previews</li>
        <li><strong>Mombasa restaurants</strong> — beachfront dining experiences</li>
        <li><strong>Coastal real estate</strong> — ocean view apartments and holiday homes</li>
        <li><strong>Malindi and Watamu lodges</strong> — eco-tourism properties</li>
        <li><strong>Event venues</strong> — beach wedding venues and conference facilities</li>
      </ul>

      <blockquote>
        "Our Diani Beach villa had over 60% more enquiries after we published the Viewora virtual tour. International tourists can now explore the property from Europe before booking." <br>— Villa Owner, Diani Beach
      </blockquote>

      <h2>360° Photography Prices in Mombasa</h2>
      <ul>
        <li><strong>Mini (KES 5,000)</strong> — small room, boutique shop, or studio</li>
        <li><strong>Starter (KES 7,500)</strong> — 1BR beach apartment or small guesthouse</li>
        <li><strong>Standard (KES 10,000)</strong> — 2BR villa, small hotel, café or restaurant</li>
        <li><strong>Pro (KES 15,000)</strong> — 3BR villa, medium-sized restaurant or lounge</li>
        <li><strong>Business (KES 25,000)</strong> — full beach hotel or large event venue</li>
        <li><strong>Premium (from KES 40,000)</strong> — resort, large lodge, or development</li>
      </ul>
      <p>Note: a small travel supplement may apply for locations more than 30km from Mombasa CBD (e.g. South Diani, Watamu, Malindi).</p>

      <h2>Why Mombasa Properties Need Virtual Tours</h2>
      <p>
        Over 70% of international visitors to Kenya's coast research accommodation online before booking. A professional 360° virtual tour lets your hotel, villa, or restaurant appear in Google search results, on Airbnb, and on your own website — with a fully immersive preview that photos alone can't match.
      </p>
      <p>
        Viewora is the leading <strong>virtual tour platform for coastal Kenya properties</strong>. Our Mombasa photographers understand the coastal hospitality market and are trained to capture the unique textures, light, and atmosphere of coastal spaces.
      </p>
    </SeoContent>

    <SeoFAQ heading="360° Photography Mombasa — FAQs" :faqs="faqs" />
    <SeoCTA />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '360° Photography Mombasa & Diani | Virtual Tour Photographer Coast Kenya | Viewora',
  description: 'Professional 360° photography in Mombasa, Diani Beach, Malindi & Watamu. Hotels, Airbnbs, villas & restaurants. From KES 5,000. 48-hr delivery.',
  robots: 'index, follow',
  keywords: '360 photography Mombasa, 360 photographer Mombasa, virtual tour photographer Mombasa, 360 photography Diani, virtual tour photography coastal Kenya, hotel photographer Mombasa',
})
useHead({
  link: [{ rel: 'canonical', href: 'https://viewora.software/360-photography-mombasa' }],
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: '360° Photography Service Mombasa',
      provider: { '@type': 'Organization', name: 'Viewora', url: 'https://viewora.software' },
      areaServed: [
        { '@type': 'City', name: 'Mombasa' },
        { '@type': 'Place', name: 'Diani Beach' },
        { '@type': 'City', name: 'Malindi' },
      ],
      offers: { '@type': 'AggregateOffer', lowPrice: '5000', highPrice: '40000', priceCurrency: 'KES' },
    }),
  }],
})
const faqs = [
  { q: 'Do you cover Diani Beach and South Coast?', a: 'Yes. We cover the entire Kenyan coast including Diani, Tiwi, Galu, Malindi, and Watamu. A travel supplement applies for locations more than 30km from Mombasa CBD.' },
  { q: 'How much does 360° photography cost in Mombasa?', a: 'Mombasa packages start from KES 5,000 for a small property. Beach hotels and larger properties are quoted from KES 25,000. All prices include shoot, editing, and upload.' },
  { q: 'Can you shoot my hotel or resort in Mombasa?', a: 'Yes. Our Business (KES 25,000) and Premium (from KES 40,000) packages are designed for hotels and resorts. We capture all rooms, facilities, grounds, and provide drone aerials if requested.' },
  { q: 'How do international tourists find my virtual tour?', a: 'Your Viewora tour can be embedded on your website, linked in your Airbnb or Booking.com listing, and shared directly. The tour page is also indexed by Google for organic discovery.' },
]
</script>
