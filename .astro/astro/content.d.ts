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
"01-bilgi-guvenligi/01-temeller-ve-cia/index.md": {
	id: "01-bilgi-guvenligi/01-temeller-ve-cia/index.md";
  slug: "01-bilgi-guvenligi/01-temeller-ve-cia";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"01-bilgi-guvenligi/02-grc-ve-uyumluluk/index.md": {
	id: "01-bilgi-guvenligi/02-grc-ve-uyumluluk/index.md";
  slug: "01-bilgi-guvenligi/02-grc-ve-uyumluluk";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"01-bilgi-guvenligi/03-guvenlik-politikalari/index.md": {
	id: "01-bilgi-guvenligi/03-guvenlik-politikalari/index.md";
  slug: "01-bilgi-guvenligi/03-guvenlik-politikalari";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"02-fiziksel-guvenlik/01-fiziksel-cevre-ve-veri-merkezi/index.md": {
	id: "02-fiziksel-guvenlik/01-fiziksel-cevre-ve-veri-merkezi/index.md";
  slug: "02-fiziksel-guvenlik/01-fiziksel-cevre-ve-veri-merkezi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"02-fiziksel-guvenlik/02-cihaz-imhasi-ve-veri-yok-etme/index.md": {
	id: "02-fiziksel-guvenlik/02-cihaz-imhasi-ve-veri-yok-etme/index.md";
  slug: "02-fiziksel-guvenlik/02-cihaz-imhasi-ve-veri-yok-etme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"02-fiziksel-guvenlik/03-sosyal-muhendislik-ve-red-team/index.md": {
	id: "02-fiziksel-guvenlik/03-sosyal-muhendislik-ve-red-team/index.md";
  slug: "02-fiziksel-guvenlik/03-sosyal-muhendislik-ve-red-team";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"03-donanim-guvenligi/01-cip-ve-firmware-guvenligi/index.md": {
	id: "03-donanim-guvenligi/01-cip-ve-firmware-guvenligi/index.md";
  slug: "03-donanim-guvenligi/01-cip-ve-firmware-guvenligi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"03-donanim-guvenligi/02-tedarik-zinciri-riskleri/index.md": {
	id: "03-donanim-guvenligi/02-tedarik-zinciri-riskleri/index.md";
  slug: "03-donanim-guvenligi/02-tedarik-zinciri-riskleri";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"03-donanim-guvenligi/03-yan-kanal-saldirilari/index.md": {
	id: "03-donanim-guvenligi/03-yan-kanal-saldirilari/index.md";
  slug: "03-donanim-guvenligi/03-yan-kanal-saldirilari";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"04-kimlik-guvenligi/02-pam-mfa-ve-sso/index.md": {
	id: "04-kimlik-guvenligi/02-pam-mfa-ve-sso/index.md";
  slug: "04-kimlik-guvenligi/02-pam-mfa-ve-sso";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"04-kimlik-guvenligi/03-sifir-guven-mimarisi/index.md": {
	id: "04-kimlik-guvenligi/03-sifir-guven-mimarisi/index.md";
  slug: "04-kimlik-guvenligi/03-sifir-guven-mimarisi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"04-kimlik-guvenligi/04-did-ve-parolasiz-kimlik/index.md": {
	id: "04-kimlik-guvenligi/04-did-ve-parolasiz-kimlik/index.md";
  slug: "04-kimlik-guvenligi/04-did-ve-parolasiz-kimlik";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"05-veri-guvenligi/01-kriptografi-ve-sifreleme/index.md": {
	id: "05-veri-guvenligi/01-kriptografi-ve-sifreleme/index.md";
  slug: "05-veri-guvenligi/01-kriptografi-ve-sifreleme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"05-veri-guvenligi/03-veri-siniflandirma-ve-dlp/index.md": {
	id: "05-veri-guvenligi/03-veri-siniflandirma-ve-dlp/index.md";
  slug: "05-veri-guvenligi/03-veri-siniflandirma-ve-dlp";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"05-veri-guvenligi/04-yedekleme-ve-kurtarma/index.md": {
	id: "05-veri-guvenligi/04-yedekleme-ve-kurtarma/index.md";
  slug: "05-veri-guvenligi/04-yedekleme-ve-kurtarma";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"06-ag-guvenligi/01-ag-temelleri-ve-segmentasyon/index.md": {
	id: "06-ag-guvenligi/01-ag-temelleri-ve-segmentasyon/index.md";
  slug: "06-ag-guvenligi/01-ag-temelleri-ve-segmentasyon";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"06-ag-guvenligi/02-firewall-ids-ips/index.md": {
	id: "06-ag-guvenligi/02-firewall-ids-ips/index.md";
  slug: "06-ag-guvenligi/02-firewall-ids-ips";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"06-ag-guvenligi/03-ag-saldirilari-ve-savunma/index.md": {
	id: "06-ag-guvenligi/03-ag-saldirilari-ve-savunma/index.md";
  slug: "06-ag-guvenligi/03-ag-saldirilari-ve-savunma";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"06-ag-guvenligi/04-kablosuz-aglar-ve-vpn/index.md": {
	id: "06-ag-guvenligi/04-kablosuz-aglar-ve-vpn/index.md";
  slug: "06-ag-guvenligi/04-kablosuz-aglar-ve-vpn";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"07-uc-nokta-guvenligi/01-hardening-edr-xdr/index.md": {
	id: "07-uc-nokta-guvenligi/01-hardening-edr-xdr/index.md";
  slug: "07-uc-nokta-guvenligi/01-hardening-edr-xdr";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"07-uc-nokta-guvenligi/02-malware-analizi-ve-adli-bilisim/index.md": {
	id: "07-uc-nokta-guvenligi/02-malware-analizi-ve-adli-bilisim/index.md";
  slug: "07-uc-nokta-guvenligi/02-malware-analizi-ve-adli-bilisim";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"07-uc-nokta-guvenligi/03-dosyasiz-zararli-yazilimlar/index.md": {
	id: "07-uc-nokta-guvenligi/03-dosyasiz-zararli-yazilimlar/index.md";
  slug: "07-uc-nokta-guvenligi/03-dosyasiz-zararli-yazilimlar";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"08-mobil-guvenlik/01-mobil-guvenlik-ve-mdm/index.md": {
	id: "08-mobil-guvenlik/01-mobil-guvenlik-ve-mdm/index.md";
  slug: "08-mobil-guvenlik/01-mobil-guvenlik-ve-mdm";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"08-mobil-guvenlik/02-mtd-ve-ag-tehditleri/index.md": {
	id: "08-mobil-guvenlik/02-mtd-ve-ag-tehditleri/index.md";
  slug: "08-mobil-guvenlik/02-mtd-ve-ag-tehditleri";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"08-mobil-guvenlik/03-mobil-uygulama-guvenligi/index.md": {
	id: "08-mobil-guvenlik/03-mobil-uygulama-guvenligi/index.md";
  slug: "08-mobil-guvenlik/03-mobil-uygulama-guvenligi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"08-mobil-guvenlik/04-mobil-adli-bilisim/index.md": {
	id: "08-mobil-guvenlik/04-mobil-adli-bilisim/index.md";
  slug: "08-mobil-guvenlik/04-mobil-adli-bilisim";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"09-e-posta-guvenligi/01-eposta-dogrulama-protokolleri/index.md": {
	id: "09-e-posta-guvenligi/01-eposta-dogrulama-protokolleri/index.md";
  slug: "09-e-posta-guvenligi/01-eposta-dogrulama-protokolleri";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"09-e-posta-guvenligi/02-seg-ve-guncel-tehditler/index.md": {
	id: "09-e-posta-guvenligi/02-seg-ve-guncel-tehditler/index.md";
  slug: "09-e-posta-guvenligi/02-seg-ve-guncel-tehditler";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"09-e-posta-guvenligi/03-eposta-sifreleme/index.md": {
	id: "09-e-posta-guvenligi/03-eposta-sifreleme/index.md";
  slug: "09-e-posta-guvenligi/03-eposta-sifreleme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"10-uygulama-guvenligi/01-sdlc-ve-devsecops/index.md": {
	id: "10-uygulama-guvenligi/01-sdlc-ve-devsecops/index.md";
  slug: "10-uygulama-guvenligi/01-sdlc-ve-devsecops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"10-uygulama-guvenligi/02-web-ve-api-guvenligi/index.md": {
	id: "10-uygulama-guvenligi/02-web-ve-api-guvenligi/index.md";
  slug: "10-uygulama-guvenligi/02-web-ve-api-guvenligi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"10-uygulama-guvenligi/03-serverless-ve-v8-guvenligi/index.md": {
	id: "10-uygulama-guvenligi/03-serverless-ve-v8-guvenligi/index.md";
  slug: "10-uygulama-guvenligi/03-serverless-ve-v8-guvenligi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"11-bulut-guvenligi/01-sanallastirma-ve-bulut-servisleri/index.md": {
	id: "11-bulut-guvenligi/01-sanallastirma-ve-bulut-servisleri/index.md";
  slug: "11-bulut-guvenligi/01-sanallastirma-ve-bulut-servisleri";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"11-bulut-guvenligi/02-konteyner-ve-iac-guvenligi/index.md": {
	id: "11-bulut-guvenligi/02-konteyner-ve-iac-guvenligi/index.md";
  slug: "11-bulut-guvenligi/02-konteyner-ve-iac-guvenligi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"11-bulut-guvenligi/03-hibrit-bulut-ve-veri-egemenligi/index.md": {
	id: "11-bulut-guvenligi/03-hibrit-bulut-ve-veri-egemenligi/index.md";
  slug: "11-bulut-guvenligi/03-hibrit-bulut-ve-veri-egemenligi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"12-endustriyel-sistem-guvenligi/01-ot-ics-sistemleri/index.md": {
	id: "12-endustriyel-sistem-guvenligi/01-ot-ics-sistemleri/index.md";
  slug: "12-endustriyel-sistem-guvenligi/01-ot-ics-sistemleri";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"12-endustriyel-sistem-guvenligi/02-ot-sertlestirme/index.md": {
	id: "12-endustriyel-sistem-guvenligi/02-ot-sertlestirme/index.md";
  slug: "12-endustriyel-sistem-guvenligi/02-ot-sertlestirme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"12-endustriyel-sistem-guvenligi/03-endustriyel-tehdit-izleme/index.md": {
	id: "12-endustriyel-sistem-guvenligi/03-endustriyel-tehdit-izleme/index.md";
  slug: "12-endustriyel-sistem-guvenligi/03-endustriyel-tehdit-izleme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"12-endustriyel-sistem-guvenligi/04-ot-olay-mudahale/index.md": {
	id: "12-endustriyel-sistem-guvenligi/04-ot-olay-mudahale/index.md";
  slug: "12-endustriyel-sistem-guvenligi/04-ot-olay-mudahale";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"13-yapay-zeka-guvenligi/01-llm-tehditleri-ve-prompt-injection/index.md": {
	id: "13-yapay-zeka-guvenligi/01-llm-tehditleri-ve-prompt-injection/index.md";
  slug: "13-yapay-zeka-guvenligi/01-llm-tehditleri-ve-prompt-injection";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"13-yapay-zeka-guvenligi/02-owasp-llm-top10/index.md": {
	id: "13-yapay-zeka-guvenligi/02-owasp-llm-top10/index.md";
  slug: "13-yapay-zeka-guvenligi/02-owasp-llm-top10";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"13-yapay-zeka-guvenligi/03-secmlops/index.md": {
	id: "13-yapay-zeka-guvenligi/03-secmlops/index.md";
  slug: "13-yapay-zeka-guvenligi/03-secmlops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"13-yapay-zeka-guvenligi/04-veri-egemenligi-ve-golge-ai/index.md": {
	id: "13-yapay-zeka-guvenligi/04-veri-egemenligi-ve-golge-ai/index.md";
  slug: "13-yapay-zeka-guvenligi/04-veri-egemenligi-ve-golge-ai";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"14-operasyonel-guvenlik/01-soc-ve-log-yonetimi/index.md": {
	id: "14-operasyonel-guvenlik/01-soc-ve-log-yonetimi/index.md";
  slug: "14-operasyonel-guvenlik/01-soc-ve-log-yonetimi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"14-operasyonel-guvenlik/02-tehdit-istihbarati-ve-avciligi/index.md": {
	id: "14-operasyonel-guvenlik/02-tehdit-istihbarati-ve-avciligi/index.md";
  slug: "14-operasyonel-guvenlik/02-tehdit-istihbarati-ve-avciligi";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"14-operasyonel-guvenlik/03-olay-mudahale-ve-kriz-yonetimi/index.md": {
	id: "14-operasyonel-guvenlik/03-olay-mudahale-ve-kriz-yonetimi/index.md";
  slug: "14-operasyonel-guvenlik/03-olay-mudahale-ve-kriz-yonetimi";
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
