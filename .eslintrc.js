module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:i18next/recommended',
    'prettier',
    'standard-with-typescript',
    'eslint:recommended',
    'plugin:storybook/recommended'
  ],
  overrides: [
    {
      files: ['global.d.ts'],
      rules: {
        'no-undef': 'off'
      }
    }
  ],
  ignorePatterns: ['**/*.css', '**/*.scss'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks', 'prettier', '@typescript-eslint', 'i18next'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': 'warn',
    indent: [2, 2],
    'react/jsx-indent': [2, 2],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    ],
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    // 'import/extensions': ['error', 'ignorePackages', { ts: 'never', tsx: 'never' }],
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'comma-dangle': ['error', 'only-multiline'],
    '@typescript-eslint/comma-dangle': ['error', 'only-multiline'],
    semi: [
      'error',
      'always',
      {
        omitLastInOneLineBlock: true
      }
    ],
    // 'no-extra-semi': 'error',
    // semi: ['error', 'never'],
    '@typescript-eslint/semi': 'off',
    'no-unexpected-multiline': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false
        },
        multilineDetection: 'brackets'
      }
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allowDouble',
        trailingUnderscore: 'allowDouble'
      }
    ],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-misused-promises': [
      2,
      {
        checksVoidReturn: {
          attributes: false
        }
      }
    ],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/prefer-ts-expect-error': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    'i18next/no-literal-string': [
      1,
      {
        markupOnly: true,
        ignoreAttribute: ['data-testid', 'to']
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
    // 'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    // 'import/parsers': {
    //   '@typescript-eslint/parser': ['.ts', '.tsx'],
    // },
    // 'import/resolver': {
    //   typescript: { alwaysTryTypes: true },
    // },
  },

  globals: {
    __IS_DEV__: true
  }
};
