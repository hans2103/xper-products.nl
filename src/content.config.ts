import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    sku: z.string(),
    brand: z.string().optional(),
    description: z.string().max(160),
    image: image(),
    imageAlt: z.string().optional(),
    orderUrl: z.string().url().optional(),
    photoMayDiffer: z.boolean().default(false),
    // false hides the product from the site, e.g. when the webshop no longer sells it. See src/lib/products.ts.
    active: z.boolean().default(true),
  }),
});

const racks = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/racks' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    summary: z.string(),
    price: z.number().optional(),
    productCount: z.number().optional(),
    image: image(),
    order: z.number(),
  }),
});

export const collections = { products, racks };
