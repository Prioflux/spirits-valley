<template>
  <div class="relative py-16 bg-white">
    <div
      class="absolute inset-x-0 top-0 hidden bg-gray-100  h-1/2 lg:block"
      aria-hidden="true"
    ></div>
    <div
      class="mx-auto bg-gray-900 max-w-7xl lg:bg-transparent lg:px-8"
    >
      <div class="lg:grid lg:grid-cols-12">
        <div
          class="relative z-10  lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent"
        >
          <div
            class="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden"
            aria-hidden="true"
          ></div>
          <div
            class="max-w-md px-4 mx-auto  sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0"
          >
            <div
              class=" aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1"
            >
              <img
                class="object-cover object-center shadow-2xl  rounded-3xl"
                :src="
                  $options.filters.transformImage(
                    blok.image.filename,
                    '500x0',
                  )
                "
                :alt="blok.image.alt"
              />
            </div>
          </div>
        </div>

        <div
          class="relative bg-gray-900  lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center"
        >
          <div
            class="relative max-w-md px-4 py-12 mx-auto space-y-6  sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6"
          >
            <h2
              class="text-5xl font-extrabold text-white  font-handwriting"
            >
              {{ blok.title }}
            </h2>
            <p class="text-lg text-white">{{ blok.description }}</p>
            <nuxt-link
              :to="localePath('contact')"
              class="block w-full px-5 py-3 text-center text-gray-900 bg-white  btn hover:bg-gray-50 sm:inline-block sm:w-auto"
              href="#"
            >
              {{ blok.button }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AperoContact',
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>
