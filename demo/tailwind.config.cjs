import { join } from 'path';
import skeleton from '@skeletonlabs/skeleton/tailwind/skeleton.cjs';

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		screens: {
			s: '480px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px'
		},
		minHeight: {
			screen: 'calc(100svh - 112px)'
		},
		textUnderlineOffset: {
			3: '3px'
		},
		extend: {
			fontFamily: {
				montserrat: 'Montserrat, sans- serif'
			}
		}
	},
	plugins: [...skeleton()]
};
