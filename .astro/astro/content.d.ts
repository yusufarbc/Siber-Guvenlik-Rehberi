declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
			components: import('astro').MDXInstance<{}>['components'];
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"docs": {
"01-bilgi-guvenligi/01-temeller-ve-cia.md": {
	id: "01-bilgi-guvenligi/01-temeller-ve-cia.md";
  slug: "01-bilgi-guvenligi/01-temeller-ve-cia";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"01-bilgi-guvenligi/02-grc-ve-uyumluluk.md": {
	id: "01-bilgi-guvenligi/02-grc-ve-uyumluluk.md";
  slug: "01-bilgi-guvenligi/02-grc-ve-uyumluluk";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"01-bilgi-guvenligi/03-guvenlik-politikalari.md": {
	id: "01-bilgi-guvenligi/03-guvenlik-politikalari.md";
  slug: "01-bilgi-guvenligi/03-guvenlik-politikalari";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"02-fiziksel-guvenlik/01-fiziksel-ve-veri-merkezi.md": {
	id: "02-fiziksel-guvenlik/01-fiziksel-ve-veri-merkezi.md";
  slug: "02-fiziksel-guvenlik/01-fiziksel-ve-veri-merkezi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"02-fiziksel-guvenlik/01-veri-merkezi-standartlari.md": {
	id: "02-fiziksel-guvenlik/01-veri-merkezi-standartlari.md";
  slug: "02-fiziksel-guvenlik/01-veri-merkezi-standartlari";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"02-fiziksel-guvenlik/02-cevresel-ve-biyometrik.md": {
	id: "02-fiziksel-guvenlik/02-cevresel-ve-biyometrik.md";
  slug: "02-fiziksel-guvenlik/02-cevresel-ve-biyometrik";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"02-fiziksel-guvenlik/02-cihaz-imhasi-ve-veri-yok-etme.md": {
	id: "02-fiziksel-guvenlik/02-cihaz-imhasi-ve-veri-yok-etme.md";
  slug: "02-fiziksel-guvenlik/02-cihaz-imhasi-ve-veri-yok-etme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"02-fiziksel-guvenlik/03-donanim-guvenligi.md": {
	id: "02-fiziksel-guvenlik/03-donanim-guvenligi.md";
  slug: "02-fiziksel-guvenlik/03-donanim-guvenligi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"03-donanim-guvenligi/01-cip-anakart-ve-firmware.md": {
	id: "03-donanim-guvenligi/01-cip-anakart-ve-firmware.md";
  slug: "03-donanim-guvenligi/01-cip-anakart-ve-firmware";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"03-donanim-guvenligi/02-tedarik-zinciri-riskleri.md": {
	id: "03-donanim-guvenligi/02-tedarik-zinciri-riskleri.md";
  slug: "03-donanim-guvenligi/02-tedarik-zinciri-riskleri";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"04-kimlik-guvenligi/01-iam-ve-erisim-kontrolu.md": {
	id: "04-kimlik-guvenligi/01-iam-ve-erisim-kontrolu.md";
  slug: "04-kimlik-guvenligi/01-iam-ve-erisim-kontrolu";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"04-kimlik-guvenligi/01-sifir-guven-mimarisi.md": {
	id: "04-kimlik-guvenligi/01-sifir-guven-mimarisi.md";
  slug: "04-kimlik-guvenligi/01-sifir-guven-mimarisi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"04-kimlik-guvenligi/02-iam-ve-mfa.md": {
	id: "04-kimlik-guvenligi/02-iam-ve-mfa.md";
  slug: "04-kimlik-guvenligi/02-iam-ve-mfa";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"04-kimlik-guvenligi/02-pam-ve-modern-dogrulama.md": {
	id: "04-kimlik-guvenligi/02-pam-ve-modern-dogrulama.md";
  slug: "04-kimlik-guvenligi/02-pam-ve-modern-dogrulama";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"04-kimlik-guvenligi/03-pam-ve-jit.md": {
	id: "04-kimlik-guvenligi/03-pam-ve-jit.md";
  slug: "04-kimlik-guvenligi/03-pam-ve-jit";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"04-kimlik-guvenligi/03-sifir-guven-mimarisi.md": {
	id: "04-kimlik-guvenligi/03-sifir-guven-mimarisi.md";
  slug: "04-kimlik-guvenligi/03-sifir-guven-mimarisi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"05-veri-guvenligi/01-kriptografi-ve-sifreleme.md": {
	id: "05-veri-guvenligi/01-kriptografi-ve-sifreleme.md";
  slug: "05-veri-guvenligi/01-kriptografi-ve-sifreleme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"05-veri-guvenligi/01-sifreleme-ve-kriptografi.md": {
	id: "05-veri-guvenligi/01-sifreleme-ve-kriptografi.md";
  slug: "05-veri-guvenligi/01-sifreleme-ve-kriptografi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"05-veri-guvenligi/02-butunluk-ve-hashing.md": {
	id: "05-veri-guvenligi/02-butunluk-ve-hashing.md";
  slug: "05-veri-guvenligi/02-butunluk-ve-hashing";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"05-veri-guvenligi/02-siniflandirma-ve-dlp.md": {
	id: "05-veri-guvenligi/02-siniflandirma-ve-dlp.md";
  slug: "05-veri-guvenligi/02-siniflandirma-ve-dlp";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"05-veri-guvenligi/03-dlp-ve-yedekleme.md": {
	id: "05-veri-guvenligi/03-dlp-ve-yedekleme.md";
  slug: "05-veri-guvenligi/03-dlp-ve-yedekleme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"05-veri-guvenligi/03-yedekleme-ve-kurtarma.md": {
	id: "05-veri-guvenligi/03-yedekleme-ve-kurtarma.md";
  slug: "05-veri-guvenligi/03-yedekleme-ve-kurtarma";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"06-ag-guvenligi/01-osi-ve-ag-temelleri.md": {
	id: "06-ag-guvenligi/01-osi-ve-ag-temelleri.md";
  slug: "06-ag-guvenligi/01-osi-ve-ag-temelleri";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"06-ag-guvenligi/02-ngfw-ve-ids-ips.md": {
	id: "06-ag-guvenligi/02-ngfw-ve-ids-ips.md";
  slug: "06-ag-guvenligi/02-ngfw-ve-ids-ips";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"06-ag-guvenligi/03-ag-saldirilari-ve-savunma.md": {
	id: "06-ag-guvenligi/03-ag-saldirilari-ve-savunma.md";
  slug: "06-ag-guvenligi/03-ag-saldirilari-ve-savunma";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"06-ag-guvenligi/04-kablosuz-ag-ve-uzaktan-erisim.md": {
	id: "06-ag-guvenligi/04-kablosuz-ag-ve-uzaktan-erisim.md";
  slug: "06-ag-guvenligi/04-kablosuz-ag-ve-uzaktan-erisim";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"07-uc-nokta-guvenligi/01-edr-ve-xdr.md": {
	id: "07-uc-nokta-guvenligi/01-edr-ve-xdr.md";
  slug: "07-uc-nokta-guvenligi/01-edr-ve-xdr";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"07-uc-nokta-guvenligi/01-isletim-sistemi-sikilastirma-ve-edr.md": {
	id: "07-uc-nokta-guvenligi/01-isletim-sistemi-sikilastirma-ve-edr.md";
  slug: "07-uc-nokta-guvenligi/01-isletim-sistemi-sikilastirma-ve-edr";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"07-uc-nokta-guvenligi/02-olay-mudahale-ve-kape.md": {
	id: "07-uc-nokta-guvenligi/02-olay-mudahale-ve-kape.md";
  slug: "07-uc-nokta-guvenligi/02-olay-mudahale-ve-kape";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"07-uc-nokta-guvenligi/02-zararli-yazilim-analizi-ve-adli-bilisim.md": {
	id: "07-uc-nokta-guvenligi/02-zararli-yazilim-analizi-ve-adli-bilisim.md";
  slug: "07-uc-nokta-guvenligi/02-zararli-yazilim-analizi-ve-adli-bilisim";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"07-uc-nokta-guvenligi/03-wazuh-ve-hids.md": {
	id: "07-uc-nokta-guvenligi/03-wazuh-ve-hids.md";
  slug: "07-uc-nokta-guvenligi/03-wazuh-ve-hids";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"08-mobil-guvenlik/01-mobil-cihaz-ve-uygulama-guvenligi.md": {
	id: "08-mobil-guvenlik/01-mobil-cihaz-ve-uygulama-guvenligi.md";
  slug: "08-mobil-guvenlik/01-mobil-cihaz-ve-uygulama-guvenligi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"09-e-posta-guvenligi/01-e-posta-dogrulama-ve-protokoller.md": {
	id: "09-e-posta-guvenligi/01-e-posta-dogrulama-ve-protokoller.md";
  slug: "09-e-posta-guvenligi/01-e-posta-dogrulama-ve-protokoller";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"09-e-posta-guvenligi/02-gelismis-tehditler-ve-seg.md": {
	id: "09-e-posta-guvenligi/02-gelismis-tehditler-ve-seg.md";
  slug: "09-e-posta-guvenligi/02-gelismis-tehditler-ve-seg";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"10-uygulama-guvenligi/01-guvenli-yazilim-gelistirme-ve-devsecops.md": {
	id: "10-uygulama-guvenligi/01-guvenli-yazilim-gelistirme-ve-devsecops.md";
  slug: "10-uygulama-guvenligi/01-guvenli-yazilim-gelistirme-ve-devsecops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"10-uygulama-guvenligi/02-web-ve-api-guvenligi.md": {
	id: "10-uygulama-guvenligi/02-web-ve-api-guvenligi.md";
  slug: "10-uygulama-guvenligi/02-web-ve-api-guvenligi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"11-bulut-guvenligi/01-sanallastirma-ve-bulut-modelleri.md": {
	id: "11-bulut-guvenligi/01-sanallastirma-ve-bulut-modelleri.md";
  slug: "11-bulut-guvenligi/01-sanallastirma-ve-bulut-modelleri";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"11-bulut-guvenligi/02-konteyner-ve-iac-guvenligi.md": {
	id: "11-bulut-guvenligi/02-konteyner-ve-iac-guvenligi.md";
  slug: "11-bulut-guvenligi/02-konteyner-ve-iac-guvenligi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"12-endustriyel-sistem-guvenligi/01-ot-ics-ve-purdue-modeli.md": {
	id: "12-endustriyel-sistem-guvenligi/01-ot-ics-ve-purdue-modeli.md";
  slug: "12-endustriyel-sistem-guvenligi/01-ot-ics-ve-purdue-modeli";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"13-yapay-zeka-guvenligi/01-llm-zafiyetleri-ve-savunma.md": {
	id: "13-yapay-zeka-guvenligi/01-llm-zafiyetleri-ve-savunma.md";
  slug: "13-yapay-zeka-guvenligi/01-llm-zafiyetleri-ve-savunma";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"14-operasyonel-guvenlik/01-soc-siem-ve-soar.md": {
	id: "14-operasyonel-guvenlik/01-soc-siem-ve-soar.md";
  slug: "14-operasyonel-guvenlik/01-soc-siem-ve-soar";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"14-operasyonel-guvenlik/02-tehdit-avciligi-ve-cti.md": {
	id: "14-operasyonel-guvenlik/02-tehdit-avciligi-ve-cti.md";
  slug: "14-operasyonel-guvenlik/02-tehdit-avciligi-ve-cti";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"14-operasyonel-guvenlik/03-olay-mudahale-ve-delil-zinciri.md": {
	id: "14-operasyonel-guvenlik/03-olay-mudahale-ve-delil-zinciri.md";
  slug: "14-operasyonel-guvenlik/03-olay-mudahale-ve-delil-zinciri";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"index.md": {
	id: "index.md";
  slug: "index";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../../src/content/config.js");
}
