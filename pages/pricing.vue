<template>
  <div>
    <section class="section section-bg">
      <div class="container text-center">
        <h1 class="section-title">Simple, Transparent Pricing</h1>
        <p class="section-subtitle mb-12" style="max-width: 600px; margin-left: auto; margin-right: auto;">
          Free to start, with paid plans a fraction of the cost of alternatives like Matterport. No hidden setup fees or surprise charges.
        </p>

        <!-- Toggle -->
        <div class="mb-12" style="display: flex; justify-content: center; align-items: center; gap: 1rem;">
          <span :class="{'font-bold': billingFreq === 'monthly', 'text-muted': billingFreq !== 'monthly'}">Monthly</span>
          <div class="toggle-switch" @click="billingFreq = billingFreq === 'monthly' ? 'yearly' : 'monthly'" style="width: 48px; height: 24px; background: var(--primary); border-radius: 12px; position: relative; cursor: pointer;">
            <div style="width: 20px; height: 20px; background: white; border-radius: 50%; position: absolute; top: 2px; transition: 0.2s;" :style="{ left: billingFreq === 'monthly' ? '2px' : '26px' }"></div>
          </div>
          <span :class="{'font-bold': billingFreq === 'yearly', 'text-muted': billingFreq !== 'yearly'}">Yearly <span class="badge" style="margin-top: 0; margin-bottom: 0; margin-left: 0.5rem; font-size: 0.75rem;">Save ~17%</span></span>
        </div>

        <div class="pricing-grid">
          <PricingCard
            v-for="plan in cardPlans"
            :key="plan.slug"
            :slug="plan.slug"
            :name="plan.name"
            :description="plan.description"
            :price-monthly-kes="plan.price_monthly_kes"
            :price-yearly-kes="plan.price_yearly_kes"
            :billing-freq="billingFreq"
            :features="planFeatures[plan.slug] || []"
            :cta-label="plan.cta_label"
            :cta-href="`https://app.viewora.software/register?plan=${plan.slug}`"
            :is-popular="plan.is_popular"
            @cta-click="trackPricingCta"
          />
        </div>

        <!-- Enterprise -->
        <div v-if="enterprisePlan" class="card enterprise-card">
          <div class="enterprise-card-text">
            <h3 class="mb-2">{{ enterprisePlan.name }}</h3>
            <p class="text-muted" style="margin: 0;">{{ enterprisePlan.description }}</p>
          </div>
          <div class="enterprise-card-cta">
            <span class="enterprise-price">Custom pricing</span>
            <NuxtLink to="/contact" class="btn btn-dark" @click="trackPricingCta('enterprise')">{{ enterprisePlan.cta_label }}</NuxtLink>
          </div>
        </div>

        <div style="max-width: 600px; margin: 3rem auto 0; padding: 2rem 2.5rem; background: var(--paper); border-radius: 0.75rem; border: 1px dashed var(--border); text-align: center;">
          <p style="font-weight: 700; color: var(--ink); margin-bottom: 0.5rem;">Billing & Cancellation Policy</p>
          <p style="font-size: 0.9rem; color: var(--slate); line-height: 1.7; margin: 0;">Subscriptions are billed {{ billingFreq }}. Users may cancel anytime before the next billing cycle. Payments are securely processed by Paystack (cards & M-Pesa).</p>
        </div>

        <p style="text-align: center; margin-top: 1.5rem; color: var(--slate); font-size: 0.9rem;">
          Comparing options? See how Viewora stacks up against
          <NuxtLink to="/matterport-alternative" style="color: var(--accent);">Matterport</NuxtLink>.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { FALLBACK_PLANS, PLAN_FEATURES, getCardPlans, getEnterprisePlan, buildPricingOffers, type PricingPlan } from '~/utils/pricingPlans'

const billingFreq = ref<'monthly' | 'yearly'>('monthly')
const { $posthog } = useNuxtApp() as any

const config = useRuntimeConfig()
const apiBaseUrl = (config.public.apiBaseUrl as string) || ''

// SSR-friendly fetch of the live plan list. Falls back to the static
// FALLBACK_PLANS array below if the backend is unreachable or returns
// nothing — the pricing page must never render broken/empty.
const { data: plansResponse } = await useFetch(() => `${apiBaseUrl}/billing/plans`, {
  key: 'billing-plans',
  immediate: !!apiBaseUrl,
  server: true,
})

function normalizePlans(raw: unknown): PricingPlan[] {
  if (!raw) return []
  if (Array.isArray(raw)) return raw as PricingPlan[]
  const obj = raw as Record<string, unknown>
  if (Array.isArray(obj.plans)) return obj.plans as PricingPlan[]
  if (Array.isArray(obj.data)) return obj.data as PricingPlan[]
  return []
}

const plans = computed<PricingPlan[]>(() => {
  const fetched = normalizePlans(plansResponse.value)
  return fetched.length > 0 ? fetched : FALLBACK_PLANS
})

const cardPlans = computed(() => getCardPlans(plans.value))
const enterprisePlan = computed(() => getEnterprisePlan(plans.value) ?? getEnterprisePlan(FALLBACK_PLANS))
const planFeatures = PLAN_FEATURES

function trackPricingCta(plan: string) {
  $posthog?.capture('pricing_cta_clicked', { plan, billing_cycle: billingFreq.value })
}

useSeoMeta({
  title: 'Pricing — Plans from KES 0/month',
  description: 'Plans from KES 0/month, scaling to KES 4,999/month, plus custom Enterprise pricing. Transparent pricing for agents, hosts, and businesses. Cancel anytime.',
  ogTitle: 'Viewora Pricing — Plans from KES 0/mo',
  ogDescription: 'Start free, scale as you grow. Free, Creator, Professional and Business plans for solo agents, active sellers and agencies, plus custom Enterprise pricing.',
  ogUrl: 'https://viewora.software/pricing',
  ogImage: 'https://viewora.software/og-image.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Viewora Pricing & Plans',
  twitterDescription: 'Plans from KES 0/mo. Free tier, no credit card required.',
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
      offers: buildPricingOffers(),
    })
  }]
})
</script>

<style scoped>
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.enterprise-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
  text-align: left;
  margin-top: 1.5rem;
}

.enterprise-card-text {
  flex: 1;
  min-width: 240px;
}

.enterprise-card-cta {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex-wrap: wrap;
}

.enterprise-price {
  font-weight: 700;
  color: var(--ink);
  white-space: nowrap;
}

@media (max-width: 640px) {
  .enterprise-card {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }
}
</style>
