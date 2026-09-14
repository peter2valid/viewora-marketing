<template>
  <div>
    <SeoHero
      title="Virtual Tour FAQ | All Your Questions Answered"
      subtitle="Everything you need to know about 360° virtual tours, Viewora's platform, pricing in Kenya, and how to get started. Answered clearly and completely."
      badge="Help Center"
    />

    <section class="section">
      <div class="container" style="max-width: 800px;">

        <div class="faq-group">
          <h2 class="faq-section-title">General Questions</h2>
          <details v-for="(item, i) in general" :key="i" class="faq-item">
            <summary class="faq-summary">{{ item.q }}</summary>
            <div class="faq-answer" v-html="item.a"></div>
          </details>
        </div>

        <div class="faq-group">
          <h2 class="faq-section-title">Pricing & Plans</h2>
          <details v-for="(item, i) in pricing" :key="i" class="faq-item">
            <summary class="faq-summary">{{ item.q }}</summary>
            <div class="faq-answer" v-html="item.a"></div>
          </details>
        </div>

        <div class="faq-group">
          <h2 class="faq-section-title">Technical Questions</h2>
          <details v-for="(item, i) in technical" :key="i" class="faq-item">
            <summary class="faq-summary">{{ item.q }}</summary>
            <div class="faq-answer" v-html="item.a"></div>
          </details>
        </div>

        <div class="faq-group">
          <h2 class="faq-section-title">Industry-Specific Questions</h2>
          <details v-for="(item, i) in industries" :key="i" class="faq-item">
            <summary class="faq-summary">{{ item.q }}</summary>
            <div class="faq-answer" v-html="item.a"></div>
          </details>
        </div>

        <div class="faq-group">
          <h2 class="faq-section-title">Integrations & Features</h2>
          <details v-for="(item, i) in integrations" :key="i" class="faq-item">
            <summary class="faq-summary">{{ item.q }}</summary>
            <div class="faq-answer" v-html="item.a"></div>
          </details>
        </div>

        <div class="card text-center" style="margin-top: 4rem; padding: 2.5rem;">
          <h3 class="mb-3">Still have questions?</h3>
          <p class="text-muted mb-6">Our team is based in Nairobi and happy to help with anything not covered here.</p>
          <NuxtLink to="/contact" class="btn btn-primary">Contact Us →</NuxtLink>
        </div>

      </div>
    </section>

    <SeoCTA />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const general = [
  { q: 'What is Viewora?', a: 'Viewora is a SaaS platform, founded in Kenya, that lets you create, host, and share professional 360° interactive virtual tours and photo galleries. It serves real estate agents, Airbnb hosts, hotels, car dealerships, schools, gyms, hospitals, and tourism operators worldwide.' },
  { q: 'What is a 360° virtual tour?', a: 'A 360° virtual tour is an immersive, interactive walkthrough of a real physical space. Viewers can look in every direction, navigate between rooms, and zoom into details — all from their smartphone, tablet, or computer. Unlike a video, viewers control where they look and where they go.' },
  { q: 'Is Viewora built specifically for Kenya?', a: 'Yes. Viewora is founded in Nairobi and built for the African market. Tours are optimized for Safaricom, Airtel, and Telkom mobile networks, pricing is in Kenyan Shillings (KES), and the platform is designed for the specific needs of Kenyan real estate, hospitality, and business sectors.' },
  { q: 'How long does it take to create a virtual tour?', a: 'You can have your first virtual tour live within minutes of uploading your 360° images. The capture (photography) process typically takes 1–3 hours depending on the size of your space. Viewora\'s editor allows you to connect rooms and publish immediately after upload.' },
  { q: 'Do viewers need to download an app to view my tour?', a: 'No. Viewora tours are entirely web-based. Anyone you share the link with can view your tour instantly in their mobile browser or on any computer — no app download, no account required.' },
  { q: 'Is there a native Viewora mobile app?', a: 'Viewora is entirely browser-based — there is no app to install for either creators or viewers. The platform is built mobile-first, so it works seamlessly on any iOS or Android device through the browser, including full gyroscope navigation support.' },
  { q: 'Does Viewora offer professional photography services?', a: 'Yes. Professional 360° photo shoots are available as an add-on on the Basic and Plus plans, and are included monthly on the Pro and Elite plans. Pro includes one shoot per month and Elite includes three shoots per month — making it easy to get production-quality panoramas without sourcing your own photographer.' },
]

const pricing = [
  { q: 'How much does Viewora cost in Kenya?', a: 'Viewora has a free plan, and paid plans from KES 999/month up to KES 4,999/month, plus custom Enterprise pricing for large organizations. All plans are billed in Kenyan Shillings via Paystack. Visit our <a href="/pricing" style="color:var(--accent)">pricing page</a> for current rates.' },
  { q: 'Can I pay monthly or yearly?', a: 'Yes. Viewora offers both monthly and yearly billing. Yearly plans include approximately 17% savings compared to monthly billing. Payments are processed securely by Paystack in KES.' },
  { q: 'What payment methods are accepted?', a: 'Viewora accepts M-Pesa, Visa, Mastercard, and other cards through Paystack. M-Pesa support makes it easy for Kenyan businesses to subscribe and pay locally without the need for a credit card.' },
  { q: 'Can I cancel my subscription anytime?', a: 'Yes. Viewora subscriptions can be cancelled at any time from your billing settings. You will retain access to your plan features until the end of your current billing period. No long-term contracts or cancellation fees.' },
  { q: 'How many active tours can I have per plan?', a: 'The number of active tours depends on your plan: Free allows 2 active tours, Creator allows 5, Professional allows 25, and Business allows 100. Enterprise plans have custom limits. Each plan also caps the number of scenes per tour — 5 on Free, 25 on Creator, 75 on Professional, and 150 on Business.' },
  { q: 'Is there a free plan?', a: 'Yes. The Free plan lets you create up to 2 active tours with up to 5 scenes per tour, at no cost — ideal for trying Viewora before upgrading. Paid plans unlock more tours, more scenes per tour, and additional features like custom branding, advanced analytics, and lead capture.' },
]

const technical = [
  { q: 'What cameras can I use with Viewora?', a: 'Viewora is compatible with any 360° camera that produces equirectangular panoramic images. Popular compatible cameras include Ricoh Theta, Insta360, GoPro MAX, and Samsung Gear 360. You can also use Viewora\'s mobile capture feature on supported smartphones.' },
  { q: 'Does Viewora work on mobile phones in Kenya?', a: 'Yes. Viewora is built mobile-first. Tours load fast on 3G and 4G connections and support full gyroscope navigation on iOS and Android devices. Your viewers can experience immersive 360° tours directly in their mobile browser without any app installation.' },
  { q: 'Can I embed my virtual tour on my website?', a: 'Yes. Every Viewora tour comes with an embed code that you can paste into any website, property listing page, or landing page. Tours are also shareable via direct link for WhatsApp, email, and social media.' },
  { q: 'What image resolution does Viewora support?', a: 'Viewora supports high-resolution panoramic uploads up to 8K resolution. This ensures that every detail of your space is crystal clear when zoomed in — tiles, fixtures, finishes, and features remain sharp at any magnification level.' },
  { q: 'Can I add information and labels to my virtual tour?', a: 'Yes. Viewora\'s editor allows you to add interactive hotspots anywhere in your tour. Hotspots can display text, images, prices, links to floor plans, contact forms, and more — turning your tour into a full marketing asset.' },
  { q: 'Can multiple team members manage our Viewora account?', a: 'Yes. The Elite plan includes team accounts, allowing multiple users to create, edit, and manage tours under a single subscription. This is ideal for agencies, property management companies, and hotel groups managing a large portfolio of spaces.' },
  { q: 'Can I manage multiple properties or spaces from one dashboard?', a: 'Yes. The Pro plan includes a multi-space dashboard and project/apartment mode, giving you a centralised view of all your spaces and tours. This is particularly useful for property developers and real estate agencies managing listings across multiple locations.' },
]

const integrations = [
  { q: 'Can I publish my Viewora tour to Google Street View?', a: 'Yes. The Pro plan and above include Google Street View publishing. This allows your virtual tour to appear directly on Google Maps and Google Search results for your property or business address — significantly increasing organic discovery.' },
  { q: 'Does Viewora support white-label branding?', a: 'Yes. The Elite plan includes a white-label viewer, allowing you to remove all Viewora branding and replace it with your own logo and identity. This is ideal for agencies, developers, and enterprise clients who want a fully branded experience for their clients.' },
  { q: 'Can I use my own custom domain for my Viewora tours?', a: 'Yes. The Elite plan includes a custom domain option, so your tours can be hosted under your own domain rather than a Viewora subdomain. This reinforces brand trust and is particularly valuable for agencies presenting tours to their own clients.' },
  { q: 'Can I capture leads directly inside my virtual tour?', a: 'Yes. The Plus plan and above include a lead capture button that can be embedded directly within your tour. Visitors can submit their contact details — name, phone, email — without leaving the tour experience, turning passive viewers into active enquiries automatically.' },
  { q: 'Does Viewora integrate with CRM or booking platforms?', a: 'Viewora does not currently offer direct API integrations with CRM tools like Salesforce or HubSpot, or with property booking platforms. However, tours can be embedded via iframe into any website or booking page, and the built-in lead capture forms (Plus plan+) collect enquiry data directly within the tour.' },
]

const industries = [
  { q: 'How do real estate agents in Kenya use virtual tours?', a: 'Kenyan real estate agents use Viewora to give buyers and renters a full property inspection remotely. This pre-qualifies enquiries, eliminates wasted site visits, reaches diaspora buyers, and significantly reduces the average time-to-sale. See our <a href="/real-estate-virtual-tours-kenya" style="color:var(--accent)">real estate virtual tours</a> page.' },
  { q: 'Can Airbnb hosts in Kenya add a virtual tour to their listing?', a: 'Yes. Airbnb hosts share their Viewora tour link in their listing description or send it directly to enquiring guests on WhatsApp. Hosts in Nairobi, Mombasa, and Diani consistently report more bookings and fewer negative reviews after implementing virtual tours.' },
  { q: 'Do hotels in Kenya use virtual tours to get more direct bookings?', a: 'Yes. Hotels use Viewora tours on their own website to reduce OTA dependency and drive direct bookings. When a guest has already toured the property virtually on the hotel\'s website, they book directly — saving the hotel 15–25% in OTA commission fees.' },
  { q: 'Can car dealerships in Kenya use virtual tours to sell more cars?', a: 'Yes. Viewora\'s virtual showroom tours let car buyers inspect every vehicle in 360° detail from their phone. Dealerships in Nairobi report significantly higher conversion rates from physical viewings after buyers have toured vehicles virtually first.' },
  { q: 'Are virtual tours useful for schools and universities in Kenya?', a: 'Very much so. Kenyan schools use Viewora campus tours on their admissions pages to attract students from upcountry, the diaspora, and across East Africa. Families that can tour the campus virtually convert to formal applications at a much higher rate than those who only see photos.' },
  { q: 'Can gyms and fitness centres use Viewora?', a: 'Yes. Gyms and fitness centres use Viewora tours on their websites and social media to showcase their equipment, studios, and facilities before a prospect visits. Virtual facility tours remove the hesitation of committing to a membership without seeing the space, and consistently increase membership enquiries.' },
  { q: 'Can tourism operators and safari companies in Kenya use Viewora?', a: 'Yes. Tourism operators use Viewora to create immersive destination previews — lodge rooms, safari camps, beach resorts, and national park viewpoints. Travellers booking high-value safari or coastal holidays are far more confident booking when they can virtually experience the property before paying a deposit.' },
]

useSeoMeta({
  title: 'Virtual Tour Software FAQ | Viewora',
  description: 'Frequently asked questions about Viewora\'s 360° virtual tour and photo gallery platform. Answers on pricing, how it works, mobile support, and more.',
  ogTitle: 'Virtual Tour FAQ | Everything You Need to Know | Viewora',
  ogDescription: 'Every question about creating and sharing virtual tours answered. Pricing, features, industries, technical requirements, and more.',
  ogImage: 'https://viewora.software/og-image.jpg',
  ogUrl: 'https://viewora.software/faq',
  twitterCard: 'summary_large_image',
})

useBreadcrumb('Virtual Tour FAQ', '/faq')

useHead({
  link: [{ rel: 'canonical', href: 'https://viewora.software/faq' }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          ...general.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') } })),
          ...pricing.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') } })),
          ...technical.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') } })),
          ...industries.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') } })),
          ...integrations.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') } })),
        ]
      })
    }
  ]
})

</script>

<style scoped>
.faq-group { margin-bottom: 3rem; }

.faq-section-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border-color);
}

.faq-item {
  border: 1px solid var(--border-color);
  border-radius: 0.75rem;
  margin-bottom: 0.5rem;
  background: var(--paper);
  box-shadow: var(--shadow-float);
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
}

.faq-item:hover {
  box-shadow: var(--shadow-lift);
  border-color: var(--border-sharp);
  transform: translateY(-2px);
}

.faq-item[open] {
  border-color: var(--primary);
  box-shadow: var(--shadow-lift);
}

.faq-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  cursor: pointer;
  font-weight: 700;
  color: var(--ink);
  list-style: none;
  user-select: none;
}

.faq-summary::-webkit-details-marker { display: none; }

.faq-summary::after {
  content: '+';
  font-size: 1.25rem;
  color: var(--primary);
  flex-shrink: 0;
  margin-left: 1rem;
  transition: transform 0.2s;
}

.faq-item[open] .faq-summary::after { transform: rotate(45deg); }

.faq-answer {
  padding: 1rem 1.5rem 1.25rem;
  color: var(--slate);
  line-height: 1.7;
  border-top: 1px solid var(--border-color);
}
</style>
