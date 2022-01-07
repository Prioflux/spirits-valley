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
          class="
            flex flex-col flex-wrap
            justify-center
            items-center
            mt-2
            space-y-2
          "
          aria-label="Footer"
        >
          <nuxt-link
            class="simple-link"
            :to="localePath('privacy-policy')"
            >{{ blok.privacy_policy }}</nuxt-link
          >
          <button class="simple-link" @click="manageCookies">
            {{ blok.manage_cookies }}
          </button>
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
  methods: {
    manageCookies() {
      this.$cookies.modal = true;
    },
  },
};
</script>
