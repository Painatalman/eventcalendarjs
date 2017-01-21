var path = require('path');

const webpack = require('webpack');
const postcssNested = require('postcss-nested');
const postcssSimpleVars = require('postcss-simple-vars');

module.exports = {
  entry:  path.resolve(__dirname, './src/app.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.js',
    libraryTarget: 'umd',
    library: 'eventcalendarjs',
    umdNamedDefine: true
  },
  devServer: {
    contentBase: "./demo",
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
        return [postcssNested, postcssSimpleVars];
    }
};
