<template>
  <client-only>
    <div class="relative">
      <div
        class="absolute inset-x-0 bottom-0 h-screen bg-gray-100"
      ></div>
      <swiper class="h-screen" navigation>
        <swiper-slide
          v-for="(slide, index) in slides"
          :key="index"
          class="w-full"
        >
          <div class="h-screen mx-auto">
            <div class="relative h-screen sm:overflow-hidden">
              <div class="absolute inset-0">
                <img
                  class="object-cover w-full h-screen swiper-lazy"
                  :data-src="
                    $options.filters.transformImage(slide, '1280x0')
                  "
                  alt="The Spirits Valley Gallery Image"
                />
                <div class="swiper-lazy-preloader"></div>
                <div
                  class="absolute inset-0 bg-gray-500  mix-blend-multiply"
                ></div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <div
          slot="button-prev"
          class="z-20 swiper-button-prev swiper-button-white"
        >
          <ArrowNarrowLeftIcon />
        </div>
        <div
          slot="button-next"
          class="z-20 swiper-button-next swiper-button-white"
        >
          <ArrowNarrowRightIcon />
        </div>
      </swiper>
      <div
        class="absolute inset-x-0 top-0 z-10 w-3/4 px-4 py-40 mx-auto  sm:px-6 lg:px-8"
      >
        <h1
          class="text-2xl font-bold text-center  sm:text-5xl lg:text-6xl"
        >
          <span
            class="block w-full mx-auto leading-normal text-white break-words  md:tracking-wide sm:break-normal lg:w-3/4"
            >{{ blok.baseline }}</span
          >
        </h1>
      </div>
      <div
        class="absolute inset-x-0 bottom-0 z-10 px-4  py-9 sm:px-6 lg:px-8"
      >
        <div class="text-white">
          <span class="scroll-icon"></span>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from '@vue-hero-icons/outline';
export default {
  name: 'Hero',
  components: {
    ArrowNarrowLeftIcon,
    ArrowNarrowRightIcon,
  },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  computed: {
    slides() {
      return this.blok.images.map((item) => {
        return item.image.filename;
      });
    },
  },
};
</script>

<style scoped>
.tinybox__content__image__caption {
  font-size: 0.8rem !important;
}
.swiper-button-next::after,
.swiper-button-prev::after {
  content: '';
}
.swiper-button-prev {
  left: 25px;
}
.swiper-button-next {
  right: 25px;
}
</style>
