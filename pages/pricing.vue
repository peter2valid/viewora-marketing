<template>
  <div>
    <section class="section section-bg">
      <div class="container text-center">
        <h1 class="section-title">Simple, Transparent Pricing</h1>
        <p class="section-subtitle mb-12" style="max-width: 600px; margin-left: auto; margin-right: auto;">
          Choose the plan that fits your space portfolio. No hidden setup fees or surprise charges.
        </p>

        <!-- Toggle -->
        <div class="mb-12" style="display: flex; justify-content: center; align-items: center; gap: 1rem;">
          <span :class="{'font-bold': billingFreq === 'monthly', 'text-muted': billingFreq !== 'monthly'}">Monthly</span>
          <div class="toggle-switch" @click="billingFreq = billingFreq === 'monthly' ? 'yearly' : 'monthly'" style="width: 48px; height: 24px; background: var(--primary); border-radius: 12px; position: relative; cursor: pointer;">
            <div style="width: 20px; height: 20px; background: white; border-radius: 50%; position: absolute; top: 2px; transition: 0.2s;" :style="{ left: billingFreq === 'monthly' ? '2px' : '26px' }"></div>
          </div>
          <span :class="{'font-bold': billingFreq === 'yearly', 'text-muted': billingFreq !== 'yearly'}">Yearly <span class="badge" style="margin-top: 0; margin-bottom: 0; margin-left: 0.5rem; font-size: 0.75rem;">Save 20%</span></span>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem;">
          <!-- Basic -->
          <div class="card" style="display: flex; flex-direction: column; text-align: left;">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <div style="width: 12px; height: 12px; border-radius: 50%; background-color: #22c55e;"></div>
              <h3 style="margin: 0;">Basic</h3>
            </div>
            <p class="text-muted mb-6" style="font-size: 0.9rem;">For landlords, small agents, budget users</p>
            <div class="mb-6">
              <span style="font-size: 2rem; font-weight: 800; font-family: var(--font-display);">KES {{ billingFreq === 'monthly' ? '1,500' : '15,000' }}</span>
              <span class="text-muted text-sm">/{{ billingFreq === 'monthly' ? 'mo' : 'yr' }}</span>
            </div>
            <NuxtLink to="https://app.viewora.software/register" class="btn btn-secondary btn-block mb-6" @click="trackPricingCta('basic')">Get Started</NuxtLink>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem; flex: 1; margin-bottom: 1.5rem; font-size: 0.9rem;">
              <li style="display: flex; gap: 0.5rem; font-weight: bold;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg> 2 Active 360 Tours</li>
              <li style="display: flex; gap: 0.5rem;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg> Standard image quality</li>
              <li style="display: flex; gap: 0.5rem;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg> Shareable tour link & QR code</li>
              <li style="display: flex; gap: 0.5rem;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg> Space info panel & map</li>
              <li style="display: flex; gap: 0.5rem;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg> Basic analytics (views)</li>
              <li style="display: flex; gap: 0.5rem; color: var(--text-muted);"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg> Viewora branding</li>
              <li style="display: flex; gap: 0.5rem; color: var(--text-muted);"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg> 2 GB storage</li>
            </ul>
            <div style="border-top: 1px solid var(--border); padding-top: 1rem; font-size: 0.8rem; color: var(--text-muted);">
              <strong>Add-ons:</strong> Extra tour (200), HD upgrade (300), Photography (4,000)
            </div>
          </div>

          <!-- Plus -->
          <div class="card" style="display: flex; flex-direction: column; text-align: left; border: 2px solid var(--primary); position: relative;">
            <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: var(--primary); color: white; padding: 2px 12px; border-radius: 12px; font-size: 0.75rem; font-weight: bold; white-space: nowrap;">Most Popular</div>
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <div style="width: 12px; height: 12px; border-radius: 50%; background-color: #3b82f6;"></div>
              <h3 style="margin: 0;">Plus</h3>
            </div>
            <p class="text-muted mb-6" style="font-size: 0.9rem;">For active agents</p>
            <div class="mb-6">
              <span style="font-size: 2rem; font-weight: 800; font-family: var(--font-display);">KES {{ billingFreq === 'monthly' ? '4,000' : '40,000' }}</span>
              <span class="text-muted text-sm">/{{ billingFreq === 'monthly' ? 'mo' : 'yr' }}</span>
            </div>
            <NuxtLink to="https://app.viewora.software/register" class="btn btn-primary btn-block mb-6" @click="trackPricingCta('plus')">Get Started</NuxtLink>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem; flex: 1; margin-bottom: 1.5rem; font-size: 0.9rem;">
              <li style="display: flex; gap: 0.5rem; font-weight: bold;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg> 15 Active Tours</li>
              <li style="display: flex; gap: 0.5rem;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg> HD panoramas</li>
              <li style="display: flex; gap: 0.5rem;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg> Website embed & Photo gallery</li>
              <li style="display: flex; gap: 0.5rem;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg> Lead capture button</li>
              <li style="display: flex; gap: 0.5rem;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg> Hotspot navigation</li>
              <li style="display: flex; gap: 0.5rem;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg> Advanced analytics & Branded pages</li>
              <li style="display: flex; gap: 0.5rem; color: var(--text-muted);"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg> 8 GB storage</li>
            </ul>
            <div style="border-top: 1px solid var(--border); padding-top: 1rem; font-size: 0.8rem; color: var(--text-muted);">
              <strong>Add-ons:</strong> Extra tour (150), Photography (3,800)
            </div>
          </div>

          <!-- Pro -->
          <div class="card" style="display: flex; flex-direction: column; text-align: left;">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <div style="width: 12px; height: 12px; border-radius: 50%; background-color: #a855f7;"></div>
              <h3 style="margin: 0;">Pro</h3>
            </div>
            <p class="text-muted mb-6" style="font-size: 0.9rem;">For agencies & serious sellers</p>
            <div class="mb-6">
              <span style="font-size: 2rem; font-weight: 800; font-family: var(--font-display);">KES {{ billingFreq === 'monthly' ? '8,500' : '85,000' }}</span>
              <span class="text-muted text-sm">/{{ billingFreq === 'monthly' ? 'mo' : 'yr' }}</span>
            </div>
            <NuxtLink to="https://app.viewora.software/register" class="btn btn-secondary btn-block mb-6" @click="trackPricingCta('pro')">Start Free Trial</NuxtLink>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem; flex: 1; margin-bottom: 1.5rem; font-size: 0.9rem;">
              <li style="display: flex; gap: 0.5rem; font-weight: bold;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg> 40 Active Tours</li>
              <li style="display: flex; gap: 0.5rem; font-weight: bold; color: var(--primary);"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg> Includes {{ billingFreq === 'monthly' ? '1 photo shoot / mo' : '12 photo shoots / yr' }}</li>
              <li style="display: flex; gap: 0.5rem;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg> Branding control (your logo)</li>
              <li style="display: flex; gap: 0.5rem;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg> Google Street View publishing</li>
              <li style="display: flex; gap: 0.5rem;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg> Multi-space dashboard</li>
              <li style="display: flex; gap: 0.5rem;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg> Project / apartment mode</li>
              <li style="display: flex; gap: 0.5rem; color: var(--text-muted);"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg> Priority hosting & 20 GB storage</li>
            </ul>
            <div style="border-top: 1px solid var(--border); padding-top: 1rem; font-size: 0.8rem; color: var(--text-muted);">
              <strong>Add-ons:</strong> Extra shoots (3,500)
            </div>
          </div>

          <!-- Elite -->
          <div class="card" style="display: flex; flex-direction: column; text-align: left;">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <div style="width: 12px; height: 12px; border-radius: 50%; background-color: #eab308;"></div>
              <h3 style="margin: 0;">Elite</h3>
            </div>
            <p class="text-muted mb-6" style="font-size: 0.9rem;">For developers & large orgs</p>
            <div class="mb-6">
              <span style="font-size: 2rem; font-weight: 800; font-family: var(--font-display);">KES {{ billingFreq === 'monthly' ? '18,000' : '180,000' }}</span>
              <span class="text-muted text-sm">/{{ billingFreq === 'monthly' ? 'mo' : 'yr' }}</span>
            </div>
            <NuxtLink to="/contact" class="btn btn-secondary btn-block mb-6" @click="trackPricingCta('elite')">Contact Sales</NuxtLink>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem; flex: 1; margin-bottom: 1.5rem; font-size: 0.9rem;">
              <li style="display: flex; gap: 0.5rem; font-weight: bold;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg> 120 Active Tours</li>
              <li style="display: flex; gap: 0.5rem; font-weight: bold; color: var(--primary);"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg> Includes {{ billingFreq === 'monthly' ? '3 photo shoots / mo' : '36 photo shoots / yr' }}</li>
              <li style="display: flex; gap: 0.5rem;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg> Custom domain option</li>
              <li style="display: flex; gap: 0.5rem;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg> White-label viewer</li>
              <li style="display: flex; gap: 0.5rem;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg> Team accounts & Analytics suite</li>
              <li style="display: flex; gap: 0.5rem;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg> Nearby amenities map</li>
              <li style="display: flex; gap: 0.5rem;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg> Featured space badges</li>
              <li style="display: flex; gap: 0.5rem; color: var(--text-muted);"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg> Priority support & 50 GB storage</li>
            </ul>
          </div>
        </div>

        <div style="max-width: 600px; margin: 3rem auto 0; padding: 2rem 2.5rem; background: var(--paper); border-radius: 0.75rem; border: 1px dashed var(--border); text-align: center;">
          <p style="font-weight: 700; color: var(--ink); margin-bottom: 0.5rem;">Billing & Cancellation Policy</p>
          <p style="font-size: 0.9rem; color: var(--slate); line-height: 1.7; margin: 0;">Subscriptions are billed {{ billingFreq }}. Users may cancel anytime before the next billing cycle. Payments are securely processed by Paystack.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const billingFreq = ref('monthly');
const { $posthog } = useNuxtApp() as any

function trackPricingCta(plan: string) {
  $posthog?.capture('pricing_cta_clicked', { plan, billing_cycle: billingFreq.value })
}

useSeoMeta({
  title: 'Viewora Pricing — Free & Pro Plans',
  description: 'Start free or upgrade from KES 1,500/month. Transparent pricing for real estate agents, Airbnb hosts, and businesses in Kenya. Cancel anytime.',
  ogTitle: 'Viewora Pricing — From KES 1,500/mo',
  ogDescription: 'Start free, scale as you grow. Viewora plans for solo agents, active sellers, agencies and large developers. Cancel anytime.',
  ogUrl: 'https://viewora.software/pricing',
  ogImage: 'https://viewora.software/og-image.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Viewora Pricing & Plans',
  twitterDescription: 'Plans from KES 1,500/mo. Free trial, no credit card required.',
})

useBreadcrumb('Pricing & Plans', '/pricing')

useHead({
  link: [{ rel: 'canonical', href: 'https://viewora.software/pricing' }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Viewora',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'All',
      url: 'https://viewora.software',
      offers: [
        { '@type': 'Offer', name: 'Basic', price: '1500', priceCurrency: 'KES', description: '2 active tours, 2 GB storage, shareable link and QR code' },
        { '@type': 'Offer', name: 'Plus', price: '4000', priceCurrency: 'KES', description: '15 active tours, HD panoramas, lead capture, hotspot navigation' },
        { '@type': 'Offer', name: 'Pro', price: '8500', priceCurrency: 'KES', description: '40 active tours, white-label branding, Google Street View publishing' },
        { '@type': 'Offer', name: 'Elite', price: '18000', priceCurrency: 'KES', description: '120 active tours, custom domain, team accounts, 50 GB storage' },
      ]
    })
  },
  {
    type: 'application/ld+json',
    innerHTML: JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Viewora Basic Plan',
        description: '2 active virtual tours, 2 GB storage, shareable link and QR code. Ideal for individual agents and small businesses getting started with virtual tours.',
        brand: { '@type': 'Brand', name: 'Viewora' },
        offers: { '@type': 'Offer', price: '1500', priceCurrency: 'KES', priceValidUntil: '2027-12-31', availability: 'https://schema.org/InStock', url: 'https://viewora.software/pricing' }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Viewora Plus Plan',
        description: '15 active virtual tours, HD panoramas, lead capture forms, and hotspot navigation. Perfect for growing real estate agencies and hospitality teams.',
        brand: { '@type': 'Brand', name: 'Viewora' },
        offers: { '@type': 'Offer', price: '4000', priceCurrency: 'KES', priceValidUntil: '2027-12-31', availability: 'https://schema.org/InStock', url: 'https://viewora.software/pricing' }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Viewora Pro Plan',
        description: '40 active virtual tours, white-label branding, and Google Street View publishing. Designed for professional agencies and property developers.',
        brand: { '@type': 'Brand', name: 'Viewora' },
        offers: { '@type': 'Offer', price: '8500', priceCurrency: 'KES', priceValidUntil: '2027-12-31', availability: 'https://schema.org/InStock', url: 'https://viewora.software/pricing' }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Viewora Elite Plan',
        description: '120 active virtual tours, custom domain, team accounts, and 50 GB storage. Built for large enterprises, hotel groups, and multi-location businesses.',
        brand: { '@type': 'Brand', name: 'Viewora' },
        offers: { '@type': 'Offer', price: '18000', priceCurrency: 'KES', priceValidUntil: '2027-12-31', availability: 'https://schema.org/InStock', url: 'https://viewora.software/pricing' }
      }
    ])
  }]
})
</script>