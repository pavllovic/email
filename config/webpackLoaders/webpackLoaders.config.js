const path = require('path');
const isDev = process.env.NODE_ENV === 'development';

const pugLoader = {
  test: /\.pug$/,
  loader: 'pug3-loader',
  options: {
    pretty: isDev,
  }
}

const webpackLoadersConfig = [
  pugLoader,
]

module.exports = webpackLoadersConfig;