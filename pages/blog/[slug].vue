<template>
  <div>
    <main class="section">
      <div class="container card" style="max-width: 800px; margin: 0 auto; padding: 2.5rem;">
        <article v-if="post">
          <div class="mb-8 text-center">
            <NuxtLink to="/blog" class="text-primary text-sm font-bold mb-4 inline-block">&larr; Back to Blog</NuxtLink>
            <h1 class="mb-4" style="font-size: 2.5rem; line-height: 1.2;">{{ post.title }}</h1>
            <p class="text-muted text-lg mb-6">{{ post.description }}</p>

            <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; color: var(--text-muted); font-size: 0.875rem;">
              <span>Published on {{ new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }}</span>
              <span v-if="post.author">&bull; By {{ post.author }}</span>
            </div>
          </div>

          <div v-if="post.image" class="mb-12" style="border-radius: 1rem; overflow: hidden; box-shadow: var(--shadow-lg);">
            <img :src="post.image" :alt="post.title" fetchpriority="high" style="width: 100%; height: auto; max-height: 500px; object-fit: cover; display: block;">
          </div>

          <div class="prose prose-slate max-w-none" style="font-size: 1.125rem; line-height: 1.8; color: var(--text-secondary);">
            <PortableText :value="post.body" />
          </div>

          <div class="mt-16 pt-8 text-center" style="border-top: 1px solid var(--border-color);">
            <h3 class="mb-4">Ready to create your own virtual tour?</h3>
            <a href="https://app.viewora.software/register" class="btn btn-primary">Start Free Trial</a>
          </div>
        </article>
      </div>
    </main>
  </div>
</template>

<!-- Basic styling for markdown content within the prose class -->
<style>
  .prose h2 { font-size: 1.75rem; margin-top: 2.5rem; margin-bottom: 1rem; color: var(--text-primary); }
  .prose h3 { font-size: 1.25rem; margin-top: 2rem; margin-bottom: 0.75rem; color: var(--text-primary); }
  .prose p { margin-bottom: 1.5rem; }
  .prose ul, .prose ol { margin-bottom: 1.5rem; padding-left: 1.5rem; }
  .prose li { margin-bottom: 0.5rem; }
  .prose a { color: var(--primary); text-decoration: underline; }
  .prose blockquote { border-left: 4px solid var(--primary); padding-left: 1rem; font-style: italic; color: var(--text-muted); margin-bottom: 1.5rem; }
  .prose img { border-radius: 0.5rem; box-shadow: var(--shadow-md); margin-bottom: 1.5rem; max-width: 100%; height: auto; }
</style>

<script setup lang="ts">
import { PortableText } from '@portabletext/vue'
import { sanityClient } from '~/composables/useSanityClient'

const route = useRoute()
const baseUrl = 'https://viewora.software'

const { data: post } = await useAsyncData(`blog-${route.params.slug}`, () =>
  sanityClient.fetch(`
    *[_type == "blogPost" && slug.current == $slug][0] {
      title,
      "slug": slug.current,
      description,
      date,
      author,
      "image": image.asset->url,
      body
    }
  `, { slug: route.params.slug as string })
)

if (post.value) {
  const postUrl = `${baseUrl}/blog/${route.params.slug}`

  useSeoMeta({
    title: `${post.value.title} | Viewora Blog`,
    description: post.value.description,
    ogTitle: post.value.title,
    ogDescription: post.value.description,
    ogImage: post.value.image || 'https://viewora.software/og-image.jpg',
    ogImageAlt: post.value.title,
    ogUrl: postUrl,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterImage: post.value.image || 'https://viewora.software/og-image.jpg',
    twitterImageAlt: post.value.title,
  })

  useHead({
    link: [{ rel: 'canonical', href: postUrl }],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.value.title,
          description: post.value.description,
          image: post.value.image,
          datePublished: post.value.date,
          dateModified: post.value.date,
          author: {
            '@type': 'Organization',
            name: post.value.author || 'The Viewora Team',
            url: baseUrl
          },
          publisher: {
            '@type': 'Organization',
            name: 'Viewora',
            url: baseUrl,
            logo: { '@type': 'ImageObject', url: `${baseUrl}/logo.png` }
          },
          url: postUrl,
          mainEntityOfPage: { '@type': 'WebPage', '@id': postUrl }
        })
      },
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
            { '@type': 'ListItem', position: 3, name: post.value.title, item: postUrl }
          ]
        })
      }
    ]
  })
}
</script>
