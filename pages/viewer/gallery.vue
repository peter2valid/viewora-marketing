<template>
  <div class="viewer-container">
    <!-- Minimalist Header -->
    <header class="viewer-header">
      <div class="viewer-logo">
        <NuxtLink to="/" class="logo-link">
          <span class="logo-text">Viewora</span>
          <span class="logo-badge">Gallery</span>
        </NuxtLink>
      </div>
      <div class="viewer-actions">
        <button class="btn-share" @click="shareGallery">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
          Share
        </button>
      </div>
    </header>

    <!-- Main WebGL Display -->
    <main class="viewer-main">
      <CircularGallery 
        :items="galleryItems"
        :bend="3" 
        text-color="#ffffff" 
        :border-radius="0.08" 
        :scroll-ease="0.04"
        :scroll-speed="2.5"
      />
    </main>

    <!-- Visual Polish: Vignette Overlay -->
    <div class="vignette-overlay"></div>

    <!-- Interaction Instructions -->
    <footer class="viewer-footer">
      <div class="controls-hint">
        <span class="hint-desktop">Scroll or Drag to Explore</span>
        <span class="hint-mobile">Swipe to Explore</span>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Define layout to none to have a clean slate (no marketing header/footer)
definePageMeta({
  layout: false
})

const galleryItems = [
  { image: '/images/gallery/luxury-living-room.png', text: 'Stunning Penthouse View' },
  { image: '/images/gallery/modern-kitchen.png', text: 'Chef\'s Dream Kitchen' },
  { image: '/images/gallery/resort-pool.png', text: 'Infinity Pool Relax' },
  { image: '/images/gallery/coastal-bedroom.png', text: 'Ocean Breeze Suite' },
  { image: '/images/gallery/office-showroom.png', text: 'Modern Tech Hub' }
];

const shareGallery = () => {
  if (navigator.share) {
    navigator.share({
      title: 'Viewora | 2D Photo Gallery',
      text: 'Check out this stunning property gallery on Viewora!',
      url: window.location.href,
    });
  }
}

useSeoMeta({
  title: 'Gallery Viewer | Immersive 2D Showcase',
  description: 'Experience property photography in a stunning, interactive 3D circular gallery.',
  ogTitle: 'Viewora Gallery — Immersive 2D Experience',
  ogImage: '/images/gallery/luxury-living-room.png',
  twitterCard: 'summary_large_image',
})
</script>

<style scoped>
.viewer-container {
  height: 100vh;
  width: 100vw;
  background-color: #050505;
  color: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
}

.viewer-header {
  height: 70px;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to bottom, rgba(0,0,0,0.8), transparent);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  backdrop-filter: blur(4px);
}

.logo-link {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-text {
  font-weight: 900;
  font-size: 1.5rem;
  letter-spacing: -0.05em;
  color: #fff;
}

.logo-badge {
  background: var(--primary, #00dc82);
  color: #000;
  font-size: 0.65rem;
  font-weight: 800;
  text-transform: uppercase;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  letter-spacing: 0.05em;
}

.btn-share {
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.1);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-share:hover {
  background: rgba(255,255,255,0.2);
  border-color: rgba(255,255,255,0.3);
}

.viewer-main {
  flex: 1;
  width: 100%;
  position: relative;
}

.vignette-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  background: radial-gradient(circle, transparent 20%, rgba(0,0,0,0.4) 100%);
  z-index: 5;
}

.viewer-footer {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to top, rgba(0,0,0,0.5), transparent);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  pointer-events: none;
}

.controls-hint {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.5);
  font-family: var(--font-mono);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  animation: fadeInOut 3s infinite ease-in-out;
}

.hint-mobile { display: none; }

@keyframes fadeInOut {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.8; }
}

@media (max-width: 768px) {
  .viewer-header { padding: 0 1rem; }
  .hint-desktop { display: none; }
  .hint-mobile { display: block; }
}
</style>
