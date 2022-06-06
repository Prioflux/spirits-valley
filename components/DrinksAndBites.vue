<template>
  <div
    class="relative pt-16 pb-32 overflow-hidden bg-white c-container"
  >
    <div
      class="absolute inset-x-0 bottom-0 z-10 px-4  py-9 sm:px-6 lg:px-8"
    >
      <div class="text-black">
        <span class="scroll-icon"></span>
      </div>
    </div>
    <div class="relative mt-12">
      <div class="lg:flex">
        <div
          class="relative z-10 p-8 mx-auto shadow-lg  bg-opacity-90 bg-primary-stokerie rounded-tl-xl rounded-tr-xl lg:rounded-xl h-fit lg:-right-28 lg:-top-12"
        >
          <div class="absolute -top-6 border-gray-50">
            <span
              class="flex items-center justify-center w-16 h-16 bg-white border rounded-md "
            >
              <svg
                class="w-10 h-10 text-primary-stokerie"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7.5,7L5.5,5H18.5L16.5,7M11,13V19H6V21H18V19H13V13L21,5V3H3V5L11,13Z"
                />
              </svg>
            </span>
          </div>
          <div class="mt-6 lg:w-96">
            <h2
              class="text-4xl font-extrabold tracking-tight text-gray-900 "
            >
              {{ drinks.title }}
            </h2>
            <p class="mt-4 text-lg text-gray-900">
              {{ drinks.description }}
            </p>
          </div>
        </div>
        <div>
          <div class="relative z-0 h-full">
            <img
              :src="
                $options.filters.transformImage(
                  drinks.image.filename,
                  '1280x0',
                )
              "
              class="w-full shadow-xl  rounded-bl-xl rounded-br-xl lg:rounded-xl ring-1 ring-black ring-opacity-5 lg:w-auto"
              alt="Drinks"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="relative mt-36">
      <div class="flex flex-col lg:flex-row">
        <div class="order-2 lg:order-1">
          <div class="relative z-0 h-full">
            <img
              :src="
                $options.filters.transformImage(
                  bites.image.filename,
                  '1280x0',
                )
              "
              class="w-full shadow-xl  rounded-bl-xl rounded-br-xl lg:rounded-xl ring-1 ring-black ring-opacity-5 lg:w-auto"
              alt="Bites"
            />
          </div>
        </div>
        <div
          class="relative z-10 order-1 p-8 mx-auto shadow-lg  bg-opacity-90 bg-primary-stokerie rounded-tl-xl rounded-tr-xl lg:rounded-xl h-fit lg:-left-28 lg:-top-12 lg:order-2"
        >
          <div class="absolute -top-6 border-gray-50">
            <span
              class="flex items-center justify-center w-16 h-16 bg-white border rounded-md "
            >
              <svg
                class="w-10 h-10 text-primary-stokerie"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M15.71 4C16.54 4 17.33 4.22 18 4.66C19.14 5.4 19.84 6.53 20 7.84C20.11 9.13 19.66 10.4 18.75 11.31C18.05 12 17.16 12.44 16.18 12.54C14.27 12.74 12.59 13.5 11.34 14.77C11.13 14.97 10.9 15 10.77 15C10.65 15 10.42 14.97 10.21 14.77L9.22 13.78C9.04 13.6 9 13.39 9 13.25C9 13 9.11 12.78 9.32 12.57C10.53 11.35 11.27 9.73 11.45 7.87C11.58 6.54 12.29 5.4 13.45 4.65C14.11 4.22 14.89 4 15.71 4M15.71 2C14.54 2 13.37 2.32 12.36 2.97C10.6 4.1 9.63 5.86 9.46 7.68C9.33 9 8.83 10.23 7.91 11.15L7.88 11.18C6.72 12.34 6.72 14.11 7.81 15.19L8.8 16.18C9.35 16.73 10.06 17 10.77 17S12.2 16.73 12.75 16.18C13.72 15.21 15 14.68 16.39 14.53C17.76 14.38 19.1 13.78 20.16 12.73C22.93 9.96 22.57 5.26 19.09 3C18.08 2.33 16.9 2 15.71 2M6.26 19.86C6.53 20.42 6.44 21.1 5.97 21.56C5.39 22.15 4.44 22.15 3.85 21.56C3.58 21.29 3.44 20.94 3.42 20.58C3.06 20.56 2.71 20.42 2.44 20.15C1.85 19.56 1.85 18.61 2.44 18.03C2.9 17.57 3.59 17.47 4.14 17.74L6.62 15.31C6.76 15.5 6.92 15.72 7.1 15.9L8.09 16.89C8.3 17.09 8.5 17.26 8.76 17.41L6.26 19.86Z"
                />
              </svg>
            </span>
          </div>
          <div class="mt-6 lg:w-72">
            <h2
              class="text-4xl font-extrabold tracking-tight text-gray-900 "
            >
              {{ bites.title }}
            </h2>
            <p class="mt-4 text-lg text-gray-900">
              {{ bites.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DrinksAndBites',
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  computed: {
    drinks() {
      return this.blok.apero_features[0];
    },
    bites() {
      return this.blok.apero_features[1];
    },
  },
};
</script>
