export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Niklas Buchfink - Designer & Engineer',
    htmlAttrs: {
      lang: 'en',
      amp: true,
    },

    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        name: 'author',
        content: 'Niklas Buchfink',
      },
      {
        hid: 'description',
        name: 'description',
        content: `I am an interaction designer and electrical engineer with expertise in high fidelity prototyping and web development.`,
      },
      // Control the behavior of search engine crawling and indexing
      // All Search Engines
      {
        name: 'robots',
        content: 'index,follow',
      },
      // Google Specific
      {
        name: 'googlebot',
        content: 'index,follow',
      },
      // Tells Google not to show the sitelinks search box
      {
        name: 'google',
        content: 'nositelinkssearchbox',
      },
      // Tells Google not to provide a translation for this document
      {
        name: 'google',
        content: 'notranslate',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.png',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/raster2.css', '~/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // https://github.com/vanderb/vue-tilt.js
    '~/plugins/vue-tilt.client.js',
    // https://github.com/BiYuqi/vue-intersection-observer
    '~/plugins/vue-intersection-observer.client.js',
    // https://github.com/freearhey/vue2-filters
    '~/plugins/vue2-filters.js',
    // https://github.com/vercel/analytics
    '~/plugins/vercel.client.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: ['~/components/atoms', '~/components/molecules'],
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // https://github.com/Gomah/nuxt-graphql-request
    'nuxt-graphql-request',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/emotion
    '@nuxtjs/emotion',
    // https://github.com/Developmint/nuxt-webfontloader
    'nuxt-webfontloader',
    // https://github.com/nuxt-community/markdownit-module
    '@nuxtjs/markdownit',
    // https://gitlab.com/broj42/nuxt-lazy-load
    'nuxt-lazy-load',
  ],

  graphql: {
    clients: {
      default: {
        options: {},
      },
    },
  },

  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
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
    },
  },

  static: {
    prefix: false,
  },
}
