<template>
  <section v-editable="blok" class="c-container">
    <div class="flex flex-wrap py-24 mx-auto">
      <div class="flex flex-wrap -m-1 md:-m-2">
        <div class="flex flex-wrap w-full md:w-1/2">
          <div class="w-1/2 p-1 md:p-2">
            <img
              v-if="images[0]"
              class="block object-cover object-center w-full h-full rounded-lg shadow-md "
              :src="
                $options.filters.transformImage(
                  images[0].image,
                  '501x301',
                )
              "
              :alt="images[0].alt"
            />
          </div>
          <div class="w-1/2 p-1 md:p-2">
            <img
              v-if="images[1]"
              class="block object-cover object-center w-full h-full rounded-lg shadow-md "
              :src="
                $options.filters.transformImage(
                  images[1].image,
                  '501x301',
                )
              "
              :alt="images[1].alt"
            />
          </div>
          <div class="w-full p-1 md:p-2">
            <img
              v-if="images[2]"
              class="block object-cover object-center w-full h-full rounded-lg shadow-md "
              :src="
                $options.filters.transformImage(
                  images[2].image,
                  '601x361',
                )
              "
              :alt="images[2].alt"
            />
          </div>
        </div>
        <div class="flex flex-wrap w-full md:w-1/2">
          <div class="w-full p-1 md:p-2">
            <img
              v-if="images[3]"
              class="block object-cover object-center w-full h-full rounded-lg shadow-md "
              :src="
                $options.filters.transformImage(
                  images[3].image,
                  '601x361',
                )
              "
              :alt="images[3].alt"
            />
          </div>
          <div class="w-1/2 p-1 md:p-2">
            <img
              v-if="images[4]"
              class="block object-cover object-center w-full h-full rounded-lg shadow-md "
              :src="
                $options.filters.transformImage(
                  images[4].image,
                  '501x301',
                )
              "
              :alt="images[4].alt"
            />
          </div>
          <div class="w-1/2 p-1 md:p-2">
            <img
              v-if="images[5]"
              class="block object-cover object-center w-full h-full rounded-lg shadow-md "
              :src="
                $options.filters.transformImage(
                  images[5].image,
                  '501x301',
                )
              "
              :alt="images[5].alt"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Gallery',
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  computed: {
    images() {
      return this.blok.images.map((item) => {
        return {
          image: item?.image?.filename,
          alt: item?.image?.alt,
          dimensions: item?.dimensions,
        };
      });
    },
  },
};
</script>
