<template>
  <div v-editable="blok" class="h-96 mt-16 bg-white">
    <div class="c-container">
      <client-only>
        <div class="relative rounded-3xl shadow-xl">
          <swiper class="h-96 rounded-3xl" navigation>
            <swiper-slide
              v-for="(slide, index) in slides"
              :key="index"
              class="w-full"
            >
              <div class="mx-auto h-full">
                <div class="relative h-full sm:overflow-hidden">
                  <div class="absolute inset-0">
                    <img
                      class="
                        h-full
                        w-full
                        object-cover
                        swiper-lazy
                        rounded-3xl
                      "
                      :data-src="
                        $options.filters.transformImage(
                          slide,
                          '1280x720',
                        )
                      "
                      alt="The Spirits Valley Gallery Image"
                    />
                    <div class="swiper-lazy-preloader"></div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <div
              slot="button-prev"
              class="swiper-button-prev swiper-button-white z-20"
            >
              <ArrowNarrowLeftIcon />
            </div>
            <div
              slot="button-next"
              class="swiper-button-next swiper-button-white z-20"
            >
              <ArrowNarrowRightIcon />
            </div>
          </swiper>
        </div>
      </client-only>
    </div>
    <div class="mb-16"></div>
  </div>
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
