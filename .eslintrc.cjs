module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true,
  },
  globals: {
    defineOptions: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-reserved-component-names': 0,
    'vue/multi-word-component-names': 0,
    'vue/require-default-prop': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 0,
    'import/first': 'off',
    'import/order': 0,
    'import/no-duplicates': 0,
    'no-param-reassign': 0,
    'max-len': 0,
  },
};
