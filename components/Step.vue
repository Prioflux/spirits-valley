<template>
  <div>
    <Tinybox
      v-model="index"
      :images="lightboxImages(step.images)"
      loop
    />
    <h2
      class="
        text-base
        font-semibold
        text-gray-900
        tracking-wide
        uppercase
      "
    >
      {{ step.period }}
    </h2>
    <h2
      class="step-title"
    >
      {{ step.title }}
    </h2>
    <p class="max-w-2xl mt-5 mx-auto text-xl text-gray-500">
      {{ step.description }}
    </p>
    <div v-if="imageUrl(step.images[0])" class="max-w-2xl mt-5 mx-auto">
      <img
        class="lightbox-image"
        :src="imageUrl(step.images[0])"
        :alt="imageAlt(step.images[0])"
        @click="index = 0"
      />
      <div class="grid grid-cols-1 md:grid-cols-4 -mx-2 -mb-8 mt-8">
        <div v-for="(image, i) in step.images.slice(1, 5)" :key="image._iud" class="px-2 mb-8 h-36">
          <div v-if="i+1 == step.images.slice(1, 5).length" class="relative h-full cursor-pointer" @click="index = i+1">
            <div class="absolute inset-0 h-full">
              <img 
                class="lightbox-image"
                :src="$options.filters.transformImage(step.images[i+1].image.filename, '1280x720')"
                :alt="step.images[i+1].image.alt"
              >
              <div v-if="numberExtraImages(step.images) > 0" class="absolute inset-0 bg-gray-600 rounded-lg mix-blend-multiply h-full"></div>
            </div>
            <div v-if="numberExtraImages(step.images) > 0" class="relative text-center top-1/2 transform -translate-y-1/2">
              <span class="text-white text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
                {{ numberExtraImages(step.images) }} + 
              </span>
            </div>
          </div>
          <img 
            v-else
            class="lightbox-image"
            :src="$options.filters.transformImage(step.images[i+1].image.filename, '1280x720')"
            :alt="step.images[i+1].image.alt" @click="index = i+1"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Step",
  props: {
    step: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    index: null
  }),
  methods: {
   lightboxImages(images) {
     const imageArray = images.map(imageComponent => {
        return {
          src: imageComponent.image.filename,
          caption: imageComponent.image.title,
          alt: imageComponent.image.alt
        }
      })

      return imageArray
   },
   numberExtraImages(images) {
      return images.length-images?.slice(0, 5).length
    },
    imageUrl(item) {
      return item?.image?.filename
    },
    imageAlt(item) {
      return item?.image?.alt
    }
  }
}
</script>