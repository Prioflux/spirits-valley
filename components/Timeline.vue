<template>
  <div v-editable="blok">
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
            class="col-start-1 col-end-5 md:p-4 my-8 ml-auto flex-grow"
          >
            <Step v-if="index % 2 === 0" :step="step" />
            <StepImage v-else :step="step" class="hidden md:block" />
          </div>
          <!-- Middle -->
          <div class="col-start-5 col-end-6 md:mx-auto relative flex-grow-0 pr-4 md:pr-0">
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
            class="col-start-6 col-end-10 md:p-4 rounded-xl my-8 mr-auto flex-grow"
          >
            <Step v-if="index % 2 !== 0" :step="step" />
            <StepImage v-else :step="step" class="hidden md:block" />
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

<style>
.tinybox__content__image__caption {
  font-size: 0.8rem !important;
}
</style>