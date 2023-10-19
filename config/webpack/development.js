process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

const config = {
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
    },
  },
};

environment.config.merge(config);

module.exports = environment.toWebpackConfig()
