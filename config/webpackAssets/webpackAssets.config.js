const imageAssets = {
  test: /\.(jpg|jpeg|png|svg|webp|ico)$/,
  type: 'asset/resource'
}

const fontAssets = {
  test: /\.(woff|woff2|ttf)$/,
  type: 'asset/resource'
}

const videoAssets = {
  test: /\.(mp4)$/,
  type: 'asset/resource'
}

const webpackAssetsConfig = [
  imageAssets,
  fontAssets,
  videoAssets
]

module.exports = webpackAssetsConfig;