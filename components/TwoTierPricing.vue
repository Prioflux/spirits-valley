<template>
  <div v-editable="blok" class="bg-gray-100">
    <div class="pt-12 sm:pt-16 lg:pt-24">
      <div class="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto space-y-2 lg:max-w-none">
          <h2 class="text-lg leading-6 font-semibold text-gray-900 uppercase tracking-wider">
            {{ blok.title }}
          </h2>
          <p class="text-3xl font-handwriting font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            {{ blok.summary }}
          </p>
        </div>
      </div>
    </div>
    <div class="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
      <div class="relative">
        <div class="absolute inset-0 h-3/4 bg-gray-100"></div>
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
            <div v-for="card in blok.pricing_cards" :key="card._iud" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                <div>
                  <h3 id="tier-standard" class="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-gray-100 text-gray-900">
                    {{ card.label }}
                  </h3>
                </div>
                <div class="mt-4 flex items-baseline text-6xl font-extrabold">
                  {{ card.amount }}
                  <span class="ml-3 text-2xl font-medium text-gray-500">
                    {{ card.amount_unit }}
                  </span>
                </div>
                <p class="mt-5 text-lg text-gray-500">
                  {{ card.descriptoin }}
                </p>
              </div>
              <div class="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                <ul class="space-y-4">
                  <li v-for="feature in card.features" :key="feature._iud" class="flex items-start">
                    <div class="flex-shrink-0">
                      <CheckIcon class="text-green-500" />
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      {{ feature.title }}
                    </p>
                  </li>
                </ul>
                <div class="rounded-md shadow">
                  <nuxt-link
                    to="/contact"
                    class="flex items-center justify-center px-5 py-3 btn-primary uppercase text-lg text-white bg-gray-800 hover:bg-gray-900"
                    aria-describedby="tier-standard">
                    {{ card.contact }}
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
        <div class="max-w-md mx-auto lg:max-w-5xl">
          <div class="rounded-lg bg-gray-900 px-6 py-8 sm:p-10 lg:flex lg:items-center">
            <div class="flex-1">
              <div>
                <h3 class="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-white text-gray-800">
                  {{ blok.teaser_title }}
                </h3>
              </div>
              <div class="mt-4 text-lg text-gray-50">{{ blok.teaser_description }}</div>
            </div>
            <div class="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
              <nuxt-link
                to="/rondleidingen"
                class="flex items-center justify-center px-5 py-3 btn-primary text-gray-900 bg-white hover:bg-gray-50">
                {{ blok.teaser_button }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CheckIcon } from "@vue-hero-icons/outline"

export default {
  name: "TwoTierPricing",
  components: {
    CheckIcon
  },
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>