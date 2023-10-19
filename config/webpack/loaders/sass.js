const globImporter = require('node-sass-glob-importer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isMochaTest = process.env.MOCHA_TEST === 'true';
const CssLoaders = isMochaTest ? ['css-loader'] : [MiniCssExtractPlugin.loader, 'css-loader'];
const dataVue = {
  additionalData: `
    @import './app/javascript/styles/frontend/element-ui-variables.scss';
    @import './app/javascript/styles/new-design/base/variables.scss';
    @import '~element-ui/packages/theme-chalk/src/mixins/mixins.scss';
    @import '~element-ui/packages/theme-chalk/src/mixins/utils.scss';
    @import '~include-media/dist/_include-media.scss';
  `,
};

module.exports = {
  test: /\.s[a|c]ss$/,
  use: [
    ...CssLoaders,
    {
      loader: 'postcss-loader',
      options: { sourceMap: true },
    },
    'resolve-url-loader',
    {
      loader: 'sass-loader',
      options: {
        sassOptions: {
          importer: globImporter(),
          quietDeps: true,
        },
        sourceMap: true,
        ...dataVue,
      },
    },
  ],
};
