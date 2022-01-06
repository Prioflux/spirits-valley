<template>
  <div
    v-editable="blok"
    class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-3xl mx-auto policy">
      <div class="px-2" v-html="richtext"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RichContent',
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  computed: {
    richtext() {
      return this.$storyapi.richTextResolver.render(this.blok.text);
    },
  },
};
</script>

<style lang="scss">
.policy {
  @apply my-10;

  h1 {
    @apply font-bold text-2xl my-5;
  }

  h2 {
    @apply font-bold text-xl mb-2 mt-5;
  }
}
</style>
