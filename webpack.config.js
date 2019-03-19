const path = require('path');

const config = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/index.js',
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src'
  },
  target: 'web',
  mode: 'development',
  module: {
    rules: [
      {test: /\.js$/, use: 'babel-loader'}
    ]
  }
};

module.exports = config;
