<template>
  <div class="relative py-16 bg-white">
    <div class="hidden absolute top-0 inset-x-0 h-1/2 bg-gray-100 lg:block" aria-hidden="true"></div>
    <div class="max-w-7xl mx-auto bg-gray-900 lg:bg-transparent lg:px-8">
      <div class="lg:grid lg:grid-cols-12">
        <div class="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
          <div class="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden" aria-hidden="true"></div>
          <div class="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
            <div class="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
              <img class="object-cover object-center rounded-3xl shadow-2xl" :src="$options.filters.transformImage(blok.image.filename, '500x0')" :alt="blok.image.alt">
            </div>
          </div>
        </div>

        <div class="relative bg-gray-900 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
          <div class="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
            <h2 class="text-5xl font-extrabold text-white font-handwriting">{{ blok.title }}</h2>
            <p class="text-lg text-white">{{ blok.description }}</p>
            <nuxt-link to="/contact" class="block w-full py-3 px-5 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text-gray-900 hover:bg-gray-50 sm:inline-block sm:w-auto" href="#">
              {{ blok.button}}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"BookCallToAction",
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>