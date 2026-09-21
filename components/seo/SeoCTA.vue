<template>
  <section class="seo-cta">
    <div class="container">
      <div class="cta-inner text-center">
        <span class="badge" style="margin-bottom: 1.5rem;">Built for Africa</span>

        <template v-if="whatsappPrimary && whatsappMessage">
          <h2 class="cta-title">
            Want it <span style="color: var(--primary);">shot for you?</span>
          </h2>
          <p class="cta-subtitle">
            Skip the DIY. Message us on WhatsApp and we'll book a photographer for your property — no account, no login.
          </p>
          <div class="cta-actions">
            <WhatsAppBookButton :message="whatsappMessage" label="Book a Shoot — WhatsApp" />
            <a href="https://app.viewora.software/register" class="btn btn-outline-light btn-lg">Or Create Your Own Tour</a>
          </div>
          <p class="cta-footnote">Reply in minutes • No credit card required</p>
        </template>

        <template v-else>
          <h2 class="cta-title">
            Ready to dominate the <span style="color: var(--primary);">Kenyan</span> market?
          </h2>
          <p class="cta-subtitle">
            Join the elite Airbnb hosts and real estate agencies in Africa using Viewora to close more deals with immersive 360° technology.
          </p>
          <div class="cta-actions">
            <a href="https://app.viewora.software/register" class="btn btn-primary btn-lg">Start Your Free Tour</a>
            <NuxtLink to="/contact" class="btn btn-outline-light btn-lg">Book a Demo</NuxtLink>
          </div>
          <p class="cta-footnote">Instant Results • No credit card required</p>

          <div v-if="whatsappMessage" class="cta-whatsapp">
            <p class="cta-whatsapp__label">Prefer to just book a shoot?</p>
            <WhatsAppBookButton :message="whatsappMessage" variant="outline" />
          </div>
        </template>
      </div>
    </div>
    <div class="glow-sphere"></div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  whatsappMessage?: string
  whatsappPrimary?: boolean
}>()
</script>

<style scoped>
.seo-cta {
  position: relative;
  background: var(--ink);
  padding: 6rem 0;
  overflow: hidden;
}

.cta-inner {
  position: relative;
  z-index: 2;
  max-width: 720px;
  margin: 0 auto;
}

.cta-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.25rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: var(--paper);
  margin-bottom: 1.25rem;
}

.cta-subtitle {
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--slate-light);
  margin-bottom: 2.5rem;
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.btn-outline-light {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.625rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--paper);
  background: transparent;
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}

.btn-outline-light:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.4);
}

.cta-footnote {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--slate);
  margin: 0;
}

.cta-whatsapp {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.cta-whatsapp__label {
  font-size: 0.85rem;
  color: var(--slate-light);
  margin: 0;
}

.glow-sphere {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(0, 220, 130, 0.08) 0%, transparent 70%);
  pointer-events: none;
  z-index: 1;
}
</style>
