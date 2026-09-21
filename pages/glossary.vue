<template>
  <div>
    <SeoHero
      title="Virtual Tour Glossary | Key Terms Explained"
      subtitle="The complete reference guide for virtual tour, 360° photography, and property marketing terminology. Everything from panoramas to hotspots, defined clearly for Kenya's property and business professionals."
      badge="Reference Guide"
    />

    <section class="section">
      <div class="container" style="max-width: 860px;">

        <!-- Alphabet quick nav -->
        <div class="card" style="padding: 1.25rem 1.75rem; margin-bottom: 3rem;">
          <div class="alpha-nav">
            <a
              v-for="letter in alphabet"
              :key="letter"
              :href="`#${letter}`"
              class="alpha-link"
            >{{ letter }}</a>
          </div>
        </div>

        <!-- Terms by letter -->
        <div v-for="group in termGroups" :key="group.letter" :id="group.letter" style="margin-bottom: 3rem;">
          <h2 class="glossary-letter">{{ group.letter }}</h2>
          <div class="card" style="padding: 0;">
            <div
              v-for="(term, i) in group.terms"
              :key="term.term"
              class="glossary-term"
              :style="i < group.terms.length - 1 ? 'border-bottom: 1px solid var(--border-color);' : ''"
            >
              <h3 class="glossary-term-title">{{ term.term }}</h3>
              <p class="glossary-term-def">{{ term.def }}</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <SeoCTA />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'Virtual Tour Glossary | 30+ Terms Explained',
  description: '30+ virtual tour terms explained in plain English. Covers 360° photography, panoramas, hotspots, VR, and image formats for property professionals.',
  ogTitle: 'Virtual Tour Glossary | All Key Terms Defined',
  ogDescription: 'The complete reference for virtual tour terminology. 30+ key terms explained clearly for Kenya\'s property and business community.',
  ogImage: 'https://viewora.software/og-image.jpg',
  ogUrl: 'https://viewora.software/glossary',
  twitterCard: 'summary_large_image',
})

useBreadcrumb('Virtual Tour Glossary', '/glossary')

useHead({
  link: [{ rel: 'canonical', href: 'https://viewora.software/glossary' }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'DefinedTermSet',
        name: 'Virtual Tour Glossary',
        description: 'A comprehensive glossary of virtual tour, 360° photography, and immersive marketing terminology.',
        url: 'https://viewora.software/glossary',
        publisher: { '@type': 'Organization', name: 'Viewora', url: 'https://viewora.software' }
      })
    }
  ]
})

const alphabet = ['3', 'A', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'V', 'W']

const termGroups = [
  {
    letter: '3',
    terms: [
      { term: '360° Camera', def: 'A camera that captures images or video in all directions simultaneously, covering the full 360° horizontal field of view. Popular models used in Kenya include Ricoh Theta, Insta360, and GoPro MAX. The output is a single equirectangular image that can be projected into an immersive virtual experience.' },
      { term: '360° Photography', def: 'The process of capturing panoramic images that cover the complete sphere around a camera position. Used as the foundation for virtual tours in real estate, hospitality, tourism, and business marketing.' },
      { term: '3D Virtual Tour', def: 'A virtual tour created using specialized 3D scanning equipment (such as Matterport) that generates a true three-dimensional model of a space. More detailed than a standard 360° tour, but requires more expensive equipment and longer production time.' },
    ]
  },
  {
    letter: 'A',
    terms: [
      { term: 'Aerial Virtual Tour', def: 'A virtual tour that incorporates drone-captured 360° images to provide elevated, bird\'s-eye perspectives of a property or landscape. Particularly valuable for large properties, safari lodges, resorts, and land in Kenya.' },
    ]
  },
  {
    letter: 'C',
    terms: [
      { term: 'Capture', def: 'The process of photographing a space using a 360° camera to create the raw material for a virtual tour. In Kenya, Viewora\'s Capture service sends professional photographers to your property to handle this process.' },
    ]
  },
  {
    letter: 'D',
    terms: [
      { term: 'Dollhouse View', def: 'A bird\'s-eye 3D view of the interior of a space, resembling a dollhouse. Available in advanced 3D scanning platforms, it allows viewers to understand the spatial layout of a property at a glance.' },
    ]
  },
  {
    letter: 'E',
    terms: [
      { term: 'Embed Code', def: 'A snippet of HTML code provided by Viewora that you paste into your website to display a virtual tour directly on your web pages. Allows property agents, hotels, and businesses to integrate tours seamlessly into their existing websites.' },
      { term: 'Equirectangular Image', def: 'The standard format for 360° panoramic photographs. An equirectangular image maps the complete sphere of a 360° photo onto a flat 2:1 ratio rectangle, which can then be projected into a spherical viewing environment for immersive exploration.' },
    ]
  },
  {
    letter: 'F',
    terms: [
      { term: 'Field of View (FOV)', def: 'The angular extent of the observable scene at any given moment in a virtual tour. A wider field of view gives a greater sense of space; a narrower field of view provides more detail. Virtual tours allow viewers to look in any direction, accessing the complete 360° field of view.' },
      { term: 'Floor Plan', def: 'A top-down diagram showing the layout of a property. In Viewora, interactive floor plans can be embedded within a virtual tour, allowing viewers to navigate from room to room using the floor plan as a map.' },
    ]
  },
  {
    letter: 'G',
    terms: [
      { term: 'Gyroscope Navigation', def: 'A feature that allows users to navigate a virtual tour by physically moving their phone or device. When gyroscope navigation is enabled on a mobile device, tilting and rotating the phone changes the viewer\'s perspective inside the tour — creating an immersive VR-like experience without a headset.' },
    ]
  },
  {
    letter: 'H',
    terms: [
      { term: 'Hotspot', def: 'An interactive clickable element placed within a virtual tour at a specific location. Hotspots can link to other rooms in the tour, display text labels, show images, play audio, or link to external pages such as floor plans, pricing, or contact forms. They are the primary navigation and information tool in Viewora tours.' },
      { term: 'HDR Photography', def: 'High Dynamic Range photography captures multiple exposures of the same scene and combines them to produce an image with greater detail in both bright and dark areas. Essential for professional virtual tours in spaces with windows, where standard cameras struggle to balance interior and exterior light.' },
    ]
  },
  {
    letter: 'I',
    terms: [
      { term: 'Immersive Tour', def: 'A broad term for any digital experience that creates a strong sense of being present in a real physical space. 360° virtual tours are the most accessible form of immersive tour, requiring only a smartphone or computer rather than VR hardware.' },
      { term: 'Interactive Virtual Tour', def: 'A virtual tour that allows viewers to actively control their experience — choosing where to navigate, what to click, and what information to access — as opposed to a passive linear video walkthrough.' },
    ]
  },
  {
    letter: 'L',
    terms: [
      { term: 'Lead Capture', def: 'A feature that allows property agents and businesses to collect visitor contact information directly within a virtual tour. Viewora supports embedded lead capture forms that convert tour viewers into qualified enquiries without leaving the immersive experience.' },
    ]
  },
  {
    letter: 'M',
    terms: [
      { term: 'Multi-Scene Tour', def: 'A virtual tour that connects multiple panoramic scenes (rooms, spaces, or locations) into a single navigable experience. A multi-scene tour of a house, for example, links the living room, kitchen, bedrooms, and garden into one seamless walkthrough.' },
    ]
  },
  {
    letter: 'N',
    terms: [
      { term: 'Nadir', def: 'The very bottom point of a 360° panoramic image — directly below the camera\'s position, where the tripod or floor would appear. Professional virtual tours typically apply a logo patch or branded cap to the nadir to hide the tripod and maintain a clean appearance.' },
    ]
  },
  {
    letter: 'P',
    terms: [
      { term: 'Panorama', def: 'A wide-angle photographic image that captures a broad view of a scene. A full 360° panorama captures the entire sphere of a space — floor to ceiling, wall to wall — and forms the visual foundation of a virtual tour.' },
      { term: 'Property Walkthrough', def: 'A term commonly used in Kenya\'s real estate market for a virtual tour of a property. A digital property walkthrough allows buyers, renters, and investors to explore every room and feature of a property remotely, before requesting a physical viewing.' },
    ]
  },
  {
    letter: 'R',
    terms: [
      { term: 'Remote Viewing', def: 'The ability to view and evaluate a property, space, or business location from anywhere in the world using a virtual tour. Particularly valuable in Kenya for reaching diaspora buyers and investors who cannot attend physical viewings.' },
    ]
  },
  {
    letter: 'S',
    terms: [
      { term: 'Spatial Awareness', def: 'The ability of a viewer to understand the size, layout, and flow of a physical space through a virtual representation. 360° virtual tours provide significantly better spatial awareness than flat photographs, because viewers can look in all directions and understand how rooms connect.' },
    ]
  },
  {
    letter: 'T',
    terms: [
      { term: 'Tiny Planet', def: 'A creative visual effect applied to a 360° panoramic image that compresses the entire sphere of the space into a small circular "planet" shape. Often used as eye-catching social media content for real estate and tourism marketing.' },
      { term: 'Tour Embed', def: 'See: Embed Code.' },
    ]
  },
  {
    letter: 'V',
    terms: [
      { term: 'Virtual Reality (VR)', def: 'A fully immersive digital environment experienced through a VR headset (such as Oculus Quest or Google Cardboard). Viewora tours support VR viewing through compatible headsets, offering the most immersive possible experience of a property or space.' },
      { term: 'Virtual Staging', def: 'The process of digitally furnishing or decorating a property within a virtual tour to help buyers visualize the space\'s potential. Particularly useful for off-plan or empty properties in Kenya\'s new development market.' },
      { term: 'Virtual Tour', def: 'An interactive digital experience that simulates being present in a real physical location. Using 360° panoramic photography, virtual tours allow viewers to explore any space from any device, at any time. Viewora is a virtual tour platform founded in Kenya, used worldwide.' },
      { term: 'Virtual Walkthrough', def: 'Another term for a virtual tour, commonly used in Kenya\'s property market. A virtual walkthrough gives buyers, renters, or guests a complete room-by-room exploration of a property without visiting in person.' },
    ]
  },
  {
    letter: 'W',
    terms: [
      { term: 'White Label', def: 'A feature that allows businesses to remove the Viewora branding from their virtual tours and replace it with their own agency or company logo. White-label virtual tours are available on Viewora\'s premium plans and are popular with real estate agencies and property developers in Kenya.' },
    ]
  },
]
</script>

<style scoped>
.alpha-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.alpha-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 0.5rem;
  border: 1px solid var(--border-color);
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--text-muted);
  text-decoration: none;
  transition: all 0.15s ease;
}

.alpha-link:hover {
  border-color: var(--primary);
  color: var(--primary);
  background: var(--accent-dim);
}

.glossary-letter {
  font-family: var(--font-mono);
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.glossary-term {
  padding: 1.5rem 1.75rem;
}

.glossary-term-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 0.375rem;
}

.glossary-term-def {
  font-size: 0.9375rem;
  line-height: 1.7;
  color: var(--slate);
  margin: 0;
}
</style>
