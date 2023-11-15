/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			keyframes: {
				showCards: {
					"0%": { transform: "scale(50%)", opacity: "0" },
					"100%": { transform: "scale(100%)", opacity: "1" },
				},
			},
			animation: {
				showCards: "showCards .5s linear",
			},
		},
	},
	plugins: [],
}
