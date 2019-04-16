// common for dev and prod
// alias
const path = require('path')

const resolve = (_path) => path.resolve(__dirname, '../', _path)
const alias = [
  'component',
  'container',
  'hook',
  'util',
].reduce((obj, key) => {
  obj[key] = resolve(`src/${key}/`)
  return obj
}, {})

module.exports = {
  entry: {
    vendor: [
      // Required to support async/await
      '@babel/polyfill'
    ],
    main: [
      './client/src/index'
    ]
  },
  output: {
    path: resolve('dist/'),
    publicPath: '/dist/',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    browsers: [
                      'ie >= 10',
                      'last 2 versions',
                      '> 5%',
                      'not dead'
                    ]
                  },
                  'useBuiltIns': 'usage'
                }
              ],
              '@babel/preset-typescript',
              '@babel/preset-react',
            ],
            plugins: [
              // plugin-proposal-decorators is only needed if you're using experimental decorators in TypeScript
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              ['@babel/plugin-proposal-class-properties', { loose: true }],
              '@babel/plugin-syntax-dynamic-import',
              'react-hot-loader/babel',
            ]
          }
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  resolve: {
    alias: {
      ...alias,
      'loaders.min.css': resolve('../node_modules/loaders.css/loaders.min.css'),
      'mc': resolve('../node_modules/@material-ui/core/'),
      'mi': resolve('../node_modules/@material-ui/icons/'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
}