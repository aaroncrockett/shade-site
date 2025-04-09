// tailwind.config.js
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				futura: ['futura-pt', ...defaultTheme.fontFamily.sans],
				acuminExtraCondensed: ['acumin-pro-extra-condensed', ...defaultTheme.fontFamily.sans]
			},
			fontWeight: {
				book: '400',
				medium: '500',
				bold: '700'
			}
		}
	}
};
