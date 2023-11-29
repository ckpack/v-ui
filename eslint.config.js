import antfu from '@antfu/eslint-config';

export default await antfu({
  rules: {
    'no-console': 'off',
    'curly': ['error', 'multi-line'],
    'max-statements-per-line': 'off',
    'brace-style': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-v-text-v-html-on-component': 'off',
    'vue/no-reserved-component-names': 'off',
    'node/prefer-global/process': 'off',
    'import/no-duplicates': 'off',
    'unused-imports/no-unused-vars': 'off',
    'style/brace-style': ['error', '1tbs'],
    'style/semi': 'off',
    'ts/consistent-type-imports': ['off'],
    'ts/semi': ['error', 'always'],
  },
  ignores: ['./dist', './es'],
});
