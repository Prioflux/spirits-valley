import getMetadata from './utils/metadata'

const meta = getMetadata()
const { NODE_ENV, BASE_URL, STORYBLOK_KEY } = process.env

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
    link: [
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/android-chrome-512x512.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com/', crossorigin: 'anonymous' },
    ],
    script: [
      {
        src: NODE_ENV === 'production' ? '/js/script.js' : 'https://plausible.io/js/plausible.js',
        defer: true,
        'data-domain': 'thespiritsvalley.com',
      }
    ]
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
    ],
    '@nuxtjs/sitemap'
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

  sitemap: {
    hostname: BASE_URL,
    gzip: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
