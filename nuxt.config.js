export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com'},
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'true'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Jura:wght@300;400;500;600;700&display=swap'}
    ]
    //<link rel="preconnect" href="https://fonts.googleapis.com">
    //<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    //<link href="https://fonts.googleapis.com/css2?family=Jura:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
  },
  target: 'server',
  serverMiddleware: ['~/server-middleware/express-server'],
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bootstrap/scss/bootstrap.scss',
    '~assets/sass/__variables.sass',
    '~assets/sass/__utility.sass',
    '@/assets/sass/nuxt-transitions',
    'primeflex/primeflex.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
    'primevue/nuxt'
  ],
  styleResources: {
    sass: ['./assets/sass/*.sass']
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babelrc: false,
    cacheDirectory: undefined,
    presets: ['@nuxt/babel-preset-app'],
    transpile: ['primevue'],
  },
}
