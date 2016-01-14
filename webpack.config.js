var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack/hot/only-dev-server',
    './js/app.js'
  ],
  output: {
    path: __dirname + '/build',
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
        test: /\.css$/, 
        loader: 'style!css'
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
