import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://yusufarbc.github.io',
	base: '/Siber-Guvenlik-Rehberi',
	integrations: [

		starlight({
			title: 'Siber Güvenlik Rehberi',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Türkçe',
					lang: 'tr',
				},
			},
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: '01. Bilgi Güvenliği',
					autogenerate: { directory: '01-bilgi-guvenligi' },
				},
				{
					label: '02. Fiziksel Güvenlik',
					autogenerate: { directory: '02-fiziksel-guvenlik' },
				},
				{
					label: '03. Donanım Güvenliği',
					autogenerate: { directory: '03-donanim-guvenligi' },
				},
				{
					label: '04. Kimlik Güvenliği',
					autogenerate: { directory: '04-kimlik-guvenligi' },
				},
				{
					label: '05. Veri Güvenliği',
					autogenerate: { directory: '05-veri-guvenligi' },
				},
				{
					label: '06. Ağ Güvenliği',
					autogenerate: { directory: '06-ag-guvenligi' },
				},
				{
					label: '07. Uç Nokta Güvenliği',
					autogenerate: { directory: '07-uc-nokta-guvenligi' },
				},
				{
					label: '08. Mobil Güvenlik',
					autogenerate: { directory: '08-mobil-guvenlik' },
				},
				{
					label: '09. E-Posta Güvenliği',
					autogenerate: { directory: '09-e-posta-guvenligi' },
				},
				{
					label: '10. Uygulama Güvenliği',
					autogenerate: { directory: '10-uygulama-guvenligi' },
				},
				{
					label: '11. Bulut Güvenliği',
					autogenerate: { directory: '11-bulut-guvenligi' },
				},
				{
					label: '12. Endüstriyel Güvenlik',
					autogenerate: { directory: '12-endustriyel-sistem-guvenligi' },
				},
				{
					label: '13. Yapay Zeka Güvenliği',
					autogenerate: { directory: '13-yapay-zeka-guvenligi' },
				},
				{
					label: '14. Operasyonel Güvenlik',
					autogenerate: { directory: '14-operasyonel-guvenlik' },
				},
			],
		}),
		sitemap(),
	],
});
