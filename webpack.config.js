const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

module.exports = {
  mode: process.env.NODE_ENV.trim(),
  entry: [resolve(__dirname,'js/index.js'), resolve(__dirname, 'css/index.scss')],
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  //Modulos "extras"
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].css'
            }
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([ { from: 'img', to: 'img' } ]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'admin.html',
      template: 'admin.html',
      inject: true,
    }),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: ['index.css'],
      append: false
    })
  ],
};
