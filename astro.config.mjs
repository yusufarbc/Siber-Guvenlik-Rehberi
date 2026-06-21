import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeSectionNumber from './src/plugins/rehype-section-number.mjs';

export default defineConfig({
	site: 'https://yusufarbc.github.io',
	base: '/Siber-Guvenlik-Rehberi',
	markdown: {
		rehypePlugins: [rehypeSectionNumber],
	},
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
			social: {
				github: 'https://github.com/yusufarbc/Siber-Guvenlik-Rehberi',
			},
			editLink: {
				baseUrl: 'https://github.com/yusufarbc/Siber-Guvenlik-Rehberi/edit/main/',
			},
			customCss: [
				'./src/styles/tokens.css',
				'./src/styles/typography.css',
				'./src/styles/layout.css',
				'./src/styles/responsive.css',
			],
			head: [
				{
					// Sidebar page labels are written as "13.2  Title" (see each
					// page's sidebar.label frontmatter). Split the "13.2" off into
					// its own <span class="chapter-num"> so it renders as a small
					// muted kicker above the title — the same treatment the
					// rehype-section-number plugin gives "§13.2.1." inside page
					// content — instead of plain text the same size as the title.
					// Sidebar links are plain Astro output (not markdown), so this
					// has to run client-side rather than as a rehype plugin.
					//
					// Also: each chapter page is a full navigation (no client
					// router), so the sidebar re-renders from scratch on every
					// click. Without the scroll-into-view below, it always starts
					// scrolled to the top — meaning clicking into chapter 12 of 14
					// dumps you back at chapter 1 and you have to scroll down again.
					tag: 'script',
					content: `
						(function () {
							function splitSidebarLabels() {
								var labels = document.querySelectorAll('.sidebar-content a > span:first-child');
								for (var i = 0; i < labels.length; i++) {
									var span = labels[i];
									var match = /^(\\d+\\.\\d+)\\s+(.+)$/.exec(span.textContent);
									if (!match) continue;
									span.textContent = '';
									var numEl = document.createElement('span');
									numEl.className = 'chapter-num';
									numEl.textContent = match[1];
									span.appendChild(numEl);
									span.appendChild(document.createTextNode(match[2]));
								}
							}
							function revealActiveSidebarLink() {
								var active = document.querySelector('.sidebar-content [aria-current="page"]');
								if (active) active.scrollIntoView({ block: 'center' });
							}
							function init() {
								splitSidebarLabels();
								revealActiveSidebarLink();
							}
							if (document.readyState === 'loading') {
								document.addEventListener('DOMContentLoaded', init);
							} else {
								init();
							}
						})();
					`,
				},
			],
			sidebar: [
				{
					label: '01. Bilgi Güvenliği',
					collapsed: true,
					autogenerate: { directory: '01-bilgi-guvenligi' },
				},
				{
					label: '02. Fiziksel Güvenlik',
					collapsed: true,
					autogenerate: { directory: '02-fiziksel-guvenlik' },
				},
				{
					label: '03. Donanım Güvenliği',
					collapsed: true,
					autogenerate: { directory: '03-donanim-guvenligi' },
				},
				{
					label: '04. Kimlik Güvenliği',
					collapsed: true,
					autogenerate: { directory: '04-kimlik-guvenligi' },
				},
				{
					label: '05. Veri Güvenliği',
					collapsed: true,
					autogenerate: { directory: '05-veri-guvenligi' },
				},
				{
					label: '06. Ağ Güvenliği',
					collapsed: true,
					autogenerate: { directory: '06-ag-guvenligi' },
				},
				{
					label: '07. Uç Nokta Güvenliği',
					collapsed: true,
					autogenerate: { directory: '07-uc-nokta-guvenligi' },
				},
				{
					label: '08. Mobil Güvenlik',
					collapsed: true,
					autogenerate: { directory: '08-mobil-guvenlik' },
				},
				{
					label: '09. E-Posta Güvenliği',
					collapsed: true,
					autogenerate: { directory: '09-e-posta-guvenligi' },
				},
				{
					label: '10. Uygulama Güvenliği',
					collapsed: true,
					autogenerate: { directory: '10-uygulama-guvenligi' },
				},
				{
					label: '11. Bulut Güvenliği',
					collapsed: true,
					autogenerate: { directory: '11-bulut-guvenligi' },
				},
				{
					label: '12. Endüstriyel Sistem Güvenliği',
					collapsed: true,
					autogenerate: { directory: '12-endustriyel-sistem-guvenligi' },
				},
				{
					label: '13. Yapay Zeka Güvenliği',
					collapsed: true,
					autogenerate: { directory: '13-yapay-zeka-guvenligi' },
				},
				{
					label: '14. Operasyonel Güvenlik',
					collapsed: true,
					autogenerate: { directory: '14-operasyonel-guvenlik' },
				},
			],
		}),
	],
});
