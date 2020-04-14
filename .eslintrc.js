module.exports = {
  root: true,

  env: {
    browser: true,
    node: true
  },

  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true,
      jsx: true
    }
  },

  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks'
  ],

  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'eslint:recommended'
  ],

  rules: {
    // prettier
    'prettier/prettier': 'off',

    // javascript
    'no-undef': 'off',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-unused-vars': 'warn',
    'no-whitespace-before-property': 'error',
    'camelcase': 'off',
    'no-useless-catch': 'off',
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'array-element-newline': ['error', 'consistent'],
    'object-curly-spacing': ['error', 'always'],
    'template-curly-spacing': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-before-function-paren': ['error', 'always'],
    'jsx-quotes': ['error', 'prefer-double'],
    'indent': ['error', 2, {
      'SwitchCase': 1
    }],

    // typescript
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-unused-vars': ['warn', {
      'vars': 'all',
      'args': 'after-used',
      'ignoreRestSiblings': false
    }],

    '@typescript-eslint/no-use-before-define': ['error', {
      'functions': false,
      'variables': false
    }],

    '@typescript-eslint/member-delimiter-style': ['error', {
      'multiline': {
        'delimiter': 'comma',
        'requireLast': false
      },

      'singleline': {
        'delimiter': 'comma',
        'requireLast': false
      },

      'overrides': {
        'interface': {
          'multiline': {
            'delimiter': 'comma',
            'requireLast': false
          }
        }
      }
    }],

    '@typescript-eslint/type-annotation-spacing': ['error', {
      'before': false,
      'after': true,
      overrides: {
        arrow: {
          before: true,
          after: true
        }
      }
    }],

    // react
    'react/prop-types': 'off',
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-fragments': ['error', 'element'],

    'react/jsx-tag-spacing': ['error', {
      'beforeSelfClosing': 'always'
    }],

    'react/jsx-max-props-per-line': ['error', {
      'maximum': 1
    }],

    'react/jsx-curly-spacing': ['error', {
      'when': 'never',
      'children': {
        'when': 'never'
      }
    }],

    'react/self-closing-comp': ['error', {
      'component': true,
      'html': true
    }],

    // react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  }
}
