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
          <dl class="mt-8 space-y-6">
            <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <dt><span class="sr-only">Company name and VAT number</span></dt>
                <dd class="text-base text-gray-500">
                  <div class="flex">
                    <HomeIcon
                      class="flex-shrink-0 w-6 h-6 text-gray-500"
                    />
                    <div class="ml-3 font-bold">{{ blok.name }}</div>
                  </div>
                  <div class="ml-9">{{ blok.vat_number }}</div>
                </dd>
              </div>
              <div>
                <dt><span class="sr-only">Address</span></dt>
                <dd class="text-base text-gray-500">
                  <div class="flex">
                    <LocationMarkerIcon
                      class="flex-shrink-0 w-6 h-6 text-gray-500"
                    />
                    <span class="ml-3">{{ blok.street }} {{ blok.number }}</span>
                  </div>
                  <div class="ml-9">{{ blok.postal_code }} {{ blok.city }}</div>
                  <div class="ml-9">{{ blok.country }}</div>
                </dd>
              </div>
              <div>
                <dd class="text-base text-gray-500 m-0"></dd>
                <dt><span class="sr-only">Phone number</span></dt>
                <dd class="flex text-base text-gray-500">
                  <PhoneIcon class="flex-shrink-0 w-6 h-6 text-gray-500" />
                  <span class="ml-3"><a :href="'tel:' + blok.phone" class="hover:underline" >{{ blok.phone }}</a></span>
                </dd>
              </div>
              <div>
                <dt><span class="sr-only">Email</span></dt>
                <dd class="flex text-base text-gray-500">
                  <MailIcon class="flex-shrink-0 w-6 h-6 text-gray-500" />
                  <span class="ml-3"><a :href="'mailto:' + blok.email" class="hover:underline" >{{ blok.email }}</a></span>
                </dd>
              </div>
            </div>
          </dl> 
          <hr class="my-5">
          <form
            class="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            @submit.prevent="sendMessage"
          >
            <div class="col-span-2 md:col-span-1">
              <label for="email" class="block text-sm font-medium text-gray-700">{{ blok.email_label }}</label>
              <div class="mt-1">
                <input
                  id="email"
                  v-model.trim="$v.form.email.$model"
                  name="email"
                  type="email"
                  autocomplete="email"
                  class="input"
                  :class="{ 'input-error': $v.form.email.$error }"
                >
              </div>
              <p
                v-if="$v.form.email.$error && !$v.form.email.required"
                class="text-error"
              >
                {{ blok.email_label }}
                {{ blok.required_error }}
              </p>
              <p
                v-if="$v.form.email.$error && !$v.form.email.email"
                class="text-error"
              >
                {{ blok.email_label }}
                {{ blok.invalid_error }}
              </p>
            </div>
            <div class="col-span-2 md:col-span-1">
              <div class="flex justify-between">
                <label for="phone" class="block text-sm font-medium text-gray-700">{{ blok.phone_label }}</label>
                <span id="phone-description" class="text-sm text-gray-500">{{ blok.optional }}</span>
              </div>
              <div class="mt-1">
                <input
                  id="phone"
                  v-model="form.phone"
                  type="text"
                  name="phone"
                  autocomplete="tel"
                  aria-describedby="phone-description"
                  class="input"
                >
              </div>
            </div>
            <div class="col-span-2">
              <div class="mt-4 grid grid-cols-1 gap-y-4">
                <div class="flex items-center">
                  <div class="flex items-center h-5">
                    <input
                      id="tour"
                      v-model="form.tour.bookTour"
                      aria-describedby="tour"
                      name="tour"
                      type="checkbox"
                      class="cursor-pointer focus:ring-gray-500 h-4 w-4 text-gray-900 border-gray-300 rounded">
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="tour" class="cursor-pointer block text-sm font-medium text-gray-700">{{ blok.tour_label }}</label>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="form.tour.bookTour" class="col-span-2">
              <label for="price" class="block text-sm font-medium text-gray-700">{{ blok.arrangement_label }}</label>
              <v-select
                v-model="$v.form.tour.arrangement.$model"
                class="custom-select"
                :class="{ 'select-error': $v.form.tour.arrangement.$error }"
                :options="blok.arrangements"
              ></v-select>
              <p
                v-if="$v.form.tour.arrangement.$error"
                class="text-error"
              >
                {{ blok.arrangement_label }}
                {{ blok.required_error }}
              </p>
            </div>
            <div v-if="form.tour.bookTour && $v.form.tour.arrangement.$model" class="col-span-2 md:col-span-1">
              <div class="flex justify-between">
                <label for="guests" class="block text-sm font-medium text-gray-700">{{ blok.guests_1_label }}</label>
              </div>
              <div class="mt-1">
                <input
                  id="guests"
                  v-model="$v.form.tour.guests_1.$model"
                  type="number"
                  min="1"
                  step="1"
                  name="guests"
                  aria-describedby="guests-number"
                  class="input"
                  :class="{ 'input-error': $v.form.tour.guests_1.$error }"
                >
                <p
                  v-if="$v.form.tour.guests_1.$error && !$v.form.tour.guests_1.$guestNumber"
                  class="text-error"
                >
                  {{ blok.guests_error }}
                </p>
              </div>
            </div>
            <div v-if="form.tour.bookTour && $v.form.tour.arrangement.$model" class="col-span-2 md:col-span-1">
              <div class="flex justify-between">
                <label for="guests" class="block text-sm font-medium text-gray-700">{{ blok.guests_2_label }}</label>
              </div>
              <div class="mt-1">
                <input
                  id="guests"
                  v-model="$v.form.tour.guests_2.$model"
                  type="number"
                  min="1"
                  step="1"
                  name="guests"
                  aria-describedby="guests-number"
                  class="input"
                  :class="{ 'input-error': $v.form.tour.guests_2.$error }"
                >
                <p
                  v-if="$v.form.tour.guests_2.$error && !$v.form.tour.guests_2.$guestNumber"
                  class="text-error"
                >
                  {{ blok.guests_error }}
                </p>
              </div>
            </div>
            <div v-if="form.tour.bookTour && $v.form.tour.arrangement.$model" class="col-span-2 md:col-span-1">
              <div class="mt-4">
                <div class="flex justify-between">
                  <label for="guests" class="block text-sm font-medium text-gray-700">{{ blok.guests_3_label }}</label>
                </div>
                <div class="mt-1">
                  <input
                    id="guests"
                    v-model="$v.form.tour.guests_3.$model"
                    type="number"
                    min="1"
                    step="1"
                    name="guests"
                    aria-describedby="guests-number"
                    class="input"
                    :class="{ 'input-error': $v.form.tour.guests_3.$error }"
                  >
                  <p
                    v-if="$v.form.tour.guests_3.$error && !$v.form.tour.guests_3.$guestNumber"
                    class="text-error"
                  >
                    {{ blok.guests_error }}
                  </p>
                </div>
              </div>
            </div>
            <div v-if="form.tour.bookTour && $v.form.tour.arrangement.$model" class="self-end col-span-2 md:col-span-1">
              <div>
                <label for="price" class="text-md font-bold text-gray-700">{{ blok.number_of_people_label }}:</label>
                <span>{{ totalGuests }}</span>
              </div>
              <div>
                <label for="price" class="text-md font-bold text-gray-700">{{ blok.total_price_label }}:</label>
                <span>€ {{ totalPrice }}</span>
              </div>
            </div>
            <div v-if="form.tour.bookTour && $v.form.tour.arrangement.$model" class="col-span-2">
              <v-date-picker
                v-model="$v.form.tour.date.$model"
                locale="nl"
                :min-date="new Date()"
                :disabled-dates='{ weekdays: [1, 4, 7] }'
                :input-debounce="500"
                :model-config="modelConfig"
              >
                <template #default="{ inputValue, togglePopover, inputEvents }">
                  <div>
                    <label for="date" class="block text-sm font-medium text-gray-700 w-full">{{ blok.date_label }}</label>
                    <div class="mt-1">
                      <input 
                        id="date"
                        :value="inputValue"
                        class="input"
                        name="date"
                        type="text"
                        autocomplete="date"
                        :class="{ 'input-error': $v.form.tour.date.$error }"
                        v-on="inputEvents"
                        @focus.prevent="togglePopover()"
                      >
                    </div>
                    <p
                      v-if="$v.form.tour.date.$error"
                      class="text-error"
                    >
                      {{ blok.date_label }}
                      {{ blok.required_error }}
                    </p>
                    <p class="mt-2 text-sm text-gray-500">{{ blok.date_info }}</p>
                  </div>
                </template>
              </v-date-picker>
            </div>
            <div class="sm:col-span-2">
              <div class="flex justify-between">
                <label
                  for="message"
                  class="block text-sm font-medium text-gray-700"
                >{{ blok.message_label }}</label>
              </div>
              <div class="mt-1">
                <textarea
                  id="message"
                  v-model="$v.form.message.$model"
                  name="message"
                  aria-describedby="message-description"
                  rows="4"
                  class="input"
                  :class="{ 'input-error': $v.form.message.$error }"
                ></textarea>
              </div>
              <p
                v-if="$v.form.message.$error && !$v.form.message.required"
                class="text-error"
              >
                {{ blok.message_label }}
                {{ blok.required_error }}
              </p>
            </div>
            <div class="text-right col-span-2">
              <button
                type="submit"
                class="btn-primary btn-primary-color"
                :disabled="loading"
                :class="{
                  'btn-disabled': loading,
                  'btn-primary btn-focus': !loading,
                }"
              >
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
import {
  HomeIcon,
  LocationMarkerIcon,
  PhoneIcon,
  MailIcon,
} from '@vue-hero-icons/outline'
import { required, email, requiredIf, helpers } from 'vuelidate/lib/validators'
const validGuestNumber = (param) => (value) => !helpers.req(value) || (param >= 10 && param <= 25)

export default {
  name: "Contact",
  components: {
    HomeIcon,
    LocationMarkerIcon,
    PhoneIcon,
    MailIcon,
  },
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    loading: false,
    form: {
      email: null,
      phone: null,
      message: null,
      tour: {
        bookTour: false,
        arrangement: null,
        guests_1: null,
        guests_2: null,
        guests_3: null,
        date: null,
      },
    },
    modelConfig: {
      type: 'string',
      mask: 'YYYY-MM-DD', // Uses 'iso' if missing
    },
  }),
  validations() {
    return {
      form: {
        email: {
          required,
          email,
        },
        message: {
          required: requiredIf(function(value){
            const messageRequired = !value.tour.bookTour
            return messageRequired
          })
        },
        tour: {
          arrangement: {
            required: requiredIf(function(value){
              return value.bookTour
            })
          },
          guests_1: {
            guestNumber: validGuestNumber(this.totalGuests)
          },
          guests_2: {
            guestNumber: validGuestNumber(this.totalGuests)
          },
          guests_3: {
            guestNumber: validGuestNumber(this.totalGuests)
          },
          date: {
            required: requiredIf(function(value){
              return value.bookTour
            })
          }
        }
      },
    }
  },
  computed: {
    totalGuests() {
      let totalGuests = 0

      if(this.form.tour.bookTour) {
        totalGuests = this.createInt(this.form.tour.guests_1) + this.createInt(this.form.tour.guests_2) + this.createInt(this.form.tour.guests_3)
      }

      return totalGuests
    },
    totalPrice() { 
      let totalPrice = 0

      if(this.form.tour.bookTour) {
        totalPrice = (this.createInt(this.form.tour.guests_1)*this.arrangementPrices.under12)
                    +(this.createInt(this.form.tour.guests_2)*this.arrangementPrices.under18)
                    +(this.createInt(this.form.tour.guests_3)*this.arrangementPrices.plus18)
      }

      return Math.max(totalPrice,0).toLocaleString('nl')
    },
    arrangementPrices() {
      const arrangement = this.$v.form.tour.arrangement.$model
      const prices = arrangement ? {
        under12: arrangement.price_per_person_under_12,
        under18: arrangement.price_per_person_under_18,
        plus18: arrangement.price_per_person_18_plus
      } : null

      return prices
    }
  },
  methods: {
    sendMessage() {
      this.$v.$touch()

      const invalid = this.$v.$invalid

      if (!invalid) {
        this.loading = true
        this.$axios
          .$post('/.netlify/functions/contact-mail', {
            email: this.form.email,
            phone: this.form.phone,
            message: this.form.message,
            bookTour: this.form.tour.bookTour,
            tour: {
              guests: this.form.tour.guests,
              date: this.form.tour.date
            }
          })
          .then(() => {
            this.$v.$reset()
            this.form = {
              email: '',
              phone: '',
              company: '',
              message: '',
              tour: {
                bookTour: false,
                guests: '',
                date: ''
              } 
            }
            this.$toasted.show(this.blok.success_message, { type: 'success' })
            this.loading = false
          })
          .catch((error) => {
            this.$toasted.show(
              `
            ${this.blok.error_message}
            ${error}
            `,
              {
                type: 'error',
              }
            )
            this.loading = false
          })
      }
    },
    createInt(value) {
      const number = !value || isNaN(value) ? 0 : parseInt(value)
      return number
    }
  }
}
</script>