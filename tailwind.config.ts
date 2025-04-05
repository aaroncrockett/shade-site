import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				futura: ['futura-pt', 'sans-serif']
			},
			fontWeight: {
				book: '400',
				bold: '700'
			}
		}
	}
};

export default config;
