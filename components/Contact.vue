<template>
  <div v-editable="blok" class="relative bg-white">
    <div class="lg:absolute lg:inset-0">
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img class="hidden w-full object-cover lg:block lg:absolute lg:h-full" :src="$options.filters.transformImage(blok.image.filename, '0x720')" :alt="blok.image.alt">
      </div>
    </div>
    <div class="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
      <div class="lg:pr-8">
        <div class="max-w-md mx-auto sm:max-w-lg lg:mx-0">
          <h2 class="text-3xl font-handwriting font-bold tracking-tight sm:text-5xl">
            {{ blok.title }}
          </h2>
          <p class="mt-4 text-lg text-gray-500 sm:mt-3">
            {{ blok.description }}
          </p>
          <form action="#" method="POST" class="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">{{ blok.email_label }}</label>
              <div class="mt-1">
                <input id="email" name="email" type="email" autocomplete="email" class="input">
              </div>
            </div>
            <div>
              <div class="flex justify-between">
                <label for="phone" class="block text-sm font-medium text-gray-700">{{ blok.phone_label }}</label>
                <span id="phone-description" class="text-sm text-gray-500">{{ blok.optional }}</span>
              </div>
              <div class="mt-1">
                <input id="phone" type="text" name="phone" autocomplete="tel" aria-describedby="phone-description" class="input">
              </div>
            </div>
            <fieldset class="sm:col-span-2">
              <div class="mt-4 grid grid-cols-1 gap-y-4">
                <div class="flex items-center">
                  <div class="flex items-center h-5">
                    <input id="tour" v-model="tour" aria-describedby="tour" name="tour" type="checkbox" class="focus:ring-gray-500 h-4 w-4 text-gray-900 border-gray-300 rounded">
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="tour" class="block text-sm font-medium text-gray-700">{{ blok.tour_label }}</label>
                  </div>
                </div>
              </div>
            </fieldset>
            <div v-if="tour">
              <div>
                <div class="flex justify-between">
                  <label for="guests" class="block text-sm font-medium text-gray-700">{{ blok.guests_label }}</label>
                </div>
                <div class="mt-1">
                  <input id="guests" v-model="guests" type="number" min="1" step="1" name="guests" aria-describedby="guests-number" class="input">
                </div>
              </div>
            </div>
            <div v-if="tour && guests" class="self-center">
              <div>
                <label for="price" class="text-md font-bold text-gray-700">{{ blok.price_per_person_label }}:</label>
                <span>€ {{ blok.price_per_person }}</span>
              </div>
              <div>
                <label for="price" class="text-md font-bold text-gray-700">{{ blok.total_price_label }}:</label>
                <span>€ {{ guests*blok.price_per_person }}</span>
              </div>
            </div>
            <div class="sm:col-span-2">
              <div class="flex justify-between">
                <label for="how-can-we-help" class="block text-sm font-medium text-gray-700">{{ blok.message_label }}</label>
                <span id="how-can-we-help-description" class="text-sm text-gray-500"></span>
              </div>
              <div class="mt-1">
                <textarea id="how-can-we-help" name="how-can-we-help" aria-describedby="how-can-we-help-description" rows="4" class="input"></textarea>
              </div>
            </div>
            <div class="text-right sm:col-span-2">
              <button type="submit" class="btn-primary btn-primary-color">
                {{ blok.submit_button }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    tour: false,
    guests: null
  })
}
</script>