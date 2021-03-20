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
			colors: {
				'pink-dark': "bf035b"
			},
		},
	},
	variants: {
	},
	plugins: [
		plugin(function ({ addBase, config, addComponents, theme }) {
			const additionals = {
				'.a-link': {
					color: theme("colors.pink.600"),
					'&:hover': {
						color: theme("colors.black"),
					},
					'.dark &': {
						color: theme("colors.pink.500"),
						'&:hover': {
							color: theme("colors.gray.50"),
						},
					}
				},
			
				'.input': {
					color: theme("colors.black"),
					borderWidth: "1px",
					borderRadius: "0.25rem",
					width: "100%",
					padding: "0.5rem 0.75rem",
					appearance: "none"
				}
			}

			addComponents(additionals)
			addBase({
				'h1': { fontSize: config('theme.fontSize.4xl') },
				'h2': { fontSize: config('theme.fontSize.3xl') },
				'h3': { fontSize: config('theme.fontSize.2xl') },
				'h4': { fontSize: config('theme.fontSize.xl') },
				'h5': { fontSize: config('theme.fontSize.lg') },
			})
		})

	],
};
