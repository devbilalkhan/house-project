const plugin = require('tailwindcss/plugin')
module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	purge: ["./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {},
		},
	},
	variants: {

	},
	plugins: [
		plugin(function ({ addBase, config, addComponents, theme }) {
			const additionals = {
				'.a-link': {
					color: theme("colors.gray.400"),
					'&:hover': {
						color: theme("colors.gray.50"),

					}
				}
			}

			addComponents(additionals)
			addBase({
				'h1': { fontSize: config('theme.fontSize.3xl') },
				'h2': { fontSize: config('theme.fontSize.2xl') },
				'h3': { fontSize: config('theme.fontSize.xl') },
				'h4': { fontSize: config('theme.fontSize.lg') },
			})
		})

	],
};
