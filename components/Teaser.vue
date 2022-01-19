<template>
  <div
    id="teaser"
    v-editable="blok"
    class="pt-10 bg-white overflow-hidden"
  >
    <div
      class="
        relative
        max-w-xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8 lg:max-w-7xl
      "
    >
      <div class="relative mt-12 sm:mt-16 lg:mt-24">
        <div
          class="
            grid grid-flow-row-dense grid-cols-1
            lg:grid-cols-2 lg:gap-8 lg:items-center
          "
        >
          <div class="relative m-10 lg:mt-0 lg:col-start-1">
            <img
              :src="blok.logo.filename"
              alt="The Spirits Valley Logo"
            />
          </div>

          <div class="lg:col-start-2 lg:ml-20">
            <dl class="mt-10 space-y-10">
              <div
                v-for="feature in blok.features"
                :key="feature._iud"
                class="relative"
              >
                <dt>
                  <div
                    class="
                      absolute
                      flex
                      items-center
                      justify-center
                      h-12
                      w-12
                      rounded-md
                      bg-gray-900
                      text-white
                    "
                  >
                    <component :is="feature.icon"></component>
                  </div>
                  <h3
                    class="
                      ml-16
                      text-2xl
                      leading-6
                      font-semibold
                      text-gray-900
                    "
                  >
                    {{ feature.title }}
                  </h3>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
                  {{ feature.description }}
                </dd>
              </div>
            </dl>

            <div class="mt-5">
              <nuxt-link
                :to="localePath('tijdlijn')"
                class="btn btn-primary btn-primary-color"
                >{{ blok.discover_button }}</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BookOpenIcon, BeakerIcon } from '@vue-hero-icons/outline';

export default {
  name: 'Teaser',
  components: {
    BookOpenIcon,
    BeakerIcon,
  },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>
