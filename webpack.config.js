const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    city: './src/js/city.js'
  },

  output: {
    filename: 'js/[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: '/html/city.html',
      template: './src/html/city.html',
      chunks: ['city'],
      publicPath: '../'
    })
  ],

  devServer: {
    contentBase: './dist',
    port: 8080,
    hot: true
  }
}
