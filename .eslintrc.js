module.exports = {
  extends: [
    'eslint-config-alloy',
  ],
  globals: {
    // 这里填入你的项目需要的全局变量
    // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
    //
    // jQuery: false,
    // $: false
  },
  "rules": {
    "indent": [
      "warn",
      2,
      {
        "SwitchCase": 1,
        "flatTernaryExpressions": true
      }
    ],
    "semi": [
      "error",
      "never"
    ],
    "no-unused-vars": [
      "warn",
      {
        "vars": "all",
        "args": "none",
        "caughtErrors": "none"
      }
    ],
    "one-var": [
      "off"
    ]
  }
};