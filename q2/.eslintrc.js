//.eslintrc.js
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaFeatures: {
      modules: true,
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-uses-vars": "error",
    "react/jsx-uses-react": "error", // 리액트 기본 문법을 쓰도록 설정
    "space-before-function-paren": [
      "error",
      {
        anonymous: "ignore",
        named: "never",
        asyncArrow: "always",
      },
    ],
  },
};
