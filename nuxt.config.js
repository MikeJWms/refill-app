export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'server',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'soap-fairy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~plugins/buefy.js',
    '~plugins/axios.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://github.com/WilliamDASILVA/nuxt-stripe-module#readme
    'nuxt-stripe-module'
  ],
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'http://localhost:3000'
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Stripe module configuration
  stripe: {
    publishableKey: 'pk_test_51HxIzTDS6BZsvjOePgODdoS6g1QYbMnjWvE34ojrUCIMOfY4a6yXVe9CFSs5fRjhej4stOftlJljR2y5K0ENNFEE00bcTjhTzF',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {

  },
  // environment variables
  env: {
  }
}
