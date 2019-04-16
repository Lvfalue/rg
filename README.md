+ React
+ rxjs
+ react-router
+ reselect
+ Ts
+ graphql
+ express

### 按需加载 @babel/polyfill

```js
module.exports = {
  entry: {
    // 在页面中，通过单独的 `vendor.js` 引入 `polyfill` 
    vendor: ['@babel/polyfill']
    main: ...
  },
  module: {
    rules: [
      {
        test: ...
        use: {
          loader: 'babel-loader',
          options: {
            // `presets` 中 `@babel/preset-env` 开启 `useBuiltIns`
            // 根据配置的浏览器环境和业务中用到的特性进行按需打包
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
          }
        }
      }
    ]
  }
}
```

[TypeScript 2.8下的终极React组件模式](https://juejin.im/post/5b07caf16fb9a07aa83f2977)
[Webpack](https://webpack.docschina.org/concepts/)
[graphql](https://juejin.im/post/5a49e5ccf265da430d585cfd#heading-4)
[material-ui](https://material-ui.com)
[ts](https://www.tslang.cn/docs/handbook/typescript-in-5-minutes.html)
[ts-react](https://charleslbryant.gitbooks.io/hello-react-and-typescript/content/DefinePropsAndStateTypes.html)


# hackernews-async-ts

[Hacker News](https://news.ycombinator.com/) showcase using typescript && egg

## QuickStart

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
$ npm run tsc
$ npm start
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once

### Requirement

- Node.js 8.x
- Typescript 2.8+
