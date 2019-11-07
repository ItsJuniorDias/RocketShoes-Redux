module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  extends: [
    'airbnb-base','prettier', 'prettier/react'
  ],
  plugins: ['prettier', 'react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures:{
      jsx:true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier" :"error",
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'],
      },
    ],


  },
};
