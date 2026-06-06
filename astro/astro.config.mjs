// @ts-check

import fs from 'node:fs/promises';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://vrcflat.github.io',
	base: '/',
	integrations: [
		mdx(),
		sitemap(),
		{
			name: 'copy-sitemap',
			hooks: {
				'astro:build:done': async ({ dir }) => {
					try {
						const sitemapIndexPath = new URL('sitemap-index.xml', dir);
						const sitemapPath = new URL('sitemap.xml', dir);
						await fs.copyFile(sitemapIndexPath, sitemapPath);
						console.log('Successfully copied sitemap-index.xml to sitemap.xml');
					} catch (err) {
						console.error('Failed to copy sitemap-index.xml to sitemap.xml:', err);
					}
				}
			}
		}
	],
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
