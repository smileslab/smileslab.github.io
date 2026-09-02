// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://smileslab.github.io',
  // smileslab.github.io is a GitHub *user/org* page, so the site is served from
  // the domain root and needs no `base` prefix.
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
  image: {
    // Generated derivatives are what ship; the large originals in src/assets
    // never reach the browser.
    responsiveStyles: true,
  },
})
