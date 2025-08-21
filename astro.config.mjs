// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://friends-docs.geroriki.ip-ddns.com',
	integrations: [
		starlight({
			
			title: 'שרת החברים',
			favicon: '../../public/favicon.png',
			lastUpdated: true,

			locales: {
				root: {
					label: 'עברית',
					lang: 'he',
					dir: 'rtl',
				}
			},

			customCss: [
				'./src/styles/global.css',
				'./src/styles/colors.css',
				'./src/styles/image-grid.css',
			],

			sidebar: [
				/*{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},*/
			],
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
