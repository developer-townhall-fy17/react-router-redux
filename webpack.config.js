const path = require('path')
const webpack = require('webpack')

const isDev = (process.env.NODE_ENV !== 'production')

// define webpack plugins
const plugins = [
  new webpack.HotModuleReplacementPlugin()
]

// define webpack entry points
const entry = [
  'webpack-dev-server/client?http://localhost:3000',
  'webpack/hot/only-dev-server',
  'react-hot-loader/patch',
  './app/app.js'
]

// export settings for webpack
module.exports = {
  // define the level of debug info in the code
  devtool: 'cheap-source-map',
  entry,
  plugins,
  // where will webpack save the build
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  // resolve path
  resolve: {
    root: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'vendor/js')
    ],
    fallback: path.join(__dirname, 'node_modules'),
  },
  // modules to be used by webpack
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: isDev ? "style-loader!css-loader?sourceMap" : "style-loader!css-loader"
    }]
  }
};
