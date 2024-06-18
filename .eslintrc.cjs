require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
    '@vue/eslint-config-prettier',
  ],
  rules: {
    'prefer-const': 'warn',
    'no-unsafe-optional-chaining': 'warn',
    'no-debugger': 'warn',
    'no-console': 'off',
  },

  overrides: [
    {
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
        parser: {
          ts: require.resolve('@typescript-eslint/parser'),
          tsx: require.resolve('@typescript-eslint/parser'),

          // Leave the template parser unspecified, so that it could be determined by `<script lang="...">`
        },
        extraFileExtensions: ['.vue'],
        ecmaFeatures: {
          jsx: true,
        },
      },
      parser: require.resolve('vue-eslint-parser'),
      extends: [
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        'plugin:prettier/recommended',
        '@vue/eslint-config-prettier',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/strict',
        // '@vue/eslint-config-typescript',
        // '@vue/typescript/recommended',
      ],
      files: ['*.ts', '*.tsx', '*.ts.vue'],
      rules: {
        'no-debugger': 'warn',
        'no-console': 'off',
        // TS already checks for that, and Typescript-Eslint recommends to disable it
        // https://typescript-eslint.io/linting/troubleshooting#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
        'no-undef': 'off',
        // Note: you must disable the base rule as it can report incorrect errors
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-invalid-void-type': ['error', { allowAsThisParameter: true }],
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/unified-signatures': ['error', { ignoreDifferentlyNamedParameters: true }],
        '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
        '@typescript-eslint/restrict-plus-operands': 'warn',
        '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
        // this rule, if on, would require explicit return type on the `render` function
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unnecessary-condition': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',

        // The following rules are enabled in an `overrides` field in the
        // `@typescript-eslint/recommended` ruleset, only turned on for TypeScript source modules
        // <https://github.com/typescript-eslint/typescript-eslint/blob/cb2d44650d27d8b917e8ce19423245b834db29d2/packages/eslint-plugin/src/configs/eslint-recommended.ts#L27-L30>

        // But as ESLint cannot precisely target `<script lang="ts">` blocks and skip normal `<script>`s,
        // no TypeScript code in `.vue` files would be checked against these rules.

        // So we now enable them globally.
        // That would also check plain JavaScript files, which diverges a little from
        // the original intention of the `@typescript-eslint/recommended` rulset.
        // But it should be mostly fine.
        'no-var': 'error', // ts transpiles let/const to var, so no need for vars any more
        'prefer-const': 'error', // ts provides better types with const
        'prefer-rest-params': 'error', // ts provides better types with rest args over arguments
        'prefer-spread': 'error', // ts transpiles spread to apply, so no need for manual apply
      },
    },
    {
      files: ['*.vue'],
      rules: {
        'no-undef': 'off',
        'vue/no-v-html': 'off', // 关闭 禁止使用 v-html 来防止 XSS 攻击
        'vue/multi-word-component-names': 'off',
        'vue/v-on-event-hyphenation': [
          'warn',
          'always',
          {
            autofix: true,
          },
        ],
      },
    },
  ],
}
