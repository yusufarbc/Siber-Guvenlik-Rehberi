import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Siber Güvenlik El Kitabı',
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
					label: 'Bölümler',
					items: [
						{ label: 'Bilgi Güvenliği', link: '/01-bilgi-guvenligi/' },
						{ label: 'Fiziksel Güvenlik', link: '/02-fiziksel-guvenlik/' },
						{ label: 'Donanım Güvenliği', link: '/03-donanim-guvenligi/' },
						{ label: 'Kimlik Güvenliği', link: '/04-kimlik-guvenligi/' },
						{ label: 'Veri Güvenliği', link: '/05-veri-guvenligi/' },
						{ label: 'Ağ Güvenliği', link: '/06-ag-guvenligi/' },
						{ label: 'Uç Nokta Güvenliği', link: '/07-uc-nokta-guvenligi/' },
						{ label: 'Mobil Güvenlik', link: '/08-mobil-guvenlik/' },
						{ label: 'E-Posta Güvenliği', link: '/09-e-posta-guvenligi/' },
						{ label: 'Uygulama Güvenliği', link: '/10-uygulama-guvenligi/' },
						{ label: 'Bulut ve Sanallaştırma Güvenliği', link: '/11-bulut-ve-sanallastirma-guvenligi/' },
						{ label: 'Endüstriyel Sistem Güvenliği', link: '/12-endustriyel-sistem-guvenligi/' },
						{ label: 'Yapay Zeka Güvenliği', link: '/13-yapay-zeka-guvenligi/' },
						{ label: 'Operasyonel Güvenlik', link: '/14-operasyonel-guvenlik/' }
					]
				},
			],
		}),
	],
});
