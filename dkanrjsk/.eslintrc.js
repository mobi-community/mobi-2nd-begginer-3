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

	// 세부규칙
	rules: {
		"react/jsx-uses-vars": "error",
		"react/jsx-uses-react": "error",
		// "space-before-function-paren": [
		// 	"error",
		// 	{
		// 		anonymous: "ignore",
		// 		named: "never",
		// 		asyncArrow: "always",
		// 	},
		// ],
	},
}

/*
anonymous: "ignore": 익명 함수 표현식에 대한 네이밍을 무시하라는 설정입니다. 즉, 익명 함수에 대한 네이밍 규칙을 적용하지 않도록 지정한 것입니다.

named: "never": 명명된 함수 표현식에 대한 네이밍을 허용하지 않도록 지정한 것입니다. 함수 표현식은 변수에 할당되는 함수를 의미합니다. 이 설정은 명명된 함수를 허용하지 않으며, 항상 익명으로 정의해야 합니다.

asyncArrow: "always": 항상 async 화살표 함수에 대해 네이밍 규칙을 적용하라는 설정입니다. 즉, async 함수가 화살표 함수로 정의될 때 항상 네이밍 규칙을 적용하도록 지정한 것입니다.
*/
