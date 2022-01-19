<template>
<div v-editable="blok" class="relative h-screen">
  <div class="absolute inset-x-0 bottom-0 h-screen bg-gray-100"></div>
    <div class="mx-auto h-screen">
      <div class="relative h-screen sm:overflow-hidden">
        <div class="absolute inset-0">
          <img class="h-screen w-full object-cover" :src="$options.filters.transformImage(blok.bg_image.filename, '1280x0')" :alt="blok.bg_image.alt">
          <div class="absolute inset-0 bg-gray-500 mix-blend-multiply"></div>
        </div>
        <div class="relative h-screen px-4 py-32 sm:px-6 sm:py-24 lg:py-40 lg:px-8">
          <h1 class="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl font-handwriting">
            <span class="block text-white lg:w-1/2 mx-auto">{{ blok.baseline }}</span>
          </h1>
          <p class="mt-6 max-w-lg mx-auto text-center text-xl text-gray-200 sm:max-w-3xl font-handwriting">
            {{ blok.description }}
          </p>
        </div>
      </div>
    </div>
    <div class="absolute inset-x-0 bottom-0 z-10 px-4 py-9 sm:px-6 lg:px-8">
      <div class="text-white">
        <span class="scroll-icon"></span>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'Hero',
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
.scroll-text,
.scroll-icon {
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
