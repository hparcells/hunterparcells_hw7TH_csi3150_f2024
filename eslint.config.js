import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'prettier': prettier,
    },
    rules: {
      "prettier/prettier": "error",
      "for-direction": "error",
      "getter-return": "error",
      "no-compare-neg-zero": "error",
      "no-cond-assign": "error",
      "no-console": "warn",
      "no-debugger": "warn",
      "no-dupe-args": "error",
      "no-dupe-else-if": "error",
      "no-dupe-keys": "error",
      "no-duplicate-case": "error",
      "no-empty": "error",
      "no-extra-boolean-cast": "error",
      "no-extra-semi": "error",
      "no-sparse-arrays": "error",
      "no-template-curly-in-string": "error",
      "no-unreachable": "error",
      "use-isnan": "error",
      "valid-typeof": "error",
      "array-callback-return": "error",
      "consistent-return": "error",
      "curly": ["error", "all"],
      "default-case": "error",
      "default-case-last": "error",
      "dot-location": ["error", "property"],
      "eqeqeq": ["error", "always"],
      "grouped-accessor-pairs": ["error", "getBeforeSet"],
      "no-alert": "warn",
      "no-else-return": ["error", { "allowElseIf": false }],
      "no-empty-function": ["error", { "allow": ["constructors"] }],
      "no-floating-decimal": "error",
      "no-labels": "error",
      "no-lone-blocks": "error",
      "no-loop-func": "error",
      "no-multi-spaces": "error",
      "no-multi-str": "error",
      "no-return-assign": "error",
      "no-self-compare": "error",
      "no-useless-concat": "error",
      "no-useless-escape": "error",
      "no-useless-return": "error",
      "yoda": "error",
      "no-use-before-define": "error",
      "arrow-body-style": ["error", "always"],
      "arrow-parens": "error",
      "arrow-spacing": ["error", { "before": true, "after": true }],
      "constructor-super": "error",
      "no-const-assign": "error",
      "no-dupe-class-members": "error",
      "no-duplicate-imports": "error",
      "no-this-before-super": "error",
      "no-var": "error",
      "prefer-const": "error",
      "prefer-template": "error"
    }
  },
)
