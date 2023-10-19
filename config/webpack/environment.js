const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')
const customResolvers = require('./resolvers');
const vueLoader = require('./loaders/vue');
const sassLoader = require('./loaders/sass');

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.append('vue', vueLoader);
environment.loaders.insert('sass', sassLoader);

environment.config.merge(customResolvers);

environment.plugins.append(
  'Provide',
  new webpack.ProvidePlugin({
    MiniCssExtractPlugin,
  }),
);

module.exports = environment
