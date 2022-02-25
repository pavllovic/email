const HtmlWebpackPlagin = require('html-webpack-plugin');
const IgnoreEmitPlugin = require('ignore-emit-webpack-plugin');
const HtmlWebpackSkipAssetsPlugin = require('html-webpack-skip-assets-plugin').HtmlWebpackSkipAssetsPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

const ignoreEmitPlugin = new IgnoreEmitPlugin([
  /(index)\.style\.js$/, /(index)\.js$/
]);

const htmlWebpackSkipAssetsPlugin = new HtmlWebpackSkipAssetsPlugin({
  excludeAssets: [
    /(index)\.style\.js$/, /(index)\.js$/
  ]
});

const pages = [
  {name: 'index', chunks: []}
]

const htmlWebpackPlagin = pages.map((page) => {
  return new HtmlWebpackPlagin({
    filename: `${page.name}.html`,
    template: `./src/template/${page.name}.pug`,
    inject: 'body',
    chunks: page.chunks,
    minify: {
      collapseWhitespace: !isDev,
      collapseInlineTagWhitespace: !isDev,
      minifyCSS: !isDev,
      minifyJS: !isDev
    },
  })
})

const cleanWebpackPlugin = new CleanWebpackPlugin();


let webpackPluginsConfig = [
  ...htmlWebpackPlagin,
  ignoreEmitPlugin,
  htmlWebpackSkipAssetsPlugin,
  cleanWebpackPlugin 
]

module.exports = webpackPluginsConfig;