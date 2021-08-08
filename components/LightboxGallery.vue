<template>
  <div v-editable="blok">
    <Tinybox
      v-model="index"
      :images="images"
      loop
    />
   <div class="c-container">
      <section class="py-8 px-4">
        <div class="flex flex-wrap -mx-4">
          <div class="hidden md:block md:w-1/2 px-4">
            <div class="h-full w-full bg-cover rounded shadow-md">
              <img class="lightbox-image" :src="$options.filters.transformImage(blok.images[0].image.filename, '1280x720')" :alt="blok.images[0].image.alt" @click="index = 0">
            </div>
          </div>
          <div class="md:w-1/2 h-auto px-4">
            <div class="mb-8"><img class="" :src="$options.filters.transformImage(blok.logo.filename, '1280x720')" :alt="blok.logo.alt"></div>
            <div><img class="lightbox-image" :src="$options.filters.transformImage(blok.images[1].image.filename, '1280x720')" :alt="blok.images[1].image.alt" @click="index = 1"></div>
          </div>
        </div>
      </section>

      <section class="py-8 px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 -mx-4 -mb-8">
          <div v-for="(image, i) in blok.images.slice(2, 6)" :key="image._iud" class="px-4 mb-8 h-56">
            <div v-if="i+1 == blok.images.slice(2, 6).length" class="relative h-full cursor-pointer" @click="index = i+2">
              <div class="absolute inset-0 h-full">
                <img class="lightbox-image" :src="$options.filters.transformImage(blok.images[i+2].image.filename, '1280x720')" :alt="blok.images[i+2].image.alt">
                <div v-if="numberExtraImages(blok.images) > 0" class="absolute inset-0 bg-gray-600 rounded-lg mix-blend-multiply h-full"></div>
              </div>
              <div v-if="numberExtraImages(blok.images) > 0" class="relative text-center top-1/2 transform -translate-y-1/2">
                <span class="text-white text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
                  {{ numberExtraImages(blok.images) }} + 
                </span>
              </div>
            </div>
            <img v-else class="lightbox-image" :src="$options.filters.transformImage(blok.images[i+2].image.filename, '1280x720')" :alt="blok.images[i+2].image.alt" @click="index = i+2">
          </div>
        </div>
      </section>
   </div>
  </div>
</template>

<script>
export default {
  name: 'Lightbox',
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    index: null,
  }),
  computed: {
    images() {
      const images = this.blok.images.map(imageComponent => {
        return {
          src: imageComponent.image.filename,
          caption: imageComponent.image.title,
          alt: imageComponent.image.alt
        }
      })

      return images
    }
  },
  methods: {
    numberExtraImages(images) {
      return images.length-images?.slice(0, 6).length
    }
  }
}
</script>