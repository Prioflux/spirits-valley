<template>
  <div class="bg-white">
    <!-- Header -->
    <div class="relative pb-40 bg-gray-800">
      <div class="absolute inset-0">
        <img
          class="object-cover w-full h-screen"
          src="https://a.storyblok.com/f/120756/6000x4000/35c23decfc/img_9971.jpg"
          alt=""
        />
        <div
          class="absolute inset-0 h-screen  bg-opacity-40 bg-primary-stokerie mix-blend-multiply"
          aria-hidden="true"
        ></div>
      </div>
      <div
        class="relative px-4 pt-32 pb-24 mx-auto  lg:pt-44 max-w-7xl sm:px-6 lg:px-8"
      >
        <h1
          class="text-4xl font-extrabold tracking-tight text-center  md:text-5xl lg:text-6xl"
        >
          <span class="text-gray-900">Aperobar</span>
          <span class="text-primary-stokerie">De Stokerie</span>
        </h1>
      </div>
    </div>

    <!-- Overlapping cards -->
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
              class="absolute top-0 inline-block p-5 transform -translate-y-1/2 shadow-lg  bg-primary-stokerie rounded-xl"
            >
              <!-- Heroicon name: outline/support -->
              <svg
                class="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h2 class="mb-6 text-2xl font-bold text-gray-900">
              Openingsuren
            </h2>
            <div class="grid grid-cols-1">
              <div
                v-for="(day, index) in openingHours"
                :key="index"
                class="inline-grid grid-cols-2 mt-4 text-base text-gray-500 "
              >
                <span class="font-bold">{{ day.name }}:</span>
                <span>{{ day.open }} - {{ day.closed }}</span>
              </div>
            </div>
          </div>
          <div
            class="p-6  bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8"
          >
            <a
              href="https://instagram.com/"
              target="_blank"
              title="Instagram"
              class="text-gray-400 hover:text-gray-500"
              rel="noreferrer"
            >
              <span class="sr-only">Instagram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
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
export default {
  name: 'OpeningHeading',
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
          open: '10:00',
          closed: '18:00',
        },
        {
          name: 'Dinsdag',
          open: '10:00',
          closed: '18:00',
        },
      ];
      return openingHours;
    },
  },
};
</script>
