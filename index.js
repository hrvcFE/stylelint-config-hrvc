module.exports = {
  "extends": "stylelint-config-recommended",
  "rules":{
    /**
     * 类名不允许出现大写
     */
    "selector-class-pattern": [
      "^[a-z]+[a-z\\d-_]*$", {
        "message": "类名不允许出现大写",
      }
    ],
    /**
     * 缩进2空格
     */
    "indentation": 2,
    /**
     * 禁止使用无效的十六进制颜色
     */
    "color-no-invalid-hex": true,
    /**
     * 禁止使用重复的字体名称
     */
    "font-family-no-duplicate-names": true,
    /**
     * 要求或禁止在 url 中使用 data URI
     */
    "function-url-data-uris": true,
    /**
     * 长度为0时，禁止使用单位
     */
    "length-zero-no-unit": true,
    /**
     * 禁止使用未知单位
     */
    "unit-no-unknown": true,
    /**
     * 禁止给值添加浏览器引擎前缀
     * @reason postcss会帮你添加
     */
    "value-no-vendor-prefix": true,
    /**
     * 相邻空最多一行
     */
    "max-empty-lines": 1,
    /**
     * 单行最大长度
     */
    "max-line-length": 50,
    /**
     * 禁止空注释
     */
    "comment-no-empty": true,
    /**
     * 允许最大嵌套五层
     */
    "max-nesting-depth": 5,
    /**
     * 禁止出现重复的选择器
     */
    "no-duplicate-selectors": true,
    /**
     * 禁用不支持的注释格式
     */
    "no-invalid-double-slash-comments": true
  }
}
