import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		schema: docsSchema({
			extend: z.object({
				banner: z.object({
					content: z.string(),
				}).optional().default({
					content: '🚀 Bu rehber açık kaynaklıdır ve katkılarınıza açıktır! Katkıda bulunmak, hata bildirmek veya öneri sunmak için <a href="https://github.com/yusufarbc/Siber-Guvenlik-Rehberi">GitHub Depomuzu</a> ziyaret edin ve Pull Request açın.'
				})
			})
		})
	}),
};
