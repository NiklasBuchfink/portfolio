
const strapiBaseUri = process.env.API_URL || "http://localhost:1337";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  env: {
    strapiBaseUri,
    // strapiBaseUrl: process.env.API_URL || 'http://localhost:1337'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Niklas Buchfink - Designer & Engineer',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'author', content: 'Niklas Buchfink' },
      { name: 'description', content: 'Portfolio | Niklas Buchfink' },
      { name: 'keywords', content: 'Design, Engineering, Portfolio' },
      { name: 'robots', content: 'noindex'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/raster2.css',
    '~/assets/scss/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components/atoms',
    '~/components/molecules',
    '~/components/organisms',
  ],
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/emotion
    '@nuxtjs/emotion',
    // https://github.com/nuxt-community/apollo-module
    '@nuxtjs/apollo',
    // https://github.com/Developmint/nuxt-webfontloade
    'nuxt-webfontloader',
  ],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint:
          process.env.BACKEND_URL || 'http://localhost:1337/graphql',
      },
    },
  },

  styleResources: {
    scss: ['./assets/scss/variables/*.scss', './assets/scss/mixins/*.scss'],
  },

  webfontloader: {
    google: {
      families: ['IBM+Plex+Sans:100,400,500,600&display=swap'], // Loads IBM Plex Sans font
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    extend(config, ctx) {},
  },

  vue: {
    config: {
      ignoredElements: ['r-grid', 'r-cell'],
    }
  },
}
