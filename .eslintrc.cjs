module.exports = {
  extends: [
    '@antfu',
  ],
  rules: {
    'no-console': 0,
    'curly': ['error', 'all'],
    'max-statements-per-line': ['error', { max: 2 }],
    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    'vue/no-reserved-component-names': 0,
    'antfu/no-cjs-exports': 0,
    'antfu/no-ts-export-equal': 0,
  },
};
