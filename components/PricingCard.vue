<template>
  <div class="pricing-card" :class="{ 'pricing-card--popular': isPopular }">
    <div v-if="isPopular" class="pricing-card-badge">Most Popular</div>

    <div class="pricing-card-header">
      <span class="pricing-card-dot" :class="`pricing-card-dot--${slug}`"></span>
      <h3 class="pricing-card-name">{{ name }}</h3>
    </div>

    <p class="text-muted mb-6 pricing-card-desc">{{ description }}</p>

    <div class="mb-6 pricing-card-price">
      <template v-if="isFree">
        <span class="pricing-price-amount">Free</span>
      </template>
      <template v-else>
        <span class="pricing-price-amount">KES {{ formattedKes }}</span>
        <span class="text-muted text-sm">/{{ billingFreq === 'monthly' ? 'mo' : 'yr' }}</span>
        <div v-if="convertedPrice" class="pricing-price-fx">≈ {{ convertedPrice }}/{{ billingFreq === 'monthly' ? 'month' : 'year' }}</div>
      </template>
    </div>

    <NuxtLink
      :to="ctaHref"
      :class="['btn', 'btn-block', 'mb-6', isPopular ? 'btn-primary' : 'btn-secondary']"
      @click="$emit('cta-click', slug)"
    >
      {{ ctaLabel }}
    </NuxtLink>

    <ul class="pricing-feature-list">
      <li v-for="feature in features" :key="feature" class="pricing-feature-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="pricing-check-icon">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        {{ feature }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'

const props = defineProps<{
  slug: string
  name: string
  description: string
  priceMonthlyKes: number | null
  priceYearlyKes: number | null
  billingFreq: 'monthly' | 'yearly'
  features: string[]
  ctaLabel: string
  ctaHref: string
  isPopular?: boolean
}>()

defineEmits<{ 'cta-click': [slug: string] }>()

const { formatPrice } = useCurrencyDisplay()

const activeKesAmount = computed(() =>
  props.billingFreq === 'monthly' ? props.priceMonthlyKes : props.priceYearlyKes
)

const isFree = computed(() => !activeKesAmount.value || activeKesAmount.value <= 0)

const formattedKes = computed(() => (activeKesAmount.value ?? 0).toLocaleString('en-US'))

const convertedPrice = ref<string | null>(null)

async function refreshConvertedPrice() {
  const amount = activeKesAmount.value
  if (!amount) {
    convertedPrice.value = null
    return
  }
  convertedPrice.value = await formatPrice(amount)
}

onMounted(refreshConvertedPrice)
watch(() => [props.billingFreq, props.priceMonthlyKes, props.priceYearlyKes], refreshConvertedPrice)
</script>

<style scoped>
.pricing-card {
  background: var(--paper);
  border-radius: 0.75rem;
  border: 1px solid var(--border);
  padding: 1.75rem;
  box-shadow: var(--shadow-float);
  display: flex;
  flex-direction: column;
  text-align: left;
  position: relative;
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}

.pricing-card:hover {
  box-shadow: var(--shadow-lift);
  transform: translateY(-6px);
  border-color: var(--border-sharp);
}

.pricing-card--popular {
  border: 2px solid var(--primary);
}

.pricing-card-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--primary);
  color: var(--ink);
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;
  font-family: var(--font-mono);
  letter-spacing: 0.03em;
  text-transform: uppercase;
  white-space: nowrap;
}

.pricing-card-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.pricing-card-name {
  margin: 0;
}

.pricing-card-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
  background-color: var(--slate-light);
}

.pricing-card-dot--free { background-color: var(--slate-light); }
.pricing-card-dot--creator { background-color: var(--slate); }
.pricing-card-dot--professional { background-color: var(--accent); }
.pricing-card-dot--business { background-color: var(--ink); }

.pricing-card-desc {
  font-size: 0.9rem;
  min-height: 2.7rem;
}

.pricing-card-price {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.pricing-price-amount {
  font-size: 2rem;
  font-weight: 800;
  font-family: var(--font-display);
}

.pricing-price-fx {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-top: 0.25rem;
}

.pricing-feature-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
  margin: 0;
  font-size: 0.9rem;
}

.pricing-feature-item {
  display: flex;
  gap: 0.5rem;
}

.pricing-check-icon {
  margin-top: 2px;
  flex-shrink: 0;
}
</style>
