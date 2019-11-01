module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-url": {},
    autoprefixer: {},
    "postcss-pxtorem": {
      rootValue: 91, //换算基数(根据html的字体大小）
      unitPrecision: 5, //计算后的最小精度值，默认保留5位
      propList: ["*"], //设置哪些属性可以px转换rem
      selectorBlackList: [], //过滤，给定哪些选择器不转换rem，保留px
      replace: true,
      mediaQuery: false, //Boolen类型，是否允许在媒体查询中转换px
      minPixelValue: 2
    }
  }
};
