//.prettierrc.cjs
module.exports = {
  printWidth: 80, //一行的字符数，如果超过会进行换行，默认为80
  singleAttributePerLine: false, //每行强制换行，只能使用单个属性
  tabWidth: 2, // 一个 tab 代表几个空格数，默认为 2 个
  useTabs: false, //是否使用 tab 进行缩进，默认为false，表示用空格进行缩减
  singleQuote: true, // 字符串是否使用单引号，默认为 false，使用双引号
  semi: false, // 行尾是否添加分号，默认为true
  trailingComma: 'none', //行使用逗号分隔 可选值: es5 none all
  bracketSpacing: true, // 对象大括号直接是否有空格，默认为 true，效果：{ a: 1 }
  endOfLine: 'auto', // 文本文件中的行结束方式 可选值: lf crlf cr auto
  jsxBracketSameLine: false, // 在jsx中把'>' 是否单独放一行
  vueIndentScriptAndStyle: false, // <script>Vue 文件中的代码和标签是否缩进<style>。
  arrowParens: "always", // 箭头函数的括号
}
