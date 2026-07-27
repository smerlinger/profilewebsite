import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts live in src/content/blog as Markdown files.
// To publish a new post: add a .md file with the frontmatter below. That's it.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    // Date the post was written / published.
    date: z.coerce.date(),
    // Optional one-line summary shown in the writing index and meta tags.
    description: z.string().optional(),
    // Set to true to hide a post from the site without deleting it.
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
