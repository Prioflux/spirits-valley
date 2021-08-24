<template>
  <div v-editable="blok" class="pb-16 pt-10  bg-white overflow-hidden">
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <svg class="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
        <defs>
          <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
      </svg>

      <div class="relative mt-12 sm:mt-16 lg:mt-24">
        <div class="grid grid-flow-row-dense grid-cols-1  lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div class="lg:col-start-2 lg:ml-20">
            <h2 class="text-4xl font-handwriting font-extrabold text-gray-900 tracking-tight">
              {{ blok.title }}
            </h2>
            <p class="mt-3 text-lg text-gray-500">
              {{ blok.description }}
            </p>

            <dl class="mt-10 space-y-10">
              <div v-for="feature in blok.features" :key="feature._iud" class="relative">
                <dt>
                  <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gray-900 text-white">
                    <component :is="feature.icon"></component>
                  </div>
                  <h3 class="ml-16 text-2xl leading-6 font-semibold text-gray-900">{{ feature.title }}</h3>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
                  {{ feature.description }}
                </dd>
              </div>
            </dl>

            <div class="mt-5">
              <nuxt-link to="/tijdlijn" class="btn btn-primary btn-primary-color">{{ blok.discover_button }}</nuxt-link>
            </div>
          </div>

          <div class="relative m-10 lg:mt-0 lg:col-start-1">
            <img class="stacked-image absolute bottom-0 left-0 transform -translate-x-1/4 lg:-translate-x-1/2 shadow-md" :src="$options.filters.transformImage(blok.images[0].image.filename, blok.images[0].dimensions)" :alt="blok.images[0].image.alt" width="500" />
            <img class="stacked-image relative bottom-0 left-0 shadow-md" :src="$options.filters.transformImage(blok.images[1].image.filename, blok.images[1].dimensions)" :alt="blok.images[1].image.alt" width="400" />
            <img class="stacked-image relative -top-12 left-0 transform translate-x-1/2 lg:translated-x-1/4 shadow-md" :src="$options.filters.transformImage(blok.images[2].image.filename, blok.images[2].dimensions)" :alt="blok.images[2].image.alt" width="350" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BookOpenIcon, BeakerIcon  } from "@vue-hero-icons/outline"

export default {
  name: 'Teaser',
  components: {
    BookOpenIcon,
    BeakerIcon 
  },
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>