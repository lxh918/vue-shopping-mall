module.exports =  ({ file }) => ({
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-aspect-ratio-mini": {},
    // "postcss-px-to-viewport": {
    //   viewportWidth: 375, // (Number) The width of the viewport.
    //   viewportHeight: 667, // (Number) The height of the viewport.
    //   unitPrecision: 4, // (Number) The decimal numbers to allow the REM units to grow to.
    //   viewportUnit: 'vw', // (String) Expected units.
    //   selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px.
    //   minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
    //   mediaQuery: false // (Boolean) Allow px to be converted in media queries.
    // },

    'postcss-pxtorem': file.dirname.indexOf('mand-mobile') < 0  ? {
      rootValue: 37.5,
      minPixelValue: 2,
      propList: ['*']
    }:{
      rootValue: 75,
      minPixelValue: 2,
      propWhiteList: []
    },

    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {}
  }
})
