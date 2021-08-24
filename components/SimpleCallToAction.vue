<template>
  <div v-editable="blok">
    <div class="bg-gray-100">
      <div class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
          <span class="block text-gray-900">{{ blok.title }}</span>
        </h2>
        <p class="mt-4 text-lg leading-6 text-gray-700">{{ blok.description }}</p>
        <div class="grid grid-cols-1 md:grid-cols-2 md:space-x-10 justify-center">
          <nuxt-link to="/contact" class="mt-8 w-full inline-flex items-center justify-center px-5 py-3 btn-primary btn-primary-color sm:w-auto">
            {{ blok.contact_button }}
          </nuxt-link>
          <nuxt-link to="/rondleidingen" class="mt-8 w-full inline-flex items-center justify-center px-5 py-3 btn-secondary btn-secondary-color sm:w-auto">
            {{ blok.info_button }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SimpleCallToAction",
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>