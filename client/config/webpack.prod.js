// prod
const path = require('path')
const baseConfig = require('./webpack.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = Object.assign({}, baseConfig, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../dist/'),
    publicPath: '../dist/',
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '反清复明',
      template: path.resolve(__dirname, '../public/index.html'),
    }),
    new BundleAnalyzerPlugin({
      analyzerPort:2020,
      analyzerMode:'static',
      reportFilename:'webpack_report.html',
      openAnalyzer:false,
    })
  ]
})