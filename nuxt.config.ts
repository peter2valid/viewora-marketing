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
        images: [{ loc: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&q=80', title: 'Viewora — 360° Virtual Tour Software for Real Estate and Hospitality' }],
      },
      {
        loc: '/product',
        images: [{ loc: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80', title: 'How to Create a 360° Virtual Tour with Viewora' }],
      },
      {
        loc: '/pricing',
        images: [{ loc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80', title: 'Viewora Pricing Plans — Free, Basic, Plus, Pro, Elite' }],
      },
      {
        loc: '/virtual-tours-kenya',
        images: [{ loc: 'https://images.unsplash.com/photo-1582408921715-18e7806365c1?w=1200&q=80', title: 'Virtual Tours Kenya — 360° Property and Business Marketing' }],
      },
      {
        loc: '/real-estate-virtual-tours-kenya',
        images: [{ loc: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80', title: 'Real Estate Virtual Tours Kenya — Property Marketing' }],
      },
      {
        loc: '/hotel-virtual-tours-kenya',
        images: [{ loc: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80', title: 'Hotel Virtual Tours Kenya — Hospitality Marketing' }],
      },
      {
        loc: '/airbnb-virtual-tours-kenya',
        images: [{ loc: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80', title: 'Airbnb Virtual Tours Kenya — Short-Term Rental Marketing' }],
      },
      {
        loc: '/car-dealership-virtual-tours-kenya',
        images: [{ loc: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80', title: 'Car Dealership Virtual Tours Kenya — Automotive Marketing' }],
      },
      {
        loc: '/school-virtual-tours-kenya',
        images: [{ loc: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80', title: 'School Virtual Tours Kenya — Education Institution Marketing' }],
      },
      {
        loc: '/gym-virtual-tours-kenya',
        images: [{ loc: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80', title: 'Gym Virtual Tours Kenya — Fitness Centre Marketing' }],
      },
      {
        loc: '/hospital-virtual-tours-kenya',
        images: [{ loc: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80', title: 'Hospital Virtual Tours Kenya — Healthcare Facility Marketing' }],
      },
      {
        loc: '/tourism-virtual-tours-kenya',
        images: [{ loc: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80', title: 'Tourism Virtual Tours Kenya — Travel and Safari Marketing' }],
      },
      {
        loc: '/virtual-tours-nairobi',
        images: [{ loc: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80', title: 'Virtual Tours Nairobi — 360° Property Marketing in Nairobi' }],
      },
      {
        loc: '/virtual-tours-mombasa',
        images: [{ loc: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80', title: 'Virtual Tours Mombasa — 360° Property and Hospitality Marketing' }],
      },
      {
        loc: '/virtual-tours-kisumu',
        images: [{ loc: 'https://images.unsplash.com/photo-1582408921715-18e7806365c1?w=1200&q=80', title: 'Virtual Tours Kisumu — 360° Property Marketing in Western Kenya' }],
      },
      {
        loc: '/virtual-tours-nakuru',
        images: [{ loc: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80', title: 'Virtual Tours Nakuru — 360° Property and Tourism Marketing' }],
      },
      {
        loc: '/virtual-tours-eldoret',
        images: [{ loc: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&q=80', title: 'Virtual Tours Eldoret — 360° Property Marketing in North Rift' }],
      },
      {
        loc: '/virtual-tours-africa',
        images: [{ loc: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&q=80', title: 'Virtual Tours Africa — 360° Property Marketing Across Africa' }],
      },
      {
        loc: '/virtual-tours-east-africa',
        images: [{ loc: 'https://images.unsplash.com/photo-1582408921715-18e7806365c1?w=1200&q=80', title: 'Virtual Tours East Africa — 360° Property Marketing' }],
      },
      {
        loc: '/360-virtual-tour-software',
        images: [{ loc: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80', title: '360° Virtual Tour Software — Create and Share Immersive Tours' }],
      },
      {
        loc: '/360-virtual-tour-africa',
        images: [{ loc: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&q=80', title: '360° Virtual Tours Africa — Immersive Marketing Platform' }],
      },
      {
        loc: '/about',
        images: [{ loc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80', title: 'About Viewora — Kenya\'s Leading Virtual Tour Platform' }],
      },
      {
        loc: '/blog',
        images: [{ loc: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80', title: 'Viewora Blog — Virtual Tour Tips and Guides' }],
      },
      {
        loc: '/faq',
        images: [{ loc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80', title: 'Virtual Tour FAQ — Everything You Need to Know' }],
      },
      {
        loc: '/what-is-a-virtual-tour',
        images: [{ loc: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&q=80', title: 'What Is a Virtual Tour? Complete Guide' }],
      },
      {
        loc: '/benefits-of-virtual-tours',
        images: [{ loc: 'https://images.unsplash.com/photo-1582408921715-18e7806365c1?w=1200&q=80', title: 'Benefits of Virtual Tours for Your Business' }],
      },
      {
        loc: '/virtual-tours-vs-photos',
        images: [{ loc: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80', title: 'Virtual Tours vs Photos — Which Sells Faster?' }],
      },
      // ── Capture Service pages ──────────────────────────────────────────────
      {
        loc: '/360-photography-service-kenya',
        priority: 0.9,
        images: [{ loc: 'https://images.unsplash.com/photo-1582408921715-18e7806365c1?w=1200&q=80', title: '360° Photography Service Kenya — Professional Virtual Tour Capture' }],
      },
      {
        loc: '/virtual-tour-photographer-kenya',
        priority: 0.9,
        images: [{ loc: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80', title: 'Virtual Tour Photographer Kenya — Hire a 360° Pro Near You' }],
      },
      {
        loc: '/360-photography-nairobi',
        priority: 0.85,
        images: [{ loc: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&q=80', title: '360° Photography Nairobi — Virtual Tour Photographer' }],
      },
      {
        loc: '/360-photography-mombasa',
        priority: 0.85,
        images: [{ loc: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80', title: '360° Photography Mombasa & Diani — Virtual Tour Photographer' }],
      },
      {
        loc: '/real-estate-photography-kenya',
        priority: 0.85,
        images: [{ loc: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80', title: 'Real Estate Photography Kenya — 360° Property Photographer' }],
      },
      {
        loc: '/airbnb-photography-kenya',
        priority: 0.85,
        images: [{ loc: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80', title: 'Airbnb Photography Kenya — 360° Virtual Tour for Short-Let' }],
      },
    ],
  },

  site: {
    url: 'https://viewora.software',
    name: 'Viewora',
    description: 'Create interactive 360° virtual tours for your spaces. The subscription-based platform for real estate agents, Airbnb hosts, and space developers.',
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
        { property: 'og:locale', content: 'en_KE' },
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
