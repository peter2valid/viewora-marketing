import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2026-04-13',
  css: ['@/assets/css/main.css'],
  
  runtimeConfig: {
    smtpHost: process.env.SMTP_HOST || 'smtp.gmail.com',
    smtpPort: process.env.SMTP_PORT || '587',
    smtpUser: process.env.SMTP_USER,
    smtpPass: process.env.SMTP_PASS,
    public: {
      posthogKey: process.env.NUXT_PUBLIC_POSTHOG_KEY || '',
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || '',
    },
  },

  modules: [
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/seo',
    '@nuxt/content',
    '@nuxtjs/sitemap',
  ],

  sitemap: {
    trailingSlash: false,
    exclude: ['/login', '/register', '/reset-password', '/viewer/gallery'],
    discoverImages: true,
    urls: [
      {
        loc: '/',
        images: [{ loc: 'https://viewora.software/images/home/cross-platform-hero.png', title: 'Viewora — 360° Virtual Tour Software for Real Estate and Hospitality' }],
      },
      {
        loc: '/product',
        images: [{ loc: 'https://viewora.software/images/home/white-label-editor.png', title: 'How to Create a 360° Virtual Tour with Viewora' }],
      },
      {
        loc: '/pricing',
        images: [{ loc: 'https://viewora.software/images/home/tiny-planet-vr.png', title: 'Viewora Pricing Plans — Free, Creator, Professional, Business' }],
      },
      {
        loc: '/photo-gallery-software',
        images: [{ loc: 'https://viewora.software/images/gallery/luxury-living-room.png', title: 'Photo Gallery Hosting for Property and Business Listings' }],
      },
      {
        loc: '/demo',
        priority: 0.9,
        images: [{ loc: 'https://viewora.software/images/home/cross-platform-hero.png', title: 'Live Demo — Real Viewora Tours' }],
      },
      {
        loc: '/virtual-tours-kenya',
        images: [{ loc: 'https://viewora.software/images/home/dollhouse-commercial.png', title: 'Virtual Tours Kenya — 360° Property and Business Marketing' }],
      },
      {
        loc: '/real-estate-virtual-tours-kenya',
        images: [{ loc: 'https://viewora.software/images/home/plain%20land.png', title: 'Real Estate Virtual Tours Kenya — Property Marketing' }],
      },
      {
        loc: '/hotel-virtual-tours-kenya',
        images: [{ loc: 'https://viewora.software/images/home/cross-platform-hero2.png', title: 'Hotel Virtual Tours Kenya — Hospitality Marketing' }],
      },
      {
        loc: '/airbnb-virtual-tours-kenya',
        images: [{ loc: 'https://viewora.software/images/home/white-label-editor.png', title: 'Airbnb Virtual Tours Kenya — Short-Term Rental Marketing' }],
      },
      {
        loc: '/car-dealership-virtual-tours-kenya',
        images: [{ loc: 'https://viewora.software/images/home/car%20dealership.png', title: 'Car Dealership Virtual Tours Kenya — Automotive Marketing' }],
      },
      {
        loc: '/school-virtual-tours-kenya',
        images: [{ loc: 'https://viewora.software/images/home/floorplan-hotspots.png', title: 'School Virtual Tours Kenya — Education Institution Marketing' }],
      },
      {
        loc: '/gym-virtual-tours-kenya',
        images: [{ loc: 'https://viewora.software/images/home/dollhouse-commercial.png', title: 'Gym Virtual Tours Kenya — Fitness Centre Marketing' }],
      },
      {
        loc: '/hospital-virtual-tours-kenya',
        images: [{ loc: 'https://viewora.software/images/home/floorplan-hotspots.png', title: 'Hospital Virtual Tours Kenya — Healthcare Facility Marketing' }],
      },
      {
        loc: '/tourism-virtual-tours-kenya',
        images: [{ loc: 'https://viewora.software/images/home/tiny-planet-vr.png', title: 'Tourism Virtual Tours Kenya — Travel and Safari Marketing' }],
      },
      {
        loc: '/virtual-tours-nairobi',
        images: [{ loc: 'https://viewora.software/images/home/plain%20land.png', title: 'Virtual Tours Nairobi — 360° Property Marketing in Nairobi' }],
      },
      {
        loc: '/virtual-tours-mombasa',
        images: [{ loc: 'https://viewora.software/images/home/cross-platform-hero2.png', title: 'Virtual Tours Mombasa — 360° Property and Hospitality Marketing' }],
      },
      {
        loc: '/virtual-tours-kisumu',
        images: [{ loc: 'https://viewora.software/images/home/dollhouse-commercial.png', title: 'Virtual Tours Kisumu — 360° Property Marketing in Western Kenya' }],
      },
      {
        loc: '/virtual-tours-nakuru',
        images: [{ loc: 'https://viewora.software/images/home/plain%20land.png', title: 'Virtual Tours Nakuru — 360° Property and Tourism Marketing' }],
      },
      {
        loc: '/virtual-tours-eldoret',
        images: [{ loc: 'https://viewora.software/images/home/cross-platform-hero.png', title: 'Virtual Tours Eldoret — 360° Property Marketing in North Rift' }],
      },
      {
        loc: '/virtual-tours-africa',
        images: [{ loc: 'https://viewora.software/images/home/cross-platform-hero.png', title: 'Virtual Tours Africa — 360° Property Marketing Across Africa' }],
      },
      {
        loc: '/virtual-tours-east-africa',
        images: [{ loc: 'https://viewora.software/images/home/dollhouse-commercial.png', title: 'Virtual Tours East Africa — 360° Property Marketing' }],
      },
      {
        loc: '/360-virtual-tour-software',
        images: [{ loc: 'https://viewora.software/images/home/white-label-editor.png', title: '360° Virtual Tour Software — Create and Share Immersive Tours' }],
      },
      {
        loc: '/360-virtual-tour-africa',
        images: [{ loc: 'https://viewora.software/images/home/tiny-planet-vr.png', title: '360° Virtual Tours Africa — Immersive Marketing Platform' }],
      },
      {
        loc: '/about',
        images: [{ loc: 'https://viewora.software/images/home/cross-platform-hero.png', title: 'About Viewora — Virtual Tour Platform Built in Kenya, Used Worldwide' }],
      },
      {
        loc: '/blog',
        images: [{ loc: 'https://viewora.software/images/home/white-label-editor.png', title: 'Viewora Blog — Virtual Tour Tips and Guides' }],
      },
      {
        loc: '/faq',
        images: [{ loc: 'https://viewora.software/images/home/cross-platform-hero.png', title: 'Virtual Tour FAQ — Everything You Need to Know' }],
      },
      {
        loc: '/what-is-a-virtual-tour',
        images: [{ loc: 'https://viewora.software/images/home/tiny-planet-vr.png', title: 'What Is a Virtual Tour? Complete Guide' }],
      },
      {
        loc: '/benefits-of-virtual-tours',
        images: [{ loc: 'https://viewora.software/images/home/dollhouse-commercial.png', title: 'Benefits of Virtual Tours for Your Business' }],
      },
      {
        loc: '/virtual-tours-vs-photos',
        images: [{ loc: 'https://viewora.software/images/home/plain%20land.png', title: 'Virtual Tours vs Photos — Which Sells Faster?' }],
      },
      // ── Capture Service pages ──────────────────────────────────────────────
      {
        loc: '/360-photography-service-kenya',
        priority: 0.9,
        images: [{ loc: 'https://viewora.software/images/home/hardware-setup.png', title: '360° Photography Service Kenya — Professional Virtual Tour Capture' }],
      },
      {
        loc: '/virtual-tour-photographer-kenya',
        priority: 0.9,
        images: [{ loc: 'https://viewora.software/images/home/hardware-setup.png', title: 'Virtual Tour Photographer Kenya — Hire a 360° Pro Near You' }],
      },
      {
        loc: '/360-photography-nairobi',
        priority: 0.85,
        images: [{ loc: 'https://viewora.software/images/home/hardware-setup.png', title: '360° Photography Nairobi — Virtual Tour Photographer' }],
      },
      {
        loc: '/360-photography-mombasa',
        priority: 0.85,
        images: [{ loc: 'https://viewora.software/images/home/hardware-setup.png', title: '360° Photography Mombasa & Diani — Virtual Tour Photographer' }],
      },
      {
        loc: '/real-estate-photography-kenya',
        priority: 0.85,
        images: [{ loc: 'https://viewora.software/images/home/plain%20land.png', title: 'Real Estate Photography Kenya — 360° Property Photographer' }],
      },
      {
        loc: '/airbnb-photography-kenya',
        priority: 0.85,
        images: [{ loc: 'https://viewora.software/images/home/cross-platform-hero2.png', title: 'Airbnb Photography Kenya — 360° Virtual Tour for Short-Let' }],
      },
    ],
  },

  site: {
    url: 'https://viewora.software',
    name: 'Viewora',
    description: 'Create interactive 360° virtual tours and photo galleries for any space. The platform for real estate agents, Airbnb hosts, car dealerships, hotels, and businesses worldwide.',
    defaultLocale: 'en',
  },

  ogImage: {
    enabled: true,
  },

  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
      Outfit: [600, 700],
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
    download: true,
  },

  routeRules: {
    '/**': { prerender: true },
    '/ingest/**': { cache: false },
    '/features': { redirect: { to: '/product', statusCode: 301 } },
    '/real-estate-virtual-tours': { redirect: { to: '/real-estate-virtual-tours-kenya', statusCode: 301 } },
    '/hotel-virtual-tours': { redirect: { to: '/hotel-virtual-tours-kenya', statusCode: 301 } },
    '/airbnb-virtual-tours': { redirect: { to: '/airbnb-virtual-tours-kenya', statusCode: 301 } },
    '/company': { redirect: { to: '/about', statusCode: 301 } },
    '/360-virtual-tour-africa': { redirect: { to: '/virtual-tours-africa', statusCode: 301 } },
  },

  nitro: {
    prerender: {
      failOnError: false,
    },
    routeRules: {
      '/**': { 
        headers: { 
          'X-Robots-Tag': 'index, follow',
          'X-Frame-Options': 'DENY',
          'X-Content-Type-Options': 'nosniff',
          'Referrer-Policy': 'strict-origin-when-cross-origin'
        } 
      },
    },
  },

  experimental: {
    payloadExtraction: false,
  },

  app: {
    head: {
      title: 'Viewora | Immersive 360° Virtual Tour Platform',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'facebook-domain-verification', content: 'pr6h49xvj98hgvtbuaid982l6uvku3' },
        {
          name: 'description',
          content: 'Create, host, and share interactive 360° virtual tours in minutes. The professional platform for real estate, hospitality, automotive, and retail spaces.',
        },
        // Default Open Graph — individual pages override with useSeoMeta
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Viewora' },
        { property: 'og:image', content: 'https://viewora.software/og-image.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:locale', content: 'en_US' },
        // Default Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@viewora' },
        { name: 'twitter:image', content: 'https://viewora.software/og-image.jpg' },
      ],
      link: [
        // Light mode: black 360° icon on transparent background
        { rel: 'icon', type: 'image/x-icon', href: '/favicon-light.ico', media: '(prefers-color-scheme: light)' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-light-32.png', media: '(prefers-color-scheme: light)' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/favicon-light-512.png', media: '(prefers-color-scheme: light)' },
        // Dark mode: white globe icon on transparent background
        { rel: 'icon', type: 'image/x-icon', href: '/favicon-dark.ico', media: '(prefers-color-scheme: dark)' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-dark-32.png', media: '(prefers-color-scheme: dark)' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/favicon-dark-512.png', media: '(prefers-color-scheme: dark)' },
        // Fallback (no preference)
        { rel: 'icon', type: 'image/x-icon', href: '/favicon-light.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon-light-180.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      ],
    },
  },
})
