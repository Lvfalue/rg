// dev
const path = require('path')
const baseConfig = require('./webpack.base')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const devPort = 9898;
module.exports = Object.assign({}, baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../public/'),
    port: devPort,
    publicPath: `http://localhost:${devPort}/dist/`,
    hotOnly: true,
    compress: true,
    // open: 'Google Chrome',
    historyApiFallback: true,
    proxy: {
      '/graphql': {
        target: 'http://127.0.0.1:7001',
      }
    }
  },
  plugins: [
    // react-hot-loader work instead, webpack.HotModuleReplacementPlugin not need
    // new webpack.HotModuleReplacementPlugin()
    new ForkTsCheckerWebpackPlugin({
      tsconfig: path.resolve(__dirname, '../tsconfig.json'),
    }),
  ]
})