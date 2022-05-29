<template>
  <div class="bg-white">
    <div class="relative pb-40 bg-gray-800">
      <div class="absolute inset-0">
        <img
          class="object-cover w-full h-screen"
          src="https://a.storyblok.com/f/120756/6000x4000/35c23decfc/img_9971.jpg"
          alt=""
        />
        <div
          class="absolute inset-0 h-screen  bg-opacity-30 bg-primary-stokerie mix-blend-multiply"
          aria-hidden="true"
        ></div>
      </div>
      <div
        class="relative px-4 pt-32 pb-10 mx-auto  lg:pb-24 lg:pt-44 max-w-7xl sm:px-6 lg:px-8"
      >
        <h1
          class="text-5xl font-extrabold tracking-tight text-center  lg:text-6xl"
        >
          <span class="text-gray-900">Aperobar</span>
          <span class="text-primary-stokerie">De Stokerie</span>
        </h1>
      </div>
    </div>

    <section
      class="relative z-10 px-4 pb-32 mx-auto -mt-32  max-w-7xl sm:px-6 lg:px-8"
      aria-labelledby="contact-heading"
    >
      <div class="w-full mx-auto lg:w-1/2">
        <div class="flex flex-col bg-white shadow-xl rounded-2xl">
          <div
            class="relative items-center flex-1 px-6 pt-16 pb-8  md:px-8"
          >
            <div
              class="absolute top-0 inline-block p-3 transform -translate-y-1/2 shadow-lg  bg-primary-stokerie rounded-xl"
            >
              <ClockIcon class="w-8 h-8 text-white" />
            </div>
            <h2 class="mb-6 text-4xl font-bold text-gray-900">
              Openingsuren
            </h2>
            <div class="inline-grid grid-cols-1">
              <div
                v-for="(day, index) in openingHours"
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
              class="text-gray-400 transition-all hover:text-gray-500"
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
              class="text-gray-400 transition-all hover:text-gray-500"
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
</template>

<script>
import { ClockIcon } from '@vue-hero-icons/outline';

export default {
  name: 'OpeningHeading',
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
    openingHours() {
      const openingHours = [
        {
          name: 'Maandag',
          open: 'Gesloten',
        },
        {
          name: 'Dinsdag',
          open: '10:00',
          closed: '18:00',
        },
        {
          name: 'Woensdag',
          open: '10:00',
          closed: '18:00',
        },
        {
          name: 'Donderdag',
          open: '10:00',
          closed: '18:00',
        },
        {
          name: 'Vrijdag',
          open: '10:00',
          closed: '18:00',
        },
        {
          name: 'Zaterdag',
          open: '10:00',
          closed: '18:00',
        },
        {
          name: 'Zondag',
          open: '10:00',
          closed: '18:00',
        },
      ];
      return openingHours;
    },
  },
};
</script>
