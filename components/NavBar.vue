<template>
  <header class="nav">
    <div class="container">
      <NuxtLink to="/" class="logo" aria-label="Viewora home">
        <span v-if="!logoLoaded" class="logo-skeleton" aria-hidden="true"></span>
        <NuxtImg
          ref="logoRef"
          src="/globe-icon.png"
          width="48"
          height="48"
          format="webp"
          alt=""
          class="logo-icon"
          fetchpriority="high"
          :style="{ opacity: logoLoaded ? 1 : 0, position: logoLoaded ? 'static' : 'absolute' }"
          @load="logoLoaded = true"
        />
        <span style="line-height: 1; align-self: center;">Viewora</span>
      </NuxtLink>
      
      <!-- Desktop Navigation -->
      <nav class="nav-links">
        <NuxtLink to="/product" class="nav-link">Product</NuxtLink>
        <NuxtLink to="/blog" class="nav-link">Blog</NuxtLink>
        <NuxtLink to="/pricing" class="nav-link">Pricing</NuxtLink>
        <NuxtLink to="/about" class="nav-link">About</NuxtLink>
        <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
      </nav>

        <div class="nav-actions">
          <NuxtLink to="https://app.viewora.software/login" class="nav-link">Log in</NuxtLink>
          <NuxtLink to="https://app.viewora.software/register" class="btn btn-dark" style="padding: 0.5rem 1rem; font-size: 0.875rem;" @click="trackCta('nav_start_free')">Start Free</NuxtLink>
        </div>

      <!-- Mobile Menu Button -->
      <button class="mobile-menu-btn" aria-label="Toggle menu" @click="isMobileMenuOpen = !isMobileMenuOpen">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>
    </div>
    
    <!-- Mobile Navigation Overlay -->
    <Transition name="mobile-menu">
      <div v-show="isMobileMenuOpen" class="mobile-menu-overlay" style="position: absolute; top: 100%; left: 0; right: 0; background: var(--paper); padding: 1.25rem; border-bottom: 1px solid var(--border); box-shadow: var(--shadow-float); z-index: 99; transform-origin: top;">
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <NuxtLink to="/product" class="nav-link" @click="isMobileMenuOpen = false">Product</NuxtLink>
          <NuxtLink to="/pricing" class="nav-link" @click="isMobileMenuOpen = false">Pricing</NuxtLink>
          <NuxtLink to="/about" class="nav-link" @click="isMobileMenuOpen = false">About</NuxtLink>
          <NuxtLink to="/contact" class="nav-link" @click="isMobileMenuOpen = false">Contact</NuxtLink>
          <hr style="border: 0; border-top: 1px solid var(--border-color); margin: 0.5rem 0;" />
          
          <NuxtLink to="https://app.viewora.software/login" class="nav-link" @click="isMobileMenuOpen = false">Log in</NuxtLink>
          <NuxtLink to="https://app.viewora.software/register" class="btn btn-dark btn-block" @click="isMobileMenuOpen = false; trackCta('nav_start_free_mobile')">Start Free</NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>
<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { useRoute, useNuxtApp } from '#imports';

const isMobileMenuOpen = ref(false);
const { $posthog } = useNuxtApp() as any

function trackCta(button: string) {
  $posthog?.capture('nav_cta_clicked', { button })
}
const logoLoaded = ref(false);
const logoRef = ref<HTMLImageElement | null>(null);

onMounted(() => {
  if (logoRef.value?.complete) logoLoaded.value = true;
});

// Body scroll lock — keep reactive for direct toggle
if (process.client) {
  watch(isMobileMenuOpen, (val) => {
    document.body.style.overflow = val ? 'hidden' : '';
  });
}

// Reset scroll directly on navigation — don't rely on the watcher chain
// (Nuxt's page transition can interrupt Vue's watcher queue before overflow is cleared)
const route = useRoute();
watch(() => route.path, () => {
  isMobileMenuOpen.value = false;
  if (process.client) document.body.style.overflow = '';
});

// Safety net: ensure scroll is always restored if component is destroyed
onBeforeUnmount(() => {
  if (process.client) document.body.style.overflow = '';
});
</script>

<style scoped>
.logo-skeleton {
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
  margin-bottom: 0.2rem;
  margin-left:0.2rem;
  border-radius: 50%;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.2s infinite;
  flex-shrink: 0;
}
@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px) scaleY(0.95);
}
</style>