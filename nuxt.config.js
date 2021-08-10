import getMetadata from './utils/metadata'

const meta = getMetadata()
const { BASE_URL, STORYBLOK_KEY } = process.env

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'spirits-valley',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      ...meta,
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  publicRuntimeConfig: {
    baseUrl: BASE_URL,
    storyblokKey: STORYBLOK_KEY,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/lightbox', mode: 'client' },
    { src: '@/plugins/datepicker', mode: 'client' },
    { src: '@/plugins/toast', mode: 'client' },
    { src: '@/plugins/vuelidate' },
    { src: '@/plugins/imageService' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      'storyblok-nuxt',
      {
        accessToken: STORYBLOK_KEY,
        cacheProvider: 'memory',
      },
    ]
  ],

    googleFonts: {
    prefetch: true,
    preconnect: true,
    preload: true,
    display: 'swap',
    families: {
      'Crimson Pro': {
        wght: [400, 700],
      },
      'Satisfy': {
        wght: [400]
      }
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: BASE_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
