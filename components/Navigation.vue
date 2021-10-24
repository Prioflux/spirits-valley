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
          px-6
          py-6
          lg:justify-start
          lg:space-x-10
          animated
        "
      >
        <div class="inline-flex justify-start items-center lg:w-0 lg:flex-1">
          <nuxt-link class="flex-none" :to="localePath('index')">
            <img class="w-12" :class="{ 'filter invert': topOfPage }" :src="blok.logo.filename" :alt="blok.logo.alt" />
          </nuxt-link>
          <nuxt-link class="flex-grow whitespace-nowrap pl-4" :to="localePath('index')">
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
          <nuxt-link
            :to="localePath('tijdlijn')"
            class="btn-text"
            :class="{'btn-text-top': topOfPage, 'btn-text-color': !topOfPage }"
          >
            {{ blok.history }}
          </nuxt-link>

          <div class="relative inline-block text-left">
            <div>
              <button
                id="activities-dropdown"
                type="button"
                class="inline-flex btn-text btn-focus"
                :class="{'btn-text-top': topOfPage, 'btn-text-color': !topOfPage }"
                aria-expanded="true"
                aria-haspopup="true"
                @click="showActivities = !showActivities"
                @mouseover="showActivities = !showActivities"
                @mouseleave="showActivities = false"
              >
                {{ blok.activities }}
                <ChevronDownIcon class="-mr-1 ml-2 mt-1 h-5 w-5" />
              </button>
            </div>

            <transition
              enter-active-class="transition duration-200 delay-100 ease-out"
              enter-class="translate-y-1 opacity-0"
              enter-to-class="translate-y-0 opacity-100"
              leave-active-class="transition duration-150 delay-300 ease-in"
              leave-class="translate-y-0 opacity-100"
              leave-to-class="translate-y-1 opacity-0"
            >
              <div
                v-show="showActivities"
                class="origin-top-right absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="activities-dropdown"
                tabindex="-1"
                @mouseover="showActivities = true"
                @mouseleave="showActivities = false"
              >
                <div class="py-1" role="none">
                  <nuxt-link
                    v-for="(option, index) in activityOptions"
                    :key="index"
                    :to="localePath(`${option.slug}`)"
                    class="dropdown-option"
                    :class="{'btn-text-top': topOfPage, 'btn-text-color': !topOfPage }"
                    @mouseover="showActivities = true"
                    @mouseleave="showActivities = false"
                  >
                    {{ option.label }}
                  </nuxt-link>
                </div>
              </div>          
            </transition>
          </div>       

          <div class="relative inline-block text-left">
            <div>
              <button
                id="languages-dropdown"
                type="button"
                class="inline-flex btn-text btn-focus"
                :class="{'btn-text-top': topOfPage, 'btn-text-color': !topOfPage }"
                aria-expanded="true"
                aria-haspopup="true"
                @click="showLanguages = !showLanguages"
                @mouseover="showLanguages = !showLanguages"
                @mouseleave="showLanguages = false"
              >
                {{ currentLanguage }}
                <ChevronDownIcon class="-mr-1 ml-2 mt-1 h-5 w-5" />
              </button>
            </div>
            
            <transition
              enter-active-class="transition duration-200 delay-100 ease-out"
              enter-class="translate-y-1 opacity-0"
              enter-to-class="translate-y-0 opacity-100"
              leave-active-class="transition duration-150 delay-300 ease-in"
              leave-class="translate-y-0 opacity-100"
              leave-to-class="translate-y-1 opacity-0"
            >
              <div
                v-show="showLanguages"
                class="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="languages-dropdown"
                tabindex="-1"
                @mouseover="showLanguages = true"
                @mouseleave="showLanguages = false"
              >
                <div class="py-1" role="none">
                  <nuxt-link
                    v-for="(language, index) in availableLocales" :key="index"
                    :to="switchLocalePath(language.code)"
                    class="dropdown-option"
                    :class="{'btn-text-top': topOfPage, 'btn-text-color': !topOfPage }"
                    @mouseover="showLanguages = true"
                    @mouseleave="showLanguages = false"
                    @click="$i18n.setLocale(language.code)" 
                  >
                    {{ language.name }}
                  </nuxt-link>
                </div>
              </div>          
            </transition>
          </div>

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
            <nuxt-link class="flex-none hidden sm:block" :to="localePath('index')">
              <img class="w-12" :class="{ 'filter invert': topOfPage }" :src="blok.logo.filename" :alt="blok.logo.alt" />
            </nuxt-link>
            <nuxt-link class="flex-grow" :to="localePath('index')">
              <span
                class="font-handwriting pl-2 sm:pl-4 font-bold text-2xl"
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
                  :to="localePath('evenementen-zaalverhuur')"
                  class="-m-3 p-3 flex items-center hover:bg-gray-50"
                >
                  
                  <KeyIcon />

                  <span class="ml-3 text-base font-medium">
                    {{ blok.events_room_rental }}
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
                
                <div class="divider"></div>

                <nuxt-link
                  v-for="locale in availableLocales"
                  :key="locale.code"
                  :to="switchLocalePath(locale.code)"
                  class="sm-btn-text"
                  role="menuitem"
                  tabindex="-1"
                >
                  <span class="sm-btn-text-inner">
                    {{ locale.name }}
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
import { XIcon, MenuAlt1Icon, BookOpenIcon, MapIcon, KeyIcon, LocationMarkerIcon, ChevronDownIcon } from '@vue-hero-icons/outline'

export default {
  name: 'Header',
  components: {
    XIcon,
    MenuAlt1Icon,
    BookOpenIcon,
    MapIcon,
    KeyIcon,
    LocationMarkerIcon,
    ChevronDownIcon
  },
  props: {
    blok: { type: Object, required: true },
  },
  data: () => ({
    showMobile: false,
    topOfPage: true,
    showActivities: false,
    showLanguages: false,
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
    activityOptions() {
      return [
        {
          label: this.blok.tours,
          slug: 'rondleidingen'
        },
        {
          label: this.blok.events_room_rental,
          slug: 'evenementen-zaalverhuur'
        },
        {
          label: this.blok.trips,
          slug: 'dagtrips'
        }
      ]
    } 
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