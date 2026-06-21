import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/[^_]*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional(),
    category: z.enum([
      'Capital Spending',
      'Business Models',
      'Winners & Losers',
      'Supply Chain',
      'Productivity Economy',
    ]),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };