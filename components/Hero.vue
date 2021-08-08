<template>
<!-- This example requires Tailwind CSS v2.0+ -->
<div v-editable="blok" class="relative h-screen">
  <div class="absolute inset-x-0 bottom-0 h-screen bg-gray-100"></div>
    <div class="mx-auto h-screen">
      <div class="relative h-screen sm:overflow-hidden">
        <div class="absolute inset-0">
          <img class="h-screen w-full object-cover" :src="$options.filters.transformImage(blok.bg_image.filename, '1280x0')" :alt="blok.bg_image.alt">
          <div class="absolute inset-0 bg-indigo-200 mix-blend-multiply"></div>
        </div>
        <div class="relative h-screen px-4 py-32 sm:px-6 sm:py-24 lg:py-40 lg:px-8">
          <h1 class="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span class="block text-white">{{ blok.baseline }}</span>
            <span class="block text-gray-200">{{ blok.baseline_keyword }}</span>
          </h1>
          <p class="mt-6 max-w-lg mx-auto text-center text-xl text-gray-200 sm:max-w-3xl">
            {{ blok.description }}
          </p>
          <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <nuxt-link to="/contact" href="#" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 sm:px-8">
                {{ blok.contact_button }}
              </nuxt-link>
              <nuxt-link to="/tijdlijn" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8">
                {{ blok.discover_button }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>