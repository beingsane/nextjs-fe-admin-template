module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'standard'
  ],
  globals: {
    React: true,
    google: true,
    mount: true,
    mountWithRouter: true,
    shallow: true,
    shallowWithRouter: true,
    context: true,
    expect: true,
    jsdom: true,
    JSX: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    indent: [2, 2],
    semi: ['error', 'always'],
    'space-before-function-paren': 'off',
    'no-unused-expressions': 0,
    'no-new': 0,
    'import/order': ['error', { groups: ['external', 'builtin', 'sibling', 'parent', 'index']}],
    'no-prototype-builtins': 'off',
    'import/no-cycle': 'warn',
    'import/named': 'off',
    'import/prefer-default-export': 'off',
    'eol-last': ['error', 'never'],
    'no-plusplus': 'off',
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    'no-use-before-define': 'off',
    'no-restricted-syntax': 'off',
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-empty-interface': 'off',
    'no-underscore-dangle': 'off',
    'object-curly-spacing': ['error', 'always', { arraysInObjects: false }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'import/no-useless-path-segments': ['error', { commonjs: true }],
    'arrow-body-style': ['error', 'as-needed', {
      requireReturnForObjectLiteral: false
    }],
    'object-shorthand': ['error', 'always', {
      ignoreConstructors: false,
      avoidQuotes: true
    }],
    'prefer-destructuring': ['error', {
      VariableDeclarator: {
        array: false,
        object: true
      },
      AssignmentExpression: {
        array: true,
        object: false
      }
    }, {
      enforceForRenamedProperties: false
    }],
    'prefer-arrow-callback': ['error', {
      allowNamedFunctions: false,
      allowUnboundThis: true
    }]
  },
  settings: {
    react: {
      version: 'latest'
    }
  }
};