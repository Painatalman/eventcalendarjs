var path = require('path');
const webpack = require('webpack');
const postcssNested = require('postcss-nested');

module.exports = {
  entry:  path.resolve(__dirname, './demo.js'),
  output: {
    path: path.resolve(__dirname, './demo'),
    filename: 'demo.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  // devtool:'source-map',
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015'
          ]
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules!postcss-loader'
      }
    ]
  },
  postcss: function () {
        return [postcssNested];
    }
};
