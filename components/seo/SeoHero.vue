<template>
  <section class="seo-hero">
    <div class="container">
      <div class="hero-inner">
        <div class="badge" v-if="badge">{{ badge }}</div>
        <h1 class="hero-title">
          <slot name="title">{{ title }}</slot>
        </h1>
        <p class="hero-subtitle">
          <slot name="subtitle">{{ subtitle }}</slot>
        </p>
        <div class="hero-actions">
          <a href="https://app.viewora.software/register" class="btn btn-primary btn-lg">Get Started Free</a>
          <NuxtLink to="/product" class="btn btn-outline btn-lg">View Features</NuxtLink>
        </div>
      </div>
    </div>
    <div class="hero-grid-overlay"></div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  subtitle?: string
  badge?: string
}>()
</script>

<style scoped>
.seo-hero {
  position: relative;
  padding: 8rem 0 6rem;
  overflow: hidden;
}

.hero-inner {
  position: relative;
  z-index: 10;
  max-width: 840px;
}

.hero-title {
  font-family: var(--font-display, 'Outfit', sans-serif);
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.04em;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  animation: fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 3rem;
  max-width: 600px;
  animation: fade-up 0.8s 0.1s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  animation: fade-up 0.8s 0.2s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@media (max-width: 768px) {
  .hero-actions {
    flex-direction: column;
  }
}

.badge {
  display: inline-flex;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  background: rgba(0, 220, 130, 0.18);
  border: 1px solid rgba(0, 220, 130, 0.4);
  color: var(--accent);
  font-size: 0.75rem;
  font-weight: 600;
  font-family: var(--font-mono, monospace);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  animation: fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 100%);
  pointer-events: none;
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
