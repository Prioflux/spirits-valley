<template>
  <div v-editable="blok" :class="blok.background">
    <div
      class="px-4 pt-16 mx-auto max-w-7xl sm:pt-24 sm:px-6 lg:px-8"
    >
      <div class="text-center">
        <h2
          class="text-base font-semibold tracking-wide text-gray-500 uppercase "
        >
          {{ blok.title }}
        </h2>
        <p
          class="mt-3 text-4xl font-extrabold text-gray-900  font-handwriting sm:text-5xl sm:tracking-tight lg:text-6xl"
        >
          {{ blok.summary }}
        </p>
        <p
          class="max-w-xl mx-auto mt-5 text-xl text-gray-500 whitespace-pre-line "
        >
          {{ blok.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>
