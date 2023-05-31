/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'fondoHome': "url('/fondo-home.svg')",
				'fondoHomeMovile': "url('/fondo-homeMovile.svg')",
				'fondoAbout': "url('/fondo-about.svg')",
				'fondoAboutMovile': "url('/fondo-aboutMovile.svg')",
				'fondoFooter': "url('/fondo-footer.svg')",
				'fondoFooterMovile': "url('/fondo-footerMovile.svg')"
			},
			gridTemplateColumns: {
				'cards': 'repeat(auto-fit, minmax(7rem, 1fr))',
			}
		},
		fontFamily: {
			'koulen': ['Koulen', 'cursive']
		}
	},
	plugins: [],
}
