const COLORS = {
	purple: {
		300: "#6565F4",
		500: "#5252f7",
		700: "#2F2FC5",
	},
	white: "#FFFFFF",
	black: "#0F0F0F",
	error: "#ED2939",
	gray: {
		100: "#EBECF0",
		300: "#BABEBC",
	},
}

const FONT_SIZE = {
	small: "12px",
	medium: "28px",
	large: "38px",
}

const FONT_WEIGHT = {
	thin: 300,
	regular: 500,
	bold: 700,
}

const BOX_SHADOW = {
	container: "-5px -5px 10px #fff, 5px 5px 10px #babebc",
	drop: "-5px -5px 10px #fff, 5px 5px 8px #babebc",
	inner: "inset 5px 5px 10px #babebc, inset -5px -5px 10px #fff",
	dropPurple: "-5px -5px 10px #6565F4, 5px 5px 8px #2F2FC5",
	innerPurple: "inset 5px 5px 10px #2F2FC5, inset -5px -5px 10px #6565F4",
}

const theme = {
	COLORS,
	FONT_SIZE,
	FONT_WEIGHT,
	BOX_SHADOW,
}
export default theme
