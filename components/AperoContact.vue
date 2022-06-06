<template>
  <div id="apero-contact">
    <div class="relative lg:px-20 c-container pt-52 pb-36">
      <div class="lg:flex">
        <section
          class="z-10 p-8 mx-auto shadow-lg  rounded-tl-xl rounded-tr-xl lg:absolute bg-opacity-90 bg-primary-stokerie lg:rounded-xl h-fit lg:top-20 lg:left-4 lg:w-fit"
        >
          <div class="relative">
            <div class="absolute -top-16 border-gray-50">
              <span
                class="flex items-center justify-center w-16 h-16 bg-white border rounded-md "
              >
                <svg
                  class="w-10 h-10 text-primary-stokerie"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M22,3H2A2,2 0 0,0 0,5V19A2,2 0 0,0 2,21H22A2,2 0 0,0 24,19V5A2,2 0 0,0 22,3M22,19H2V5H22V19M19,18L21,16L19.5,14H17.85C17.63,13.37 17.5,12.7 17.5,12C17.5,11.3 17.63,10.63 17.85,10H19.5L21,8L19,6C17.7,7 16.73,8.38 16.28,10C16.1,10.64 16,11.31 16,12C16,12.69 16.1,13.36 16.28,14C16.73,15.61 17.7,17 19,18M9,12A3,3 0 0,0 12,9A3,3 0 0,0 9,6A3,3 0 0,0 6,9A3,3 0 0,0 9,12M9,8A1,1 0 0,1 10,9A1,1 0 0,1 9,10A1,1 0 0,1 8,9A1,1 0 0,1 9,8M15,16.59C15,14.09 11.03,13 9,13C6.97,13 3,14.09 3,16.59V18H15V16.59M5.5,16C6.22,15.5 7.7,15 9,15C10.3,15 11.77,15.5 12.5,16H5.5Z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div class="mt-6">
            <h2
              class="text-4xl font-extrabold tracking-tight text-gray-900 "
            >
              {{ blok.title }}
            </h2>
            <p
              class="mt-4 text-lg text-gray-900"
              v-html="description"
            ></p>
            <p>Volg ons op Facebook &amp; Instagram</p>
            <div class="flex gap-3 mt-4">
              <a
                href="https://www.instagram.com/destokerie/"
                target="_blank"
                title="Instagram"
                class="text-gray-900 transition-all  hover:text-gray-700"
                rel="noreferrer"
              >
                <span class="sr-only">Instagram</span>
                <svg
                  class="w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
                  />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/aperobardestokerie"
                target="_blank"
                title="Facebook"
                class="text-gray-900 transition-all  hover:text-gray-700"
                rel="noreferrer"
              >
                <span class="sr-only">Facebook</span>
                <svg
                  class="w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
        <section>
          <div class="relative z-0 h-full">
            <img
              class="w-full shadow-xl  rounded-bl-xl rounded-br-xl lg:rounded-xl ring-1 ring-black ring-opacity-5 lg:w-auto"
              :src="
                $options.filters.transformImage(
                  blok.image.filename,
                  '1280x0',
                )
              "
              :alt="blok.image.alt"
            />
          </div>
        </section>
      </div>
      <section
        class="relative z-10 px-4 pb-32 -mt-8  lg:-mt-32 lg:px-0 max-w-7xl sm:px-6 lg:-right-12"
        aria-labelledby="opening-hours"
      >
        <div class="w-full ml-auto lg:w-1/2">
          <div
            class="flex flex-col bg-white border border-gray-300 shadow-xl  rounded-2xl"
          >
            <div
              class="relative items-center flex-1 px-6 pt-16 pb-8  md:px-8"
            >
              <div
                class="absolute top-0 inline-block p-3 transform -translate-y-1/2 shadow-lg  bg-primary-stokerie rounded-xl"
              >
                <ClockIcon class="w-8 h-8 text-white" />
              </div>
              <h2 class="mb-6 text-4xl font-bold text-gray-900">
                {{ blok.openingHoursTitle }}
              </h2>
              <div class="inline-grid grid-cols-1">
                <div
                  v-for="(day, index) in blok.openingHours"
                  :key="index"
                  class="inline-grid grid-cols-2 mt-4 text-base text-gray-500 "
                >
                  <span class="mr-4 font-bold">{{ day.name }}:</span>
                  <div>
                    <span v-if="day.open">{{ day.open }}</span>
                    <span v-if="day.open && day.closed"> - </span>
                    <span v-if="day.closed">{{ day.closed }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="flex gap-4 p-6  bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8"
            >
              <a
                href="https://www.instagram.com/destokerie/"
                target="_blank"
                title="Instagram"
                class="text-gray-400 transition-all  hover:text-gray-500"
                rel="noreferrer"
              >
                <span class="sr-only">Instagram</span>
                <svg
                  class="w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
                  />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/aperobardestokerie"
                target="_blank"
                title="Facebook"
                class="text-gray-400 transition-all  hover:text-gray-500"
                rel="noreferrer"
              >
                <span class="sr-only">Facebook</span>
                <svg
                  class="w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { ClockIcon } from '@vue-hero-icons/outline';

export default {
  name: 'AperoContact',
  components: {
    ClockIcon,
  },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  computed: {
    description() {
      return this.$storyapi.richTextResolver.render(
        this.blok.description,
      );
    },
  },
};
</script>
