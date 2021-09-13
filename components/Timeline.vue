<template>
  <div v-editable="blok">
    <div>
      <img
        class="lg:w-1/2 border-gray-100 border-b-4 rounded-sm mx-auto"
        :src="blok.logo.filename"
        :alt="blok.logo.alt" />
    </div>
    <div class="w-full">
      <div
        class="
          flex flex-col
          md:grid
          grid-cols-9
          mx-auto
          px-2
          lg:px-6
          text-gray-800
        "
      >
        <!-- left -->
        <div
          v-for="(step, index) in blok.steps"
          :key="step._iud"
          class="flex md:contents"
          :class="{ 'flex-row-reverse': index % 2 === 0 }"
        >
          <div
            v-if="index % 2 === 0"
            class="col-start-1 col-end-5 p-4 my-4 ml-auto"
          >
            <Step :step="step" />
          </div>
          <!-- Middle -->
          <div class="col-start-5 col-end-6 md:mx-auto relative">
            <div class="h-full w-10 lg:w-20 flex items-center justify-center">
              <div class="h-full w-2 bg-gray-100 pointer-events-none"></div>
            </div>
            <div
              class="
                w-10
                h-10
                lg:w-20 lg:h-20
                absolute
                top-1/2
                -mt-5
                rounded-full
                bg-gray-100
                shadow
                flex
                items-center
                justify-center
              "
            >
              <component
                :is="step.icon"
                class="h-full w-full lg:h-4/5 lg:w-4/5 p-2"
              />
            </div>
          </div>
          <!-- Right -->
          <div
            v-if="index % 2 !== 0"
            class="col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto"
          >
            <Step :step="step" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  HandIcon,
  PuzzleIcon,
  BeakerIcon,
  BookmarkAltIcon,
  CollectionIcon,
  TruckIcon,
} from '@vue-hero-icons/outline'

export default {
  name: 'Process',
  components: {
    HandIcon,
    PuzzleIcon,
    BeakerIcon,
    BookmarkAltIcon,
    CollectionIcon,
    TruckIcon,
  },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  }
}
</script>
