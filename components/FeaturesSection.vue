<template>
  <section class="section section-bg">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Built for Any Space or Environment</h2>
        <p class="section-subtitle">From real estate to luxury resorts and car showrooms — Viewora grows with your business.</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
        <!-- Real Estate -->
        <div class="card text-center">
          <div style="background: var(--paper-dim); padding: 1.5rem; border-radius: 0.5rem; margin-bottom: 1.5rem; border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; aspect-ratio: 4/3;">
            <img src="/images/home/plain land.png" loading="lazy" alt="Real Estate Tours on Mobile" style="max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 0.25rem; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.05));" />
          </div>
          <h3 class="mb-3">Real Estate Agents</h3>
          <p class="text-muted">Pre-qualify buyers before the viewing. Let clients explore every room from their phone — saving you time and closing more deals.</p>
          <ul style="text-align: left; margin-top: 1.25rem; list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.5rem;">
            <li style="display: flex; gap: 0.5rem; align-items: center; font-size: 0.9rem;"><span style="color: var(--primary);">✓</span> Unlimited space tours</li>
            <li style="display: flex; gap: 0.5rem; align-items: center; font-size: 0.9rem;"><span style="color: var(--primary);">✓</span> Shareable link for listings</li>
            <li style="display: flex; gap: 0.5rem; align-items: center; font-size: 0.9rem;"><span style="color: var(--primary);">✓</span> Embed on your website</li>
          </ul>
        </div>

        <!-- Space Developers -->
        <div class="card text-center" style="border: 2px solid var(--primary);">
          <div style="font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--primary); margin-bottom: 0.75rem;">Most Popular</div>
          <div style="background: var(--paper-dim); padding: 1.5rem; border-radius: 0.5rem; margin-bottom: 1.5rem; border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; aspect-ratio: 4/3;">
            <img src="/images/home/dollhouse-commercial.png" loading="lazy" alt="3D Dollhouse View" style="max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 0.25rem; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.05));" />
          </div>
          <h3 class="mb-3">Hospitality & Short-Term Rentals</h3>
          <p class="text-muted">Perfect for Airbnb hosts, hotels, resorts, and lodges. Reduce guest queries about layout and boost booking confidence with a virtual walkthrough.</p>
          <ul style="text-align: left; margin-top: 1.25rem; list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.5rem;">
            <li style="display: flex; gap: 0.5rem; align-items: center; font-size: 0.9rem;"><span style="color: var(--primary);">✓</span> Works on any device</li>
            <li style="display: flex; gap: 0.5rem; align-items: center; font-size: 0.9rem;"><span style="color: var(--primary);">✓</span> Gyroscope support on mobile</li>
            <li style="display: flex; gap: 0.5rem; align-items: center; font-size: 0.9rem;"><span style="color: var(--primary);">✓</span> Instant public link</li>
          </ul>
        </div>

        <!-- Property Developers -->
        <div class="card text-center">
          <div style="background: var(--paper-dim); padding: 1.5rem; border-radius: 0.5rem; margin-bottom: 1.5rem; border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; aspect-ratio: 4/3;">
            <img src="/images/home/floorplan-hotspots.png" loading="lazy" alt="Hotspot Floorplan Navigation" style="max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 0.25rem; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.05));" />
          </div>
          <h3 class="mb-3">Architecture & Development</h3>
          <p class="text-muted">Showcase model apartments, event venues, schools, and off-plan projects to global audiences before they even visit.</p>
          <ul style="text-align: left; margin-top: 1.25rem; list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.5rem;">
            <li style="display: flex; gap: 0.5rem; align-items: center; font-size: 0.9rem;"><span style="color: var(--primary);">✓</span> Custom branding & white-label</li>
            <li style="display: flex; gap: 0.5rem; align-items: center; font-size: 0.9rem;"><span style="color: var(--primary);">✓</span> 8K high-resolution support</li>
            <li style="display: flex; gap: 0.5rem; align-items: center; font-size: 0.9rem;"><span style="color: var(--primary);">✓</span> Multi-unit project management</li>
          </ul>
        </div>

        <!-- Car Dealerships -->
        <div class="card text-center">
          <div style="background: var(--paper-dim); padding: 1.5rem; border-radius: 0.5rem; margin-bottom: 1.5rem; border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; aspect-ratio: 4/3;">
            <img src="/images/home/car dealership.png" loading="lazy" alt="Car Dealership 360 View" style="max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 0.25rem; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.05));" />
          </div>
          <h3 class="mb-3">Car Dealerships</h3>
          <p class="text-muted">Put buyers behind the wheel from anywhere. Showcase interior and exterior 360° views to drive higher engagement and foot traffic.</p>
          <ul style="text-align: left; margin-top: 1.25rem; list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.5rem;">
            <li style="display: flex; gap: 0.5rem; align-items: center; font-size: 0.9rem;"><span style="color: var(--primary);">✓</span> High-res interior views</li>
            <li style="display: flex; gap: 0.5rem; align-items: center; font-size: 0.9rem;"><span style="color: var(--primary);">✓</span> Exterior walkarounds</li>
            <li style="display: flex; gap: 0.5rem; align-items: center; font-size: 0.9rem;"><span style="color: var(--primary);">✓</span> Embed in online showrooms</li>
          </ul>
        </div>
      </div>

      <!-- Capture CTA block -->
      <div class="capture-block">
        <div class="capture-block__left">
          <div class="capture-block__badge">
            <span class="capture-block__dot" />
            Professional Capture Service
          </div>
          <h3 class="capture-block__title">Don't have a 360° camera? We'll shoot it for you.</h3>
          <p class="capture-block__sub">Our certified photographers cover all 25 property types across Kenya — apartments, hotels, restaurants, schools, showrooms and more. Delivered to your Viewora space within 48 hours.</p>
          <div class="capture-block__prices">
            <span>From <strong>KES 5,000</strong></span>
            <span>•</span>
            <span>Nairobi, Mombasa, Kisumu</span>
            <span>•</span>
            <span>48-hr delivery</span>
          </div>
          <NuxtLink to="https://app.viewora.software/app/capture" class="capture-block__btn">
            View All Packages & Book →
          </NuxtLink>
        </div>
        <div class="capture-block__right">
          <div class="capture-block__grid">
            <span v-for="dept in captureDepts" :key="dept" class="capture-block__tag">{{ dept }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const captureDepts = [
  'Real Estate','Airbnb','Hotels','Restaurants','Schools',
  'Clinics','Gyms','Car Showrooms','Offices','Retail',
  'Churches','Tourism','Agriculture','Factories','Warehouses',
]
</script>

<style scoped>
.capture-block {
  margin-top: 3rem; padding: 2.5rem; border-radius: 1.5rem;
  background: linear-gradient(135deg, rgba(37,211,102,0.06) 0%, rgba(59,130,246,0.06) 100%);
  border: 1px solid rgba(37,211,102,0.18);
  display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; align-items: center;
}
@media (max-width: 768px) { .capture-block { grid-template-columns: 1fr; } }
.capture-block__badge {
  display: inline-flex; align-items: center; gap: 7px;
  font-size: 11px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase;
  color: #25d366; margin-bottom: 1rem;
}
.capture-block__dot {
  width: 7px; height: 7px; border-radius: 50%; background: #25d366;
  box-shadow: 0 0 8px rgba(37,211,102,0.8); flex-shrink: 0;
}
.capture-block__title { font-size: 1.5rem; font-weight: 900; line-height: 1.25; margin-bottom: 0.75rem; color: var(--ink); letter-spacing: -0.02em; }
.capture-block__sub { font-size: 0.9rem; color: var(--slate); line-height: 1.7; margin-bottom: 1.25rem; }
.capture-block__prices { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; font-size: 12px; color: var(--slate); margin-bottom: 1.5rem; }
.capture-block__prices strong { color: var(--ink); font-weight: 900; }
.capture-block__prices span:nth-child(2n) { opacity: 0.35; }
.capture-block__btn {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 12px 22px; border-radius: 12px; font-size: 13px; font-weight: 800; text-decoration: none;
  background: #25d366; color: #0a0a0a; transition: background 140ms ease, transform 140ms ease;
}
.capture-block__btn:hover { background: #20bd5a; transform: translateY(-1px); }
.capture-block__grid { display: flex; flex-wrap: wrap; gap: 8px; }
.capture-block__tag {
  padding: 5px 12px; border-radius: 999px; font-size: 12px; font-weight: 700;
  background: rgba(37,211,102,0.08); border: 1px solid rgba(37,211,102,0.18);
  color: var(--slate);
}
</style>