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
			'3xl': '1560px', // big laptops
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
			helvetica: ['Helvetica', ...defaultTheme.fontFamily.sans],
		},
		colors: {
			white: colors.white,
			black: colors.black,
			gray: {
				500: '#3f444b',
			},
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
			transitionDuration: {
				DEFAULT: '300ms',
			},
			animation: {
				fade: 'fadeIn .3s ease-in-out forwards',
				fadeOut: 'fadeOut .3s ease-in-out forwards',
			},
			keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				fadeOut: {
					from: { opacity: 1 },
					to: { opacity: 0 },
				},
			},
			fontSize: {
				sm: ['0.875rem', '1.4rem'],
				m: ['0.9375rem', '1.125rem'], // 15px 18px
				base: ['1rem', '1.8125rem'], // 16px 29px
				'5.5xl': ['3.25rem', '5rem'], // 52px 80px
				'6xl': ['3.875rem', '2.25rem'], // 62px 36px
			},
			letterSpacing: {
				2: '2px',
				2.4: '2.4px',
				5.2: '5.2px',
				6: '6px',
			},
			boxShadow: {
				'gold-card': '0px 4px 15px rgba(201, 171, 129, 0.1)',
			},
			spacing: {
				4.5: '1.125rem', // 18px
				7.5: '1.875rem', // 18px
				12.5: '3.125rem', // 50px
				14.5: '3.75rem', // 60px
				24.5: '100px', // 100px
			},
		},
	},
	plugins: [
		require('tailwindcss'),
		require('autoprefixer'),
		require('tailwind-hamburgers'),
		plugin(function ({ addComponents, addBase, theme }) {
			addComponents({
				'.btn': {
					cursor: 'pointer',
					height: '3rem', // 48px
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					minWidth: '12.5rem', // 200px
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
					textDecoration: 'none',
					textTransform: 'uppercase',
					overflow: 'hidden',
					'&:hover': {
						color: theme('colors.primary[500]'),
					},
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
					'@media not all and (min-width: 640px)': {
						padding: '0 20px',
						width: '100% !important',
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
				'.sub-header': {
					display: 'block',
					fontSize: '3.875rem', // 62px
					lineHeight: '3.875rem', // 62px
					textAlign: 'center',
					fontFamily: theme('fontFamily.jonathanReg'),
					color: theme('colors.primary[400]'),
					'@media not all and (min-width: 960px)': {
						fontSize: '3.5rem', // 56px
						lineHeight: '3.5rem', // 56px
					},
					'@media not all and (min-width: 640px)': {
						fontSize: '44px',
						lineHeight: '44px',
					},
					'@media not all and (min-width: 640px)': {
						fontSize: '44px',
						lineHeight: '44px',
					},
				},
			}),
				addBase({
					h1: {
						fontFamily: theme('fontFamily.betaSansReg'),
						fontSize: '2.75rem', // 44px
						fontStyle: 'normal',
						fontWeight: '500',
						lineHeight: '1.31em',
						letterSpacing: 'normal',
						textAlign: 'center',
						textTransform: 'uppercase',
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
					h2: {
						fontFamily: theme('fontFamily.betaSansReg'),
						fontSize: '2.375rem', // 38px
						fontStyle: 'normal',
						fontWeight: '500',
						lineHeight: '160%',
						letterSpacing: 'normal',
						textAlign: 'center',
						textTransform: 'uppercase',
						color: theme('colors.primary[400]'),
						'@media not all and (min-width: 960px)': {
							fontSize: '34px',
							lineHeight: '44px',
							marginBottom: '20px',
						},
						'@media not all and (min-width: 640px)': {
							fontSize: '30px',
							lineHeight: '38px',
						},
						'@media not all and (min-width: 480px)': {
							fontSize: '26px',
							lineHeight: '32px',
						},
					},
					h4: {
						fontFamily: theme('fontFamily.betaSansReg'),
						fontSize: '1.5rem', // 24px
						letterSpacing: 'normal',
						lineHeight: '2.4rem', // 38.4px
						color: theme('colors.primary[400]'),
						textTransform: 'uppercase',
						'@media not all and (min-width: 960px)': {
							fontSize: '1.15rem',
							lineHeight: '1.4rem',
						},
						'@media not all and (min-width: 640px)': {
							fontSize: '1rem',
							lineHeight: '1.3rem',
						},
					},
					h5: {
						fontFamily: theme('fontFamily.betaSansReg'),
						fontSize: '1.25rem', // 20px
						letterSpacing: '.23em',
						lineHeight: '1',
						textTransform: 'uppercase',
						color: theme('colors.primary[400]'),
						'@media not all and (min-width: 960px)': {
							fontSize: '1.15rem',
							lineHeight: '1.4rem',
						},
						'@media not all and (min-width: 640px)': {
							fontSize: '1rem',
							lineHeight: '1.3rem',
						},
					},
				})
		}),
	],
}
