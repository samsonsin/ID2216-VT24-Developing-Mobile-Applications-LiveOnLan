/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./App.{js,jsx,ts,tsx}",
		"./presenters/**/*.{js,jsx,ts,tsx}",
		"./views/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		colors: {
			primary: "#71bdff",
			secondary: "#00e676",
		},
		extend: {},
	},
	plugins: [],
};
