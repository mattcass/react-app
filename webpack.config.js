const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path');

const PATHS = {
    src: path.join(__dirname, 'app'),
    dist: path.join(__dirname, 'build')
};

module.exports = {
  entry: [
    'webpack/hot/only-dev-server',
    PATHS.src
  ],
  output: {
    path: PATHS.dist,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel?presets[]=react,presets[]=es2015'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('style.css', {
            allChunks: true
        })
  ]
};
