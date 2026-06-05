<template>
  <div>
    <!-- Hero -->
    <section class="capture-hero">
      <div class="container">
        <div class="capture-hero__inner">
          <div class="capture-hero__badge">
            <span class="capture-hero__dot" />
            Professional 360° Capture Service — Kenya
          </div>
          <h1 class="capture-hero__title">
            Don't have a 360° camera?<br>
            <span class="capture-hero__accent">We'll shoot it for you.</span>
          </h1>
          <p class="capture-hero__sub">
            Our certified photographers visit your property, capture it in immersive 360°,
            and upload it directly to your Viewora space — ready to publish within 48 hours.
            Available in Nairobi, Mombasa, and Kisumu.
          </p>
          <div class="capture-hero__actions">
            <a href="https://app.viewora.software/app/capture" class="btn btn-primary btn-lg btn-float">
              Book a Shoot — From KES 5,000
            </a>
            <a href="https://app.viewora.software/app/capture" class="btn btn-outline btn-lg">
              View All Packages →
            </a>
          </div>
          <p class="capture-hero__proof">✓ 48-hr delivery &nbsp; ✓ 25 property types covered &nbsp; ✓ Uploaded straight to your space</p>
        </div>
      </div>
      <div class="capture-hero__glow" />
    </section>

    <!-- Packages -->
    <section class="section section-bg">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Simple, Transparent Pricing</h2>
          <p class="section-subtitle">Choose the package that fits your property. All prices include the shoot, editing, and upload to your Viewora space.</p>
        </div>
        <div class="packages-grid">
          <div v-for="pkg in packages" :key="pkg.name" class="pkg-card" :class="pkg.popular ? 'pkg-card--popular' : ''">
            <div v-if="pkg.popular" class="pkg-card__badge">Most Popular</div>
            <h3 class="pkg-card__name">{{ pkg.name }}</h3>
            <div class="pkg-card__price">{{ pkg.price }}</div>
            <p class="pkg-card__desc">{{ pkg.desc }}</p>
            <ul class="pkg-card__list">
              <li v-for="f in pkg.features" :key="f">
                <span class="pkg-card__check">✓</span> {{ f }}
              </li>
            </ul>
            <a href="https://app.viewora.software/app/capture" class="pkg-card__btn">Book This Package</a>
          </div>
        </div>
      </div>
    </section>

    <!-- 25 Departments -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">We Shoot Any Type of Property</h2>
          <p class="section-subtitle">25 departments covered across Kenya. From a small barber shop to a full university campus.</p>
        </div>
        <div class="dept-grid">
          <div v-for="dept in departments" :key="dept.name" class="dept-card">
            <div class="dept-card__icon" v-html="dept.icon" />
            <div>
              <p class="dept-card__name">{{ dept.name }}</p>
              <p class="dept-card__from">From {{ dept.from }}</p>
            </div>
          </div>
        </div>
        <div style="text-align: center; margin-top: 2.5rem;">
          <a href="https://app.viewora.software/app/capture" class="btn btn-primary btn-lg">See Full Pricing by Department →</a>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="section section-bg">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">How It Works</h2>
        </div>
        <div class="steps-grid">
          <div v-for="(step, i) in steps" :key="i" class="step-card">
            <div class="step-card__num">{{ i + 1 }}</div>
            <h3 class="step-card__title">{{ step.title }}</h3>
            <p class="step-card__body">{{ step.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Cities -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Available Cities</h2>
          <p class="section-subtitle">Currently dispatching photographers in:</p>
        </div>
        <div class="cities-grid">
          <div v-for="city in cities" :key="city.name" class="city-card">
            <p class="city-card__name">{{ city.name }}</p>
            <p class="city-card__sub">{{ city.sub }}</p>
          </div>
        </div>
        <p style="text-align: center; color: var(--slate); font-size: 0.9rem; margin-top: 1.5rem;">
          Outside these cities? <a href="https://app.viewora.software/app/capture" style="color: var(--primary);">Contact us</a> — we may be able to accommodate.
        </p>
      </div>
    </section>

    <!-- FAQs -->
    <SeoFAQ heading="Capture Service — FAQs" :faqs="faqs" />

    <!-- CTA -->
    <section class="capture-cta">
      <div class="container">
        <div class="capture-cta__inner">
          <span class="capture-cta__dot" />
          <h2 class="capture-cta__title">Ready to get your property shot?</h2>
          <p class="capture-cta__sub">Book online in 2 minutes. We'll confirm your date within 24 hours and deliver your tour in 48.</p>
          <a href="https://app.viewora.software/app/capture" class="btn btn-primary btn-lg btn-float" style="background: #25d366; border-color: #25d366;">
            Book a Shoot — From KES 5,000
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '360° Photography Service Kenya | Professional Virtual Tour Capture | Viewora',
  description: 'No camera? No problem. Viewora dispatches certified photographers to your property — apartments, hotels, restaurants, schools, showrooms and more — from KES 5,000. Nairobi, Mombasa, Kisumu.',
  ogTitle: '360° Photography Capture Service Kenya — From KES 5,000',
  ogDescription: 'Professional 360° virtual tour photography for 25 property types across Kenya. Delivered to your Viewora space within 48 hours.',
})

const packages = [
  {
    name: 'Mini',
    price: 'KES 5,000',
    desc: 'Small room, shop, salon, or studio',
    popular: false,
    features: ['1 scene captured', '360° equirectangular output', 'Basic edit & upload', '24-hr delivery'],
  },
  {
    name: 'Starter',
    price: 'KES 7,500',
    desc: '1BR Airbnb, small office, boutique',
    popular: false,
    features: ['Up to 3 scenes', '360° tour + 10 gallery photos', 'Edited & uploaded to space', '24-hr delivery'],
  },
  {
    name: 'Standard',
    price: 'KES 10,000',
    desc: '2BR apartment, small restaurant, clinic, gym',
    popular: true,
    features: ['Up to 6 scenes', '360° tour + 15 gallery photos', 'Edited & uploaded', '48-hr delivery'],
  },
  {
    name: 'Pro',
    price: 'KES 15,000',
    desc: '3BR house, showroom, larger business',
    popular: false,
    features: ['Up to 10 scenes', '360° tour + 25 gallery photos', 'Edited & uploaded', '48-hr delivery'],
  },
  {
    name: 'Business',
    price: 'KES 25,000',
    desc: 'Hotel, school, event venue, large showroom',
    popular: false,
    features: ['Up to 20 scenes', '360° tour + 40 gallery photos', 'Drone aerial (if applicable)', '48-hr delivery', 'Project manager assigned'],
  },
  {
    name: 'Premium',
    price: 'From KES 40,000',
    desc: 'Resort, factory, developer, large institution',
    popular: false,
    features: ['Unlimited scenes', '60+ gallery photos', 'Drone aerial coverage', '72-hr delivery', 'Dedicated team + PM'],
  },
]

const departments = [
  { name: 'Real Estate',            from: 'KES 5,000',  icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>' },
  { name: 'Airbnb & Furnished',     from: 'KES 5,000',  icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5Z"/><path d="M9 21V12h6v9"/></svg>' },
  { name: 'Hotels & Accommodation', from: 'KES 15,000', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 2h18v20H3z"/><path d="M9 22V12h6v10"/></svg>' },
  { name: 'Events & Venues',        from: 'KES 15,000', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h20M4 20V10l8-7 8 7v10"/></svg>' },
  { name: 'Restaurants & Bars',     from: 'KES 7,500',  icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>' },
  { name: 'Tourism & Safari',       from: 'KES 20,000', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/></svg>' },
  { name: 'Schools & Education',    from: 'KES 20,000', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>' },
  { name: 'Clinics & Healthcare',   from: 'KES 7,500',  icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>' },
  { name: 'Gyms, Spas & Salons',    from: 'KES 5,000',  icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6.5 6.5h11M6.5 17.5h11M3 3.5h1.5v17H3zM19.5 3.5H21v17h-1.5z"/></svg>' },
  { name: 'Showrooms & Retail',     from: 'KES 7,500',  icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/></svg>' },
  { name: 'Automotive',             from: 'KES 10,000', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>' },
  { name: 'Offices & Corporate',    from: 'KES 7,500',  icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="15" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>' },
  { name: 'Churches & Religious',   from: 'KES 10,000', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 22H6a2 2 0 0 1-2-2V7l5-5h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2z"/><path d="M12 8v8M8 12h8"/></svg>' },
  { name: 'Government & Public',    from: 'KES 30,000', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>' },
  { name: 'Industrial & Factory',   from: 'KES 20,000', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>' },
  { name: 'Agriculture & Farms',    from: 'KES 10,000', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22V12M12 12C12 7 7 3 2 3c0 5 4 9 10 9z"/><path d="M12 12c0-5 5-9 10-9 0 5-4 9-10 9z"/></svg>' },
  { name: 'Entertainment & Parks',  from: 'KES 10,000', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>' },
  { name: 'Sports Facilities',      from: 'KES 15,000', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20M2 12h20"/></svg>' },
  { name: 'Creative & Cultural',    from: 'KES 7,500',  icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>' },
  { name: 'Construction & Design',  from: 'KES 10,000', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h20M4 20V8l8-6 8 6v12"/></svg>' },
  { name: 'Insurance & Docs',       from: 'KES 7,500',  icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' },
  { name: 'E-commerce & Shops',     from: 'KES 5,000',  icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/></svg>' },
  { name: 'Logistics & Warehouses', from: 'KES 15,000', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/></svg>' },
  { name: 'Training Centres',       from: 'KES 10,000', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/></svg>' },
  { name: 'Partners & Resellers',   from: 'KES 4,000',  icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>' },
]

const steps = [
  { title: 'Book online in 2 minutes', body: 'Pick your package, fill in your property address and preferred date. We confirm within 24 hours.' },
  { title: 'Photographer dispatched to you', body: 'A certified 360° photographer arrives on your chosen date with full equipment. No setup required on your end.' },
  { title: 'Tour live within 48 hours', body: 'Edited panoramas and gallery photos are uploaded directly to your Viewora space, ready to publish and share.' },
]

const cities = [
  { name: 'Nairobi', sub: 'All estates & areas covered' },
  { name: 'Mombasa', sub: 'Coastal properties & hotels' },
  { name: 'Kisumu', sub: 'Lakeside & city properties' },
]

const faqs = [
  { q: 'Do I need my own 360° camera?', a: 'No. We bring all equipment — 360° camera, DSLR for gallery shots, tripod, and lighting. You just need to be at the property.' },
  { q: 'How long does a shoot take?', a: 'A standard home or office takes 1–2 hours. Larger properties like hotels or schools may take a full day. We\'ll give you an estimate when you book.' },
  { q: 'What if I need to reschedule?', a: 'No problem. Cancel or reschedule at least 24 hours before the shoot at no charge. Contact us at hello@viewora.software.' },
  { q: 'What cities do you cover?', a: 'Currently Nairobi, Mombasa, and Kisumu. Contact us for other locations — we may be able to accommodate special requests.' },
  { q: 'How will I receive my tour?', a: 'The photographer uploads directly to your Viewora account. You\'ll receive an email confirmation when it\'s ready to publish.' },
  { q: 'Can I book as a photographer or reseller?', a: 'Yes! We offer white-label pricing for photographers, videographers, and web designers. Contact us for partner pricing.' },
]
</script>

<style scoped>
/* ── Hero ──────────────────────────────────────────── */
.capture-hero {
  position: relative; padding: 7rem 0 5rem; overflow: hidden;
  background: var(--ink); border-bottom: 1px solid var(--border-dark);
}
.capture-hero__inner { position: relative; z-index: 2; max-width: 760px; }
.capture-hero__badge {
  display: inline-flex; align-items: center; gap: 8px;
  font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
  color: #25d366; margin-bottom: 1.5rem;
}
.capture-hero__dot {
  width: 8px; height: 8px; border-radius: 50%; background: #25d366;
  box-shadow: 0 0 10px rgba(37,211,102,0.8); flex-shrink: 0;
  animation: dot-pulse 2s ease-in-out infinite;
}
@keyframes dot-pulse { 0%,100%{opacity:1}50%{opacity:0.4} }
.capture-hero__title { font-size: clamp(2.5rem, 6vw, 4rem); font-weight: 900; line-height: 1.08; letter-spacing: -0.04em; color: var(--paper); margin-bottom: 1.25rem; }
.capture-hero__accent { color: #25d366; }
.capture-hero__sub { font-size: 1.1rem; color: var(--slate-light); line-height: 1.7; margin-bottom: 2.5rem; max-width: 600px; }
.capture-hero__actions { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 1.5rem; }
.capture-hero__proof { font-size: 0.8rem; color: var(--slate); letter-spacing: 0.02em; }
.capture-hero__glow {
  position: absolute; top: -20%; left: -10%; width: 60%; height: 100%;
  background: radial-gradient(circle at 30% 50%, rgba(37,211,102,0.1) 0%, transparent 60%);
  pointer-events: none;
}

/* ── Packages ──────────────────────────────────────── */
.packages-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.25rem; }
.pkg-card {
  position: relative; display: flex; flex-direction: column; gap: 0.5rem;
  padding: 1.5rem; border-radius: 1rem;
  background: var(--paper); border: 1px solid var(--border); transition: box-shadow 160ms;
}
.pkg-card:hover { box-shadow: var(--shadow-lg); }
.pkg-card--popular { border-color: var(--primary); box-shadow: 0 0 0 1px var(--primary); }
.pkg-card__badge { position: absolute; top: -10px; left: 50%; transform: translateX(-50%); font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; padding: 3px 10px; border-radius: 999px; background: var(--primary); color: #fff; white-space: nowrap; }
.pkg-card__name { font-size: 1rem; font-weight: 800; color: var(--ink); }
.pkg-card__price { font-size: 1.5rem; font-weight: 900; color: var(--ink); letter-spacing: -0.03em; }
.pkg-card__desc { font-size: 0.85rem; color: var(--slate); line-height: 1.4; }
.pkg-card__list { list-style: none; padding: 0; margin: 0.5rem 0 0; display: flex; flex-direction: column; gap: 0.35rem; flex: 1; }
.pkg-card__list li { font-size: 0.85rem; color: var(--slate); display: flex; gap: 0.5rem; align-items: flex-start; }
.pkg-card__check { color: var(--primary); font-weight: 800; flex-shrink: 0; }
.pkg-card__btn {
  display: block; text-align: center; margin-top: 1.25rem;
  padding: 0.625rem; border-radius: 0.5rem; font-size: 0.875rem; font-weight: 700; text-decoration: none;
  background: var(--primary); color: #fff; transition: opacity 140ms;
}
.pkg-card__btn:hover { opacity: 0.85; }

/* ── Departments ───────────────────────────────────── */
.dept-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 0.875rem; }
.dept-card {
  display: flex; align-items: center; gap: 12px;
  padding: 14px 16px; border-radius: 12px;
  background: var(--paper); border: 1px solid var(--border);
  transition: border-color 140ms, box-shadow 140ms;
}
.dept-card:hover { border-color: rgba(37,211,102,0.4); box-shadow: 0 4px 16px rgba(37,211,102,0.08); }
.dept-card__icon { flex-shrink: 0; width: 34px; height: 34px; border-radius: 9px; background: var(--bg-surface-alt, #f5f5f5); display: flex; align-items: center; justify-content: center; color: var(--ink); }
.dept-card__name { font-size: 12px; font-weight: 700; color: var(--ink); line-height: 1.3; }
.dept-card__from { font-size: 11px; color: var(--primary); font-weight: 700; margin-top: 1px; }

/* ── Steps ─────────────────────────────────────────── */
.steps-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; }
.step-card { padding: 1.75rem; border-radius: 1rem; background: var(--paper); border: 1px solid var(--border); }
.step-card__num { width: 40px; height: 40px; border-radius: 10px; background: rgba(37,211,102,0.1); border: 1px solid rgba(37,211,102,0.25); display: flex; align-items: center; justify-content: center; font-size: 1rem; font-weight: 900; color: #25d366; margin-bottom: 1rem; }
.step-card__title { font-size: 1rem; font-weight: 800; color: var(--ink); margin-bottom: 0.5rem; }
.step-card__body { font-size: 0.875rem; color: var(--slate); line-height: 1.6; }

/* ── Cities ────────────────────────────────────────── */
.cities-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; max-width: 600px; margin: 0 auto; }
.city-card { padding: 1.5rem; border-radius: 12px; text-align: center; background: var(--paper); border: 1px solid var(--border); }
.city-card__name { font-size: 1.25rem; font-weight: 900; color: var(--ink); margin-bottom: 0.25rem; }
.city-card__sub { font-size: 0.8rem; color: var(--slate); }

/* ── CTA ───────────────────────────────────────────── */
.capture-cta { background: var(--ink); padding: 5rem 0; text-align: center; position: relative; overflow: hidden; }
.capture-cta__inner { position: relative; z-index: 2; max-width: 600px; margin: 0 auto; }
.capture-cta__dot { display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #25d366; box-shadow: 0 0 12px rgba(37,211,102,0.8); margin-bottom: 1.5rem; animation: dot-pulse 2s ease-in-out infinite; }
.capture-cta__title { font-size: clamp(1.75rem, 4vw, 2.75rem); font-weight: 900; letter-spacing: -0.03em; color: var(--paper); margin-bottom: 1rem; }
.capture-cta__sub { font-size: 1rem; color: var(--slate-light); margin-bottom: 2rem; line-height: 1.6; }
</style>
