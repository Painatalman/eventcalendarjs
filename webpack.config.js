var path = require('path');
const webpack = require('webpack');
const postcssNested = require('postcss-nested');

module.exports = {
  entry: path.resolve(__dirname, './scripts/app.babel.js'),
  output: {
    path: path.resolve(__dirname),
    filename: 'app.js'
  },
  externals: {
    // jQuery: 'jQuery',
    // foundation: 'Foundation'
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin()
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
        loader: 'style-loader!css-loader!postcss-loader'
      }
    ]
  },
  postcss: function () {
        return [postcssNested];
    }
};
