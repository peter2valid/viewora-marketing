import posthog from 'posthog-js'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const key = config.public.posthogKey as string

  if (key) {
    posthog.init(key, {
      api_host: '/ingest',
      ui_host: 'https://us.posthog.com',
      capture_pageview: false,
      capture_pageleave: true,
      loaded: (ph) => {
        if (import.meta.env.DEV) ph.opt_out_capturing()
      },
    })
  }

  const router = useRouter()
  router.afterEach(() => {
    posthog.capture('$pageview', { $current_url: window.location.href })
  })

  return { provide: { posthog } }
})
