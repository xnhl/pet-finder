
export default {
  mode: 'universal',
  loading: { color: '#fff' },
	generate: {routes: ['/']},
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv'
  ],
  styleResources: {
    sass: [
      './assets/*.sass'
    ],
  },
  build: {
    vendor: ['axios'],
    extend (config, ctx) {
    },
    build: {
      postcss: {
        plugins: {
          'postcss-url': false,
          'postcss-nested': {},
          'postcss-responsive-type': {},
          'postcss-hexrgba': {}
        },
        preset: {
          autoprefixer: {
            grid: true
          }
        }
      }
    }
  }
}
