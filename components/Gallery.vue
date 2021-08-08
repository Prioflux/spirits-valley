<template>
  <section v-editable="blok" class="c-container">
    <div class="py-24 mx-auto flex flex-wrap">
      <div class="flex flex-wrap md:-m-2 -m-1">
        <div class="flex flex-wrap w-1/2">
          <div class="md:p-2 p-1 w-1/2">
            <img class="w-full object-cover h-full object-center block rounded-lg shadow-md" :src="$options.filters.transformImage(blok.images[0].image.filename, blok.images[0].dimensions)" :alt="blok.images[0].image.alt">
          </div>
          <div class="md:p-2 p-1 w-1/2">
            <img class="w-full object-cover h-full object-center block rounded-lg shadow-md" :src="$options.filters.transformImage(blok.images[1].image.filename, blok.images[1].dimensions)" :alt="blok.images[1].image.alt">
          </div>
          <div class="md:p-2 p-1 w-full">
            <img class="w-full h-full object-cover object-center block rounded-lg shadow-md" :src="$options.filters.transformImage(blok.images[2].image.filename, blok.images[2].dimensions)" :alt="blok.images[2].image.alt">
          </div>
        </div>
        <div class="flex flex-wrap w-1/2">
          <div class="md:p-2 p-1 w-full">
            <img class="w-full h-full object-cover object-center block rounded-lg shadow-md" :src="$options.filters.transformImage(blok.images[3].image.filename, blok.images[3].dimensions)" :alt="blok.images[3].image.alt">
          </div>
          <div class="md:p-2 p-1 w-1/2">
            <img class="w-full object-cover h-full object-center block rounded-lg shadow-md" :src="$options.filters.transformImage(blok.images[4].image.filename, blok.images[4].dimensions)" :alt="blok.images[4].image.alt">
          </div>
          <div class="md:p-2 p-1 w-1/2">
            <img class="w-full object-cover h-full object-center block rounded-lg shadow-md" :src="$options.filters.transformImage(blok.images[5].image.filename, blok.images[5].dimensions)" :alt="blok.images[5].image.alt">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Gallery",
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>