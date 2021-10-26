<template>
  <div v-editable="blok" class="h-screen">
    <client-only>
      <div class="relative">
        <div class="absolute inset-x-0 bottom-0 h-screen bg-gray-100"></div>
        <swiper
          class="h-screen"
          navigation>
          <swiper-slide v-for="(slide, index) in slides" :key="index" class="w-full">
            <div class="mx-auto h-screen">
              <div class="relative h-screen sm:overflow-hidden">
                <div class="absolute inset-0">
                  <img class="h-screen w-full object-cover swiper-lazy" :data-src="$options.filters.transformImage(slide, '1280x0')" alt="The Spirits Valley Gallery Image" />
                  <div class="swiper-lazy-preloader"></div>
                  <div class="absolute inset-0 bg-gray-500 mix-blend-multiply"></div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <div slot="button-prev" class="swiper-button-prev swiper-button-white z-20"><ArrowNarrowLeftIcon /></div>
          <div slot="button-next" class="swiper-button-next swiper-button-white z-20"><ArrowNarrowRightIcon /></div>
        </swiper>
        <div class="absolute inset-x-0 top-0 z-10 px-4 py-40 sm:px-6 lg:px-8 mx-auto w-3/4">
          <h1 class="text-center text-2xl font-bold sm:text-5xl lg:text-6xl">
            <span
              class="
                block
                text-white
                w-full
                mx-auto
                md:tracking-wide
                leading-normal
                break-words 
                sm:break-normal
                lg:w-3/4"
              >{{ blok.baseline}}</span>
          </h1>
        </div>
        <div class="absolute inset-x-0 bottom-0 z-10 px-4 py-9 sm:px-6 lg:px-8">
          <div class="text-white">
            <span class="scroll-icon"></span>
          </div>
        </div>
      </div>
    </client-only>
  </div>  
</template>

<script>
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from "@vue-hero-icons/outline"

export default {
  name: "Hero",
  components: {
    ArrowNarrowLeftIcon,
    ArrowNarrowRightIcon
  },
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  computed: {
    slides() {
      return this.blok.images.map(item => {
        return item.image.filename
      })
    }
  }
}
</script>

<style scoped>
.tinybox__content__image__caption {
  font-size: 0.8rem !important;
}

.swiper-button-next::after, .swiper-button-prev::after {
    content: "";
}

.swiper-button-prev {
  left: 25px;
}

.swiper-button-next {
  right: 25px;
}

.scroll-text, .scroll-icon {
  position: absolute;
  left: 50%;
}

.scroll-text {
  transform: translateX(-50%);
}

.scroll-icon {
  position: absolute;
  top: 0;
  left: 50%;
  width: 30px;
  height: 50px;
  margin-left: -15px;
  border: 2px solid #fff;
  border-radius: 50px;
  box-sizing: border-box;
}

.scroll-icon::before {
  position: absolute;
  top: 10px;
  left: 50%;
  content: '';
  width: 6px;
  height: 6px;
  margin-left: -3px;
  background-color: #fff;
  border-radius: 100%;
  -webkit-animation: sdb10 2s infinite;
  animation: sdb10 2s infinite;
  box-sizing: border-box;
}

@-webkit-keyframes sdb10 {
  0% {
    -webkit-transform: translate(0, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    -webkit-transform: translate(0, 20px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@keyframes sdb10 {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    transform: translate(0, 20px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>