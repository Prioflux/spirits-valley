<template>
  <div v-editable="blok" class="bg-white">
    <div class="max-w-7xl mx-auto pt-16 px-4 sm:pt-24 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-base font-semibold text-gray-500 tracking-wide uppercase">{{ blok.title }}</h2>
        <p class="mt-3 text-4xl font-handwriting font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">{{ blok.summary }}</p>
        <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">{{ blok.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Heading",
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>