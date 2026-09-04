import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

/** Groups people into ordered sections on the Team page. */
const memberGroup = z.enum([
  'faculty',
  'postdoc',
  'phd',
  'ms',
  'undergrad',
  'collaborator',
])

const links = z
  .object({
    website: z.string().url().optional(),
    scholar: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    github: z.string().url().optional(),
    youtube: z.string().url().optional(),
    email: z.string().email().optional(),
    cv: z.string().optional(),
  })
  .default({})

const team = defineCollection({
  loader: glob({ base: './src/content/team', pattern: ['**/*.md', '!**/_*'] }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      group: memberGroup,
      photo: image().optional(),
      researchAreas: z.array(z.string()).default([]),
      links: links,
      /** Lower sorts first within a group. */
      order: z.number().default(100),
    }),
})

const alumni = defineCollection({
  loader: glob({ base: './src/content/alumni', pattern: ['**/*.md', '!**/_*'] }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      /** Role held while in the lab, e.g. "PhD, 2019-2024". */
      role: z.string(),
      years: z.string().optional(),
      /** Where they went next. */
      now: z.string().optional(),
      photo: image().optional(),
      researchAreas: z.array(z.string()).default([]),
      links: links,
      order: z.number().default(100),
    }),
})

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: ['**/*.md', '!**/_*'] }),
  schema: () =>
    z.object({
      title: z.string(),
      /** One-line summary used on cards and the home page. */
      summary: z.string(),
      /** Short label for the research area this belongs to. */
      area: z.string(),
      icon: z
        .enum(['shield', 'brain', 'graph', 'car', 'filter', 'book'])
        .default('shield'),
      funder: z.string().optional(),
      amount: z.string().optional(),
      status: z.enum(['active', 'completed']).default('active'),
      links: z
        .array(z.object({ label: z.string(), url: z.string().url() }))
        .default([]),
      featured: z.boolean().default(false),
      order: z.number().default(100),
    }),
})

const news = defineCollection({
  loader: glob({ base: './src/content/news', pattern: ['**/*.{md,mdx}', '!**/_*'] }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      /** Shown on the card and used as the meta description. */
      description: z.string(),
      /** `news` items are short announcements; `blog` posts are long-form. */
      kind: z.enum(['news', 'blog']).default('news'),
      tags: z.array(z.string()).default([]),
      author: z.string().optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      externalUrl: z.string().url().optional(),
      draft: z.boolean().default(false),
    }),
})

export const collections = { team, alumni, projects, news }
