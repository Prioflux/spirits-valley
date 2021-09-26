<template>
  <div v-editable="blok" class="relative transparent z-20">
    <div class="min-w-screen mx-auto">
      <div
        :class="{ scrolled: !topOfPage }"
        class="
          hidden
          lg:flex lg:fixed
          w-full
          flex-wrap
          m-auto
          top-0
          animated
          justify-between
          items-center
          p-6
          lg:justify-start
          lg:space-x-10
          animated
        "
      >
        <div class="inline-flex justify-start items-center lg:w-0 lg:flex-1">
          <nuxt-link :to="localePath('index')">
            <span class="pl-2 font-bold text-4xl font-handwriting" :class="{'btn-text-top': topOfPage }">
              {{ blok.name }}
            </span>
          </nuxt-link>
        </div>
        <div class="flex justify-start lg:w-0 lg:flex-1"></div>
        <div
          class="
            hidden
            lg:flex
            items-center
            justify-end
            lg:flex-1
            lg:w-0
            space-x-10
          "
        >

          <nuxt-link :to="localePath('tijdlijn')" class="btn-text btn-focus" :class="{'btn-text-top': topOfPage, 'btn-text-color': !topOfPage }">
            {{ blok.history }}
          </nuxt-link>

          <nuxt-link :to="localePath('rondleidingen')" class="btn-text btn-focus" :class="{'btn-text-top': topOfPage, 'btn-text-color': !topOfPage }">
            {{ blok.tours }}
          </nuxt-link>

          <nuxt-link :to="localePath('dagtrips')" class="btn-text btn-focus" :class="{'btn-text-top': topOfPage, 'btn-text-color': !topOfPage }">
            {{ blok.trips }}
          </nuxt-link>

          <v-select
            class="custom-dropdown"
            :class="{ 'dropdown-top': topOfPage, 'dropdown-scrolled': !topOfPage }"
            label="name"
            :options="availableLocales"
            :value="currentLanguage"
          >
            <template #option="option">
              <nuxt-link
                :to="switchLocalePath(option.code)"
                role="menuitem"
                tabindex="-1"
                @click="$i18n.setLocale(option.code)"
                >{{ option.name }}
              </nuxt-link>
            </template>
          </v-select>

          <nuxt-link
            :to="localePath('contact')"
            class="
              btn
              btn-primary
            "
            :class="{'btn-primary-top': topOfPage, 'btn-primary-color': !topOfPage }"
          >
            {{ blok.contact }}
          </nuxt-link>
        </div>
      </div>
    </div>

    <div
      :class="{ scrolled: !topOfPage || showMobile }"
      class="
        fixed
        top-0
        inset-x-0
        transition
        transform
        origin-top-right
        lg:hidden
      "
    >
      <div
        class="
          divide-y-2 divide-gray-50
        "
      >
        <div class="pt-5 pb-6 px-5">
          <div class="flex items-center justify-between">
            <nuxt-link :to="localePath('index')">
              <span
                class="font-handwriting pl-2 font-bold text-2xl"
                :class="{ 'btn-text-top': topOfPage, 'text-gray-900': showMobile }">
                {{ blok.name }}
              </span>
            </nuxt-link>

            <div class="-mr-2" @click="showMobile = !showMobile">
              <button
                v-show="!showMobile"
                type="button"
                class="
                  rounded-md
                  p-2
                  inline-flex
                  items-center
                  justify-center
                  btn-focus
                "
                :class="{'btn-text-top': topOfPage ||  showMobile}"
              >
                <span class="sr-only">Close menu</span>
                <MenuAlt1Icon size="25" />
              </button>
              <button
                v-show="showMobile"
                type="button"
                class="
                  bg-white
                  rounded-md
                  p-2
                  inline-flex
                  items-center
                  justify-center
                  text-gray-400
                  hover:text-gray-500 hover:bg-gray-100
                  btn-focus
                "
              >
                <span class="sr-only">Close menu</span>
                <XIcon size="25" />
              </button>
            </div>
          </div>

          <transition
            enter-active-class="transition duration-200 ease-out"
            enter-class="translate-y-1 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-1 opacity-0"
          >
            <div v-show="showMobile" class="mt-6 bg-transparent">
              <nav class="grid grid-cols-1 gap-y-8">

                <nuxt-link
                  :to="localePath('tijdlijn')"
                  class="-m-3 p-3 flex items-center hover:bg-gray-50"
                >
                  <BookOpenIcon />

                  <span class="ml-3 text-base font-medium">
                    {{ blok.history }}
                  </span>
                </nuxt-link>

                <nuxt-link
                  :to="localePath('rondleidingen')"
                  class="-m-3 p-3 flex items-center hover:bg-gray-50"
                >
                  
                  <MapIcon />

                  <span class="ml-3 text-base font-medium">
                    {{ blok.tours }}
                  </span>
                </nuxt-link>

                <nuxt-link
                  to="/dagtrips"
                  class="-m-3 p-3 flex items-center hover:bg-gray-50"
                >
                  
                  <LocationMarkerIcon />

                  <span class="ml-3 text-base font-medium">
                    {{ blok.trips }}
                  </span>
                </nuxt-link>

                <nuxt-link
                  :to="localePath('contact')"
                  class="
                    btn
                    whitespace-nowrap
                    inline-flex
                    items-center
                    justify-center
                    px-4
                    py-2
                    text-base
                    text-white
                    bg-gray-900
                    hover:bg-gray-800
                  "
                >
                  {{ blok.contact }}
                </nuxt-link>
              </nav>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { XIcon, MenuAlt1Icon, BookOpenIcon, MapIcon, LocationMarkerIcon } from '@vue-hero-icons/outline'

export default {
  name: 'Header',
  components: {
    XIcon,
    MenuAlt1Icon,
    BookOpenIcon,
    MapIcon,
    LocationMarkerIcon 
  },
  props: {
    blok: { type: Object, required: true },
  },
  data: () => ({
    showMobile: false,
    topOfPage: true,
  }),
  computed: {
    currentLanguage() {
      const language = this.$i18n.locale.toUpperCase()
      return language
    },
    availableLocales() {
      const locales = this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
      return locales
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (!this.topOfPage) {
        this.topOfPage = true
      }
      if (window.pageYOffset > 0) {
        // user is scrolled
        if (this.topOfPage) this.topOfPage = false
      }
    },
  },
}
</script>

<style>
.custom-select .vs__dropdown-option--highlight,
.custom-dropdown .vs__dropdown-option--highlight {
  @apply bg-gray-900;
}

.custom-dropdown .vs__search::placeholder,
.custom-dropdown .vs__dropdown-toggle {
  @apply border-0 w-20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-200 transition-all;
}

.custom-select .vs__dropdown-menu,
.custom-dropdown .vs__dropdown-menu {
  @apply text-base rounded-md bg-gray-50;
}

.dropdown-top .vs__selected {
  @apply text-gray-50 opacity-100;
}

.dropdown-scrolled .vs__selected {
  @apply text-gray-500;
}

.dropdown-top .vs__open-indicator {
  fill: #fafaf9;
}

.dropdown-scrolled .vs__open-indicator {
  fill: #78716c;
}


</style>