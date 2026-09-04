import rss from '@astrojs/rss'
import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import { site } from '../data/site'

export const GET: APIRoute = async (context) => {
  const posts = (await getCollection('news', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  )

  return rss({
    title: `${site.name} News`,
    description: site.description,
    site: context.site ?? site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      categories: post.data.tags,
      author: post.data.author,
      link: post.data.externalUrl ?? `/news/${post.id}`,
    })),
    customData: '<language>en-us</language>',
  })
}
