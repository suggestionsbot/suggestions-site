module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs'
  ],
  // add your custom rules here
  rules: {
    'vue/attributes-order': 'off',
    'vue/html-quotes': 'off',
    'vue/html-self-closing': 'off',
    'arrow-parens': 'off',
    semi: 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off'
  }
}
