import getMetadata from './utils/metadata';

const meta = getMetadata();
const { BASE_URL, STORYBLOK_KEY, GOOGLE_ANALYTICS_ID } = process.env;

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
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      ...meta,
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/android-chrome-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        href: '/android-chrome-512x512.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com/',
        crossorigin: 'anonymous',
      },
      { rel: 'preconnect', href: '//img2.storyblok.com' },
    ],
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
    { src: '@/plugins/carousel', mode: 'client' },
    { src: '@/plugins/select', mode: 'client' },
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
    '@nuxtjs/google-analytics',
  ],

  googleAnalytics: {
    id: GOOGLE_ANALYTICS_ID,
  },

  googleFonts: {
    prefetch: true,
    preconnect: true,
    preload: true,
    display: 'swap',
    families: {
      Montserrat: {
        wght: [400, 700],
      },
      'Kaisei Opti': {
        wght: [400],
      },
    },
  },

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
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    'nuxt-lazy-load',
    ['nuxt-cookie-control', { controlButton: false }],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: BASE_URL,
  },

  i18n: {
    seo: true,
    baseUrl: BASE_URL,
    strategy: 'prefix_except_default',
    defaultLocale: 'nl',
    vueI18n: {
      fallbackLocale: 'nl',
    },
    detectBrowserLanguage: {
      useCookie: true,
      redirectOn: 'root',
      cookieCrossOrigin: true,
      alwaysRedirect: true,
    },
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
      },
      {
        code: 'nl',
        name: 'Nederlands',
        iso: 'nl-BE',
      },
      {
        code: 'fr',
        name: 'Français',
        iso: 'fr-FR',
      },
    ],
  },

  sitemap: {
    hostname: BASE_URL,
    gzip: true,
  },

  cookies: {
    locales: ['en', 'nl', 'fr'],
    controlButton: false,
    colors: {
      checkboxActiveBackground: '#22c55e',
      checkboxInactiveBackground: '#ef4444',
    },
    text: {
      barTitle: 'Cookies',
      locale: {
        en: {
          barDescription:
            'We use our own cookies and third-party cookies to improve your experience and better understand how you use our website, with a view to improving the services we offer. If you continue browsing, we consider that you have accepted the cookies.',
          acceptAll: 'Accept all',
          declineAll: 'Delete all',
          manageCookies: 'Manage cookies',
          unsaved: 'You have unsaved settings',
          close: 'Close',
          save: 'Save',
          necessary: 'Necessary cookies',
          optional: 'Optional cookies',
          functional: 'Functional cookies',
          blockedIframe:
            'To see this, please enable functional cookies',
          here: 'here',
        },
        nl: {
          barDescription:
            'We gebruiken onze eigen cookies en cookies van derden om uw ervaring te verbeteren en beter te begrijpen hoe u onze website gebruikt, met het oog op het verbeteren van de diensten die wij aanbieden. Als je doorgaat met browsen, gaan we ervan uit dat je de cookies hebt geaccepteerd.',
          acceptAll: 'Alles accepteren',
          declineAll: 'Alles verwijderen',
          manageCookies: 'Cookies beheren',
          unsaved: 'Je hebt niet opgeslagen gegevens',
          close: 'Sluiten',
          save: 'Opslaan',
          necessary: 'Noodzakelijke cookies',
          optional: 'Optionele cookies',
          functional: 'Functionele cookies',
          blockedIframe:
            'Gelieve functionele cookies te aanvaarden om dit te zien',
          here: 'hier',
        },
        fr: {
          barDescription:
            "Nous utilisons nos propres cookies et des cookies tiers pour améliorer votre expérience et mieux comprendre comment vous utilisez notre site Web, dans le but d'améliorer les services que nous proposons. Si vous continuez à naviguer, nous considérons que vous avez accepté les cookies.",
          acceptAll: 'Tout accepter',
          declineAll: 'Supprimer tout',
          manageCookies: 'Gérer les cookies',
          unsaved: 'Vous avez des paramètres non enregistrés',
          close: 'Fermer',
          save: 'Enregistrer',
          necessary: 'Cookies nécessaires',
          optional: 'Cookies facultatifs',
          functional: 'Cookies fonctionnels',
          blockedIframe:
            'Pour voir cela, veuillez activer les cookies fonctionnels',
          here: 'ici',
        },
      },
    },
    necessary: [
      {
        // if multilanguage
        name: {
          en: 'Default Cookies',
          nl: 'Standaard Cookies',
          fr: 'Cookies par défaut',
        },
        // if multilanguage
        description: {
          en: 'Used for cookie control.',
        },
        cookies: [
          'cookie_control_consent',
          'cookie_control_enabled_cookies',
        ],
      },
      {
        // if multilanguage
        name: {
          en: 'Language Cookies',
          nl: 'Taal Cookies',
          fr: 'Cookies de langue',
        },
        // if multilanguage
        description: {
          en: 'Used for language preferences.',
        },
        cookies: ['i18n_redirected'],
      },
    ],
    optional: [
      {
        name: 'Google Analytics',
        identifier: 'ga',
        // if multilanguage
        description: {
          en: 'Analytics to help us understand how users interact with our website',
          nl: 'Analytics om ons te helpen begrijpen hoe gebruikers omgaan met onze website',
          fr: 'Des analyses pour nous aider à comprendre comment les utilisateurs interagissent avec notre site Web',
        },

        initialState: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=<API-KEY>',
        async: true,
        cookies: ['_ga', '_gat', '_gid'],
        accepted: () => {
          window.$nuxt.$ga.enable();
          window.$nuxt.$ga.page(window.$nuxt.$route.path); // Track current route
        },
        declined: () => {
          window.$nuxt.$ga.disable();
          window.$nuxt.$cookies.remove('ga'); // Remove any existing Google Analytics cookies
        },
      },
    ],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
