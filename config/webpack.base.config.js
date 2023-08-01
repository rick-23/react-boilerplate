const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack');
 
module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.js'),
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack bundled, Bable tanspiled React Project',
      template: path.resolve(__dirname, '..',  './src/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ESLintPlugin({extensions: ['js', 'jsx']})
  ],
  output: {
    path: path.resolve(__dirname, '..', './dist'),
    filename: 'bundle.js'
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, '..', './dist'),
    },
  },
};