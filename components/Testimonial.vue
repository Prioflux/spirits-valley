<template>
  <section v-editable="blok">
    <div class=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/6 mx-auto">
          <div class="rounded-lg shadow-xl h-64 overflow-hidden">
            <img alt="content" class="object-cover object-center h-full w-full" :src="$options.filters.transformImage(blok.image.filename, '1200x500')">
          </div>
          <div class="flex flex-col sm:flex-row mt-10">
            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div class="w-32 h-32 inline-flex items-center justify-center rounded-full shadow-xl">
                <img class="rounded-full" :src="blok.profile.filename" :alt="blok.profile.alt" />
              </div>
              <div class="flex flex-col items-center text-center justify-center">
                <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">{{ blok.name }}</h2>
                <div class="w-12 h-1 bg-gray-900 rounded mt-2 mb-4"></div>
                <p class="text-base">{{ blok.profile_description }}</p>
              </div>
            </div>
            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-left">
              <p class="leading-relaxed text-lg mb-4">{{ blok.description }}</p>
              <nuxt-link :to="localePath('tijdlijn')" class="btn-primary btn-primary-color xs:h-5">
                {{ blok.discover_button }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Testimonial",
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>