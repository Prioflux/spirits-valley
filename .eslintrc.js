module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'prettier'
  ],
  plugins: [
  ],
  rules: {
    'vue/no-template-shadow': 'off',
    'vue/no-v-html': 'off',
  },
  globals: {
    StoryblokBridge: 'readonly',
  },
}
