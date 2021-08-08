<template>
  <div v-editable="blok" class="relative bg-indigo-400">
    <div class="absolute inset-0">
      <img class="w-full h-full object-cover" :src="$options.filters.transformImage(blok.image.filename, '1280x0')" :alt="blok.image.alt">
      <div class="absolute inset-0 bg-gray-600 mix-blend-multiply" aria-hidden="true"></div>
    </div>
    <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-44 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">{{ blok.title }}</h1>
      <p class="mt-6 text-xl text-gray-100 max-w-3xl">{{ blok.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageHeading",
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>