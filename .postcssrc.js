// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {
      path: "src/css/"
    },
    "postcss-url": {},
    "postcss-cssnext": {},
    "postcss-pxtorem": {
      rootValue: 75,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 2
    }
  }
}
