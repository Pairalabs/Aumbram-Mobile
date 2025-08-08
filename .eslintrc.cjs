module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:react/recommended', 'plugin:react-native/all'],
  plugins: ['react', 'react-native'],
  env: {
    'react-native/react-native': true,
    es6: true,
    node: true,
  },
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'error',
    'react/jsx-uses-react': 'off',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-unused-styles': 'error',
    'react-native/no-color-literals': 'warn',
    'react-native/split-platform-components': 'warn',
    'react/react-in-jsx-scope': 'off',
  },
};
