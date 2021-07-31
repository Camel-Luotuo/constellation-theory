module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['taro/react', 'plugin:prettier/recommended'],
  plugins: ['@typescript-eslint', 'react-hooks'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
