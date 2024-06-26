/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
	content: ['./**/*.{html,js}'],
	theme: {
		screens: {
			xs: '480px', // phones
			md: '790px', // tables
			xxl: '1400px', // laptops
			'3xl': '1560px', // laptops
			...defaultTheme.screens,
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '20px',
				sm: '15px',
				xl: '20px',
				'2xl': '0',
			},
			screens: {
				'2xl': '1300px',
			},
		},
		fontFamily: {
			betaSansReg: ['BetaSans-Normal', ...defaultTheme.fontFamily.sans],
			jonathanReg: ['"Jonathan Regular"', ...defaultTheme.fontFamily.sans],
			raleway: ['Raleway', ...defaultTheme.fontFamily.sans],
			sans: defaultTheme.fontFamily.sans,
		},
		colors: {
			white: colors.white,
			black: colors.black,
			primary: {
				400: '#c9ab81',
				500: '#A78963',
			},
			green: {
				500: '#54595F',
				900: '#0B1315',
			},
		},
		extend: {
			fontSize: {
				sm: ['0.875rem', '1.4rem'],
				m: ['0.9375rem', '1.125rem'], // 15px 18px
				// '2.5xl': ['1.75rem', '1.75rem'], // 28px 28px
				'5.5xl': ['3.25rem', '5rem'], // 52px 80px
				'6xl': ['3.875rem', '2.25rem'], // 62px 36px
			},
			letterSpacing: {
				2: '2px',
				2.4: '2.4px',
				6: '6px',
			},
			spacing: {
				4.5: '1.125rem', // 18px
				7.5: '1.875rem', // 18px
				12.5: '3.125rem', // 50px
				14.5: '3.75rem', // 60px
				// 13: '3.25rem', // 52px
				// 15.5: '3.875rem', // 62px
				// 16.5: '4.25rem', // 68px
				// 17: '4.5rem', // 72px
				// 22: '5.625rem', // 90px
				24.5: '100px', // 100px
				// 25: '105px', // 105px
				// 30: '7.5625rem', // 121px
				// 34: '8.5rem', // 136px
				190: '50rem', // 800px
				200: '56.25rem', // 900px
			},
		},
	},
	plugins: [
		require('tailwindcss'),
		require('autoprefixer'),
		plugin(function ({ addComponents, addBase, theme }) {
			addComponents({
				'.btn': {
					cursor: 'pointer',
					height: '3rem', // 48px
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					fontSize: '0.875rem', // 14px
					fontWeight: 300,
					lineHeight: '2em',
					padding: '0 2.4375rem',
					color: theme('colors.primary[500]'),
					fontFamily: theme('fontFamily.betaSansReg'),
					gap: '0.5rem',
					position: 'relative',
					transition: 'all ease .2s',
					position: 'relative',
					overflow: 'hidden',
					'&:hover:after, &:hover:before': {
						transform: 'rotate(72deg) scale(1, 1)',
					},
					'&:after': {
						content: '""',
						width: '1px',
						background: theme('colors.primary[500]'),
						transformOrigin: 'top',
						height: '50.5px',
						top: '-2px',
						left: '45.5px',
						position: 'absolute',
						transform: 'rotate(72deg) scale(1, 0)',
						transition: 'all ease .5s',
					},
					'&:before': {
						content: '""',
						width: '1px',
						background: theme('colors.primary[500]'),
						transformOrigin: 'bottom',
						height: '50.5px',
						bottom: '-2px',
						right: '45.5px',
						position: 'absolute',
						transform: 'rotate(72deg) scale(1, 0)',
						transition: 'all ease .5s',
					},
					'@media not all and (min-width: 480px)': {
						fontSize: '16px',
						lineHeight: '20px',
					},
				},
				'.btn-outline': {
					border: `1px solid ${theme('colors.primary[500]')}`,
					color: theme('colors.white'),
					'&:hover': {},
				},
			}),
				addBase({
					// h1: {
					// 	fontFamily: theme('fontFamily.robotoSerif'),
					// 	fontSize: '4.5rem',
					// 	fontWeight: 700,
					// 	lineHeight: '7.2rem',
					// 	letterSpacing: 'normal',
					// 	textAlign: 'center',
					// 	color: theme('colors.white'),
					// 	'@media not all and (min-width: 960px)': {
					// 		fontSize: '3.5rem',
					// 		lineHeight: '4.2rem',
					// 		marginBottom: '20px',
					// 	},
					// 	'@media not all and (min-width: 480px)': {
					// 		fontSize: '2.25rem',
					// 		lineHeight: '2.6437rem',
					// 	},
					// },
					h2: {
						fontFamily: theme('fontFamily.betaSansReg'),
						fontSize: '44px',
						fontStyle: 'normal',
						fontWeight: '500',
						lineHeight: '1.31em',
						letterSpacing: 'normal',
						textAlign: 'center',
						color: theme('colors.primary[400]'),
						'@media not all and (min-width: 960px)': {
							fontSize: '36px',
							lineHeight: '46px',
							marginBottom: '20px',
						},
						'@media not all and (min-width: 640px)': {
							fontSize: '32px',
							lineHeight: '42px',
						},
						'@media not all and (min-width: 480px)': {
							fontSize: '28px',
							lineHeight: '36px',
						},
					},
					// h3: {
					// 	fontFamily: theme('fontFamily.robotoSerif'),
					// 	fontSize: '3rem',
					// 	textAlign: 'left',
					// 	fontWeight: 600,
					// 	lineHeight: '140%',
					// 	color: theme('colors.dark'),
					// 	'@media not all and (min-width: 640px)': {
					// 		fontSize: '26px',
					// 		lineHeight: '30px',
					// 	},
					// },
					h4: {
						fontFamily: theme('fontFamily.betaSansReg'),
						fontSize: '1.25rem', // 20px
						letterSpacing: '.23em',
						lineHeight: '1',
						color: theme('colors.blue[950]'),
						'@media not all and (min-width: 960px)': {
							fontSize: '1.15rem',
							lineHeight: '1.4rem',
						},
						'@media not all and (min-width: 640px)': {
							fontSize: '1rem',
							lineHeight: '1.3rem',
						},
					},
					// h6: {
					// 	fontFamily: theme('fontFamily.robotoSerif'),
					// 	fontSize: '1.5rem',
					// 	fontWeight: 600,
					// 	lineHeight: '160%',
					// 	'@media not all and (min-width: 640px)': {
					// 		fontSize: '1.2rem',
					// 		lineHeight: '1.5rem',
					// 	},
					// },
				})
		}),
	],
}
