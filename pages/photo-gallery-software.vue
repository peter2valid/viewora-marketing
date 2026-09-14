<template>
  <div>
    <SeoHero
      title="Not Every Listing Needs a Full 360° Tour"
      subtitle="Viewora isn't just virtual tours. Every space you publish includes a professional photo gallery too — so you can pair immersive 360° panoramas with sharp, standard photos in one listing, or lead with photos alone when that's all you need."
      badge="Photo Galleries"
    />

    <SeoContent>
      <h2>360° Tours and Photo Galleries, Together</h2>
      <p>
        A 360° panorama is the best way to let someone explore a space. But it isn't always the right tool for every image — a hero shot of a finished kitchen, a close-up of a car's upholstery, or a wide exterior photo often communicates more in a single frame than a panorama can. Viewora gives you both in one platform: publish a full <NuxtLink to="/360-virtual-tour-software" class="highlight">360° virtual tour</NuxtLink>, add a standard photo gallery alongside it, or do both on the same listing.
      </p>
      <p>
        You upload flat, ordinary photos the same way you'd upload them anywhere else — no panoramic camera, no stitching, no special equipment. Arrange them, set a cover image, and they publish as part of your listing's gallery.
      </p>

      <h2>Who This Is For</h2>
      <ul>
        <li><strong>Listings that don't justify a full tour yet:</strong> Get a property or vehicle online today with photos, then add a 360° tour later without creating a second listing.</li>
        <li><strong>Real estate agents:</strong> Pair a full walkthrough with hero shots for the listing thumbnail and social posts.</li>
        <li><strong>Car dealerships:</strong> Combine a 360° interior/exterior tour with detail shots of trim, wheels, and paint condition.</li>
        <li><strong>Hotels &amp; Airbnb hosts:</strong> Lead with a striking photo gallery for browsing, and let guests open the full tour when they want to explore a room in depth.</li>
        <li><strong>Anyone marketing a physical space:</strong> Schools, gyms, clinics, event venues — a gallery gets you online fast; a tour deepens trust once you're ready.</li>
      </ul>

      <h2>What's Included</h2>
      <p>
        Every listing's photo gallery shares the same publishing tools as your 360° tours:
      </p>
      <ul>
        <li><strong>One shareable link:</strong> The same link and preview card that work for your tour also carry your photo gallery — no separate hosting, no separate login for visitors.</li>
        <li><strong>Mobile &amp; desktop viewing:</strong> Galleries render cleanly on any device, same as tours.</li>
        <li><strong>QR codes:</strong> Print a QR code that opens your listing — gallery, tour, or both.</li>
        <li><strong>Custom cover image:</strong> Choose which photo represents the listing on social previews and property portals.</li>
        <li><strong>Embed on your website:</strong> Drop the same embed code you'd use for a tour to show the gallery on your own site.</li>
      </ul>
      <p>
        Higher-tier plans add custom branding, password-protected listings, and advanced analytics across both galleries and tours — see the <NuxtLink to="/pricing" class="highlight">pricing page</NuxtLink> for what's included on each plan.
      </p>

      <h2>Photos or a Full Tour — Which Should You Use?</h2>
      <p>
        There's no wrong answer, and you're not locked into one or the other. As a rough guide:
      </p>
      <ul>
        <li>Use a <strong>photo gallery alone</strong> when you need a listing online quickly, the space is simple, or you're marketing a single item (a vehicle, a product, a room) rather than a full property.</li>
        <li>Use a <strong>360° tour</strong> when spatial flow matters — buyers need to understand how rooms connect, or the sense of scale is part of what sells the space.</li>
        <li>Use <strong>both</strong> when you want the fast first impression of a photo gallery and the deeper trust a full walkthrough builds once someone is seriously interested.</li>
      </ul>
      <p>
        See a fuller breakdown on our <NuxtLink to="/virtual-tours-vs-photos" class="highlight">virtual tours vs photos comparison</NuxtLink>.
      </p>
    </SeoContent>

    <SeoFAQ
      heading="Photo Gallery Hosting — Frequently Asked Questions"
      :faqs="faqs"
    />

    <SeoCTA />
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'default' })

const faqs = [
  {
    q: 'Do I need a 360° camera to use Viewora?',
    a: 'No. You can publish a listing using only standard photos from any camera or smartphone — a 360° camera is only needed if you also want to add an interactive panoramic tour.',
  },
  {
    q: 'Can I add a photo gallery to a listing that already has a 360° tour?',
    a: 'Yes. Photo galleries and 360° tours live on the same listing — you can publish either one first and add the other later without creating a duplicate listing.',
  },
  {
    q: 'Is photo gallery hosting free?',
    a: 'Yes, Viewora\'s Free plan includes photo galleries alongside your active tours, at no cost. Paid plans add more storage, custom branding, and advanced analytics — see the pricing page for details.',
  },
  {
    q: 'Can I control the order photos appear in?',
    a: 'Yes, you can reorder gallery photos and choose which one is used as the cover image shown in previews and search results.',
  },
  {
    q: 'Can I share a photo gallery the same way I share a tour?',
    a: 'Yes. Every listing gets one shareable link and QR code that work whether the listing has a photo gallery, a 360° tour, or both.',
  },
]

useSeoMeta({
  title: 'Photo Gallery Hosting for Listings | Viewora',
  description: 'Host professional photo galleries alongside your 360° tours on Viewora. No panoramic camera required — publish standard photos in minutes, free to start.',
  ogTitle: 'Photo Gallery Hosting | Viewora',
  ogDescription: 'Not every listing needs a full 360° tour. Publish a photo gallery on Viewora in minutes — or pair it with a virtual tour for the best of both.',
  ogImage: 'https://viewora.software/og-image.jpg',
  ogUrl: 'https://viewora.software/photo-gallery-software',
  twitterCard: 'summary_large_image',
})

useBreadcrumb('Photo Gallery Software', '/photo-gallery-software')

useHead({
  link: [{ rel: 'canonical', href: 'https://viewora.software/photo-gallery-software' }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Viewora',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: 'https://viewora.software',
        description: 'Photo gallery hosting for property and business listings, alongside 360° virtual tours. Free to start.',
        featureList: [
          'Photo gallery hosting',
          '360° virtual tours',
          'Custom cover images',
          'QR codes',
          'Embeddable listings',
          'Mobile optimised',
        ],
        provider: {
          '@type': 'Organization',
          name: 'Viewora',
          url: 'https://viewora.software',
        },
      }),
    },
  ],
})
</script>
