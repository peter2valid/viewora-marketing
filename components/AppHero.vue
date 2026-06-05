<template>
  <section class="app-hero" :class="{ 'hero-dark': dark }">
    <div class="container">
      <div class="hero-content">
        <div v-if="badge" class="badge">↗ {{ badge }}</div>
        <h1 class="hero-title">
          <slot name="title">{{ title }}</slot>
        </h1>
        <p class="hero-subtitle">
          <slot name="subtitle">{{ subtitle }}</slot>
        </p>
        <div class="hero-actions">
          <slot name="actions">
            <NuxtLink to="https://app.viewora.software/register" class="btn btn-primary btn-lg btn-float">Start Free — No Card Needed</NuxtLink>
            <NuxtLink to="/product" class="btn btn-outline btn-lg">See How It Works →</NuxtLink>
          </slot>
        </div>
        <div class="hero-capture-pill">
          <span class="hero-capture-pill__dot" />
          🎁 <strong>Claim your free demo shoot</strong> — we come to your property, no camera needed
          <NuxtLink to="https://app.viewora.software/app/capture" class="hero-capture-pill__link">Claim Free →</NuxtLink>
        </div>
      </div>
    </div>
    <!-- Grid Overlay to match index.vue -->
    <div class="hero-grid-overlay"></div>
    <div class="hero-glow"></div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  subtitle?: string
  badge?: string
  dark?: boolean
}>()
</script>

<style scoped>
.app-hero {
  position: relative;
  padding: 8rem 0 6rem;
  overflow: hidden;
  background-color: var(--paper);
  border-bottom: 1px solid var(--border);
}

.hero-content {
  position: relative;
  z-index: 10;
  max-width: 800px;
}

.hero-title {
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 900;
  line-height: 1.05;
  margin-bottom: 1.5rem;
  letter-spacing: -0.04em;
  color: var(--ink);
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--slate);
  margin-bottom: 3rem;
  max-width: 600px;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-grid-overlay {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(var(--border) 1px, transparent 1px),
    linear-gradient(90deg, var(--border) 1px, transparent 1px);
  background-size: 40px 40px;
  mask-image: radial-gradient(ellipse 80% 50% at 50% -20%, #000 70%, transparent 100%);
  opacity: 0.4;
  pointer-events: none;
}

.hero-glow {
  position: absolute;
  top: -10%;
  left: 20%;
  width: 40%;
  height: 60%;
  background: radial-gradient(circle, var(--accent-dim) 0%, transparent 70%);
  filter: blur(60px);
  opacity: 0.5;
  z-index: 0;
  pointer-events: none;
}

/* Capture pill */
.hero-capture-pill {
  display: inline-flex; align-items: center; gap: 8px; flex-wrap: wrap;
  margin-top: 1.5rem; padding: 8px 14px; border-radius: 999px;
  background: rgba(37,211,102,0.08); border: 1px solid rgba(37,211,102,0.22);
  font-size: 13px; color: var(--slate);
}
.hero-capture-pill strong { color: var(--ink); font-weight: 800; }
.hero-capture-pill__dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: #25d366; box-shadow: 0 0 8px rgba(37,211,102,0.8);
  flex-shrink: 0; animation: dot-pulse 2s ease-in-out infinite;
}
@keyframes dot-pulse { 0%,100% { opacity:1; } 50% { opacity:0.4; } }
.hero-capture-pill__link {
  color: #25d366; font-weight: 800; font-size: 12px; text-decoration: none;
  border: 1px solid rgba(37,211,102,0.35); padding: 3px 10px; border-radius: 999px;
  transition: background 140ms ease;
}
.hero-capture-pill__link:hover { background: rgba(37,211,102,0.15); }

/* For pages that still want a bit of darkness */
.hero-dark {
  background-color: var(--ink);
  color: var(--paper);
  border-bottom-color: var(--border-dark);
}

.hero-dark .hero-title {
  color: var(--paper);
}

.hero-dark .hero-subtitle {
  color: #9ca3af;
}

.hero-dark .hero-grid-overlay {
  background-image: 
    linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
}

@media (max-width: 768px) {
  .app-hero {
    padding: 6rem 0 4rem;
  }
  .hero-actions {
    flex-direction: column;
  }
}
</style>
