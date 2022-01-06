<template>
  <div>
    <footer class="bg-gray-900">
      <div
        class="
          max-w-7xl
          mx-auto
          py-12
          px-4
          overflow-hidden
          sm:px-6
          lg:px-8
        "
      >
        <p class="mt-8 text-center text-base text-gray-50">
          &copy; {{ currentYear }} {{ blok.name }}
        </p>
        <nav
          class="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          <nuxt-link
            class="my-5 text-white hover:underline"
            :to="localePath('privacy-policy')"
            >{{ blok.privacy_policy }}</nuxt-link
          >
        </nav>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'CompanyInformation',
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>
