<template>
  <div v-editable="blok" class="bg-gray-100">
    <div class="c-container py-24">
      <h2 class="text-3xl font-bold font-handwriting text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">{{ blok.title }}</h2>
      <p class="mt-6 max-w-2xl text-xl text-gray-500">{{ blok.description }}</p>

      <!-- Tiers -->
      <div class="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div v-for="card in blok.pricing_cards" :key="card._iud" class="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
          <div class="flex-1">
            <h3 class="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-gray-100 text-gray-900">
              {{ card.label }}
            </h3>
            <h3 class="mt-4 mb-6 text-xl font-semibold text-gray-900 whitespace-pre-line">{{ card.title }}</h3>
            <p
              v-for="amount in card.amounts"
              :key="amount._iud"
              class="mt-4 flex items-baseline text-gray-900"
            >
              <span class="text-xl font-extrabold tracking-tight">{{ amount.currency}} {{ amount.price }}</span>
              <span class="ml-1 text-base text-gray-500">{{ amount.label }}</span>
            </p>

            <div class="relative mt-8">
              <div class="absolute inset-0 flex items-center" aria-hidden="true">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-start">
                <span class="pr-2 bg-white text-sm text-gray-500">
                  {{ blok.included }}
                </span>
              </div>
            </div>

            <!-- Feature list -->
            <ul role="list" class="mt-6 space-y-6">
              <li v-for="feature in card.features" :key="feature._iud" class="grid justify-start">
                <CheckCircleIcon class="col-start-1 col-end-2 mr-3" />
                <span class="text-gray-500 col-start-2 col-end-12">{{ feature.title }}</span>
              </li>
            </ul>
          </div>

          <a href="/contact" class="mt-8 w-full inline-flex items-center justify-center px-5 py-3 btn-secondary btn-secondary-color sm:w-auto">{{ card.contact }}</a>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { CheckCircleIcon } from "@vue-hero-icons/outline";

export default {
  name: "ThreeTierPricing",
  components: {
    CheckCircleIcon
  },
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>