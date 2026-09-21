<template>
  <div>
    <section class="section section-bg text-center">
      <div class="container">
        <h1 class="section-title">Viewora Blog & Resources</h1>
        <p class="section-subtitle mb-0" style="max-width: 600px; margin-left: auto; margin-right: auto;">
          Insights, guides, and space marketing strategies to help you close more deals.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="grid-3" v-if="posts?.length">
          <div v-for="article in posts" :key="article.slug" class="card" style="display: flex; flex-direction: column; height: 100%;">
            <div v-if="article.image" style="margin: -1.5rem -1.5rem 1.5rem -1.5rem; height: 200px; overflow: hidden; border-radius: 1rem 1rem 0 0;">
              <img :src="article.image" :alt="article.title" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div style="flex: 1; display: flex; flex-direction: column;">
              <NuxtLink :to="`/blog/${article.slug}`" class="text-primary text-sm font-bold mb-2">{{ article.category || 'Guides' }}</NuxtLink>
              <h3 class="mb-3" style="font-size: 1.25rem; line-height: 1.4;">
                <NuxtLink :to="`/blog/${article.slug}`" style="color: inherit; text-decoration: none;">{{ article.title }}</NuxtLink>
              </h3>
              <p class="text-muted text-sm mb-4" style="flex: 1; line-height: 1.6;">{{ article.description }}</p>
              <div style="display: flex; align-items: center; justify-content: space-between; margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--border-color);">
                <span class="text-xs text-muted">{{ new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }}</span>
                <NuxtLink :to="`/blog/${article.slug}`" class="btn btn-outline" style="padding: 0.25rem 0.75rem; font-size: 0.875rem;">Read More &rarr;</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { sanityClient } from '~/composables/useSanityClient'

const { data: posts } = await useAsyncData('blog-posts', () =>
  sanityClient.fetch(`
    *[_type == "blogPost"] | order(date asc) {
      title,
      "slug": slug.current,
      description,
      date,
      author,
      category,
      "image": image.asset->url
    }
  `)
)

useSeoMeta({
  title: 'Blog — Virtual Tour Tips & Guides Kenya',
  description: 'Learn how to market spaces better with virtual tours, 360° panoramas, and SaaS tools for real estate and Airbnb. Expert insights for the Kenyan market.',
  ogTitle: 'Viewora Blog — Virtual Tour Tips & Guides',
  ogDescription: 'Expert guides on 360° virtual tours, property marketing, and Airbnb optimization for the Kenyan and African market.',
  ogImage: 'https://viewora.software/og-image.jpg',
  ogUrl: 'https://viewora.software/blog',
  twitterCard: 'summary_large_image',
})

useBreadcrumb('Blog', '/blog')

useHead({
  link: [{ rel: 'canonical', href: 'https://viewora.software/blog' }],
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Viewora Blog & Resources',
      url: 'https://viewora.software/blog',
      description: 'Virtual tour guides, property marketing insights, and 360° photography tips for Kenya and Africa.',
      publisher: { '@type': 'Organization', name: 'Viewora', url: 'https://viewora.software' }
    })
  }]
})
</script>
