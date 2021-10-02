<template>
  <div v-editable="blok" class="bg-gray-100">
    <div class="bg-gray-100 pb-20 pt-8">
      <div class="relative">
        
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex mt-8">
            <div class="flex-1 bg-white px-6 py-8 lg:p-12 ">
              <h3 class="text-2xl font-handwriting font-bold text-gray-900 sm:text-3xl">
                {{ blok.title }}
              </h3>
              <div class="mt-8">
                <div class="flex items-center">
                  <h4 class="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-gray-900">
                    {{ blok.included }}
                  </h4>
                  <div class="flex-1 border-t-2 border-gray-200"></div>
                </div>
                <ul class="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                  <li v-for="item in blok.items" :key="item._iud" class="flex items-start lg:col-span-1">
                    <div class="flex-shrink-0">
                      <CheckCircleIcon />
                    </div>
                    <p class="ml-3 text-sm text-gray-700">
                      {{ item.title }}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
              <p class="text-2xl leading-6 font-medium text-gray-900 break-normal">
                {{ blok.price_title }}
              </p>
              <div class="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                <span>
                  {{ blok.amount }}
                </span>
                <span class="ml-3 text-xl font-medium text-gray-500">
                  {{ blok.per_unit }}
                </span>
              </div>
              <div class="mt-6">
                <div>
                  <nuxt-link :to="localePath('contact')" class="flex items-center justify-center px-5 py-3 btn text-xl uppercase text-white bg-gray-800 hover:bg-gray-900">
                    {{ blok.book_button }}
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import { CheckCircleIcon } from "@vue-hero-icons/outline"

export default {
  name: "Pricing",
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