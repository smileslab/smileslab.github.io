/**
 * Inline SVG icon set. Inlining keeps icons themeable via `currentColor`
 * and avoids shipping an icon library for the dozen glyphs this site uses.
 *
 * Lives here rather than in Icon.astro because Astro frontmatter cannot
 * export TypeScript types.
 */

export type IconName =
  | 'shield'
  | 'brain'
  | 'graph'
  | 'car'
  | 'filter'
  | 'book'
  | 'arrow-right'
  | 'arrow-up-right'
  | 'external'
  | 'linkedin'
  | 'scholar'
  | 'github'
  | 'globe'
  | 'youtube'
  | 'mail'
  | 'sun'
  | 'moon'
  | 'search'
  | 'menu'
  | 'close'
  | 'file-text'
  | 'map-pin'
  | 'calendar'
  | 'sparkle'

/** Brand marks carry their own fill; everything else is stroked. */
export const filledIcons = new Set<IconName>([
  'linkedin',
  'github',
  'youtube',
  'scholar',
])

export const iconPaths: Record<IconName, string> = {
  shield:
    '<path d="M12 3 5 6v5.5c0 4.2 2.9 8.1 7 9.5 4.1-1.4 7-5.3 7-9.5V6l-7-3Z"/><path d="m9.2 12 2 2 3.6-3.8"/>',
  brain:
    '<path d="M12 5.5a2.5 2.5 0 0 0-4.9-.7A2.6 2.6 0 0 0 5 9.4a2.6 2.6 0 0 0 .4 4.4A2.5 2.5 0 0 0 8 18a2.5 2.5 0 0 0 4 .8"/><path d="M12 5.5a2.5 2.5 0 0 1 4.9-.7A2.6 2.6 0 0 1 19 9.4a2.6 2.6 0 0 1-.4 4.4A2.5 2.5 0 0 1 16 18a2.5 2.5 0 0 1-4 .8"/><path d="M12 5.5v13.3"/>',
  graph:
    '<circle cx="6" cy="7" r="2.2"/><circle cx="18" cy="7" r="2.2"/><circle cx="12" cy="17.5" r="2.2"/><path d="m7.6 8.7 3 7M16.4 8.7l-3 7M8.2 7h7.6"/>',
  car: '<path d="M4.5 16.5v2a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-2M16 16.5v2a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-2"/><path d="M3.5 16.5v-4l2-5A1.5 1.5 0 0 1 7 6.5h10a1.5 1.5 0 0 1 1.5 1l2 5v4Z"/><path d="M3.5 12.5h17M7.5 14.5h.01M16.5 14.5h.01"/>',
  filter: '<path d="M4 5.5h16l-6.2 7.3v5.4l-3.6 1.8v-7.2Z"/>',
  book: '<path d="M5 4.5h9.5a2.5 2.5 0 0 1 2.5 2.5v12.5H7.5A2.5 2.5 0 0 1 5 17Z"/><path d="M5 17a2.5 2.5 0 0 1 2.5-2.5H17"/><path d="M19 4.5v15"/>',
  'arrow-right': '<path d="M4.5 12h15M13.5 6l6 6-6 6"/>',
  'arrow-up-right': '<path d="M7 17 17 7M8.5 7H17v8.5"/>',
  external:
    '<path d="M13.5 4.5H19.5V10.5"/><path d="m19.5 4.5-8 8"/><path d="M18 14v4.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10"/>',
  linkedin:
    '<path d="M6.94 5.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.4 8.9h3.1V20H3.4V8.9Zm5.6 0h2.97v1.52h.04c.41-.78 1.43-1.6 2.94-1.6 3.14 0 3.72 2.07 3.72 4.76V20h-3.1v-5.8c0-1.38-.02-3.16-1.93-3.16-1.93 0-2.23 1.51-2.23 3.06V20H9V8.9Z"/>',
  scholar:
    '<path d="M12 3 1.5 9 12 15l8.4-4.8v5.55h1.6V9L12 3ZM5.4 13.2v3.9C5.4 19.35 8.35 21 12 21s6.6-1.65 6.6-3.9v-3.9L12 17.1l-6.6-3.9Z"/>',
  github:
    '<path d="M12 2.5a9.5 9.5 0 0 0-3 18.52c.47.09.65-.21.65-.46v-1.6c-2.65.58-3.2-1.28-3.2-1.28-.44-1.1-1.07-1.4-1.07-1.4-.87-.6.07-.58.07-.58.96.07 1.47.99 1.47.99.85 1.47 2.24 1.05 2.79.8.08-.62.33-1.05.6-1.29-2.12-.24-4.34-1.06-4.34-4.71 0-1.04.37-1.9.98-2.56-.1-.24-.43-1.2.09-2.51 0 0 .8-.26 2.63.98a9.1 9.1 0 0 1 4.78 0c1.82-1.24 2.62-.98 2.62-.98.52 1.31.19 2.27.1 2.51.61.66.98 1.52.98 2.56 0 3.66-2.23 4.47-4.35 4.7.34.3.65.88.65 1.78v2.63c0 .25.17.55.65.46A9.5 9.5 0 0 0 12 2.5Z"/>',
  globe:
    '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17"/><path d="M12 3.5a13 13 0 0 1 0 17 13 13 0 0 1 0-17Z"/>',
  youtube:
    '<path d="M21.6 7.9a2.5 2.5 0 0 0-1.76-1.77C18.25 5.7 12 5.7 12 5.7s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.9C2 9.5 2 12 2 12s0 2.5.4 4.1a2.5 2.5 0 0 0 1.76 1.77c1.59.43 7.84.43 7.84.43s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77C22 14.5 22 12 22 12s0-2.5-.4-4.1ZM10 15.1V8.9l5.2 3.1-5.2 3.1Z"/>',
  mail: '<rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="m3.5 7 8.5 6 8.5-6"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>',
  moon: '<path d="M20 14.2A8.2 8.2 0 0 1 9.8 4 8.5 8.5 0 1 0 20 14.2Z"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="m15.8 15.8 4.2 4.2"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  'file-text':
    '<path d="M14 3.5H7A1.5 1.5 0 0 0 5.5 5v14A1.5 1.5 0 0 0 7 20.5h10a1.5 1.5 0 0 0 1.5-1.5V8Z"/><path d="M14 3.5V8h4.5M9 12.5h6M9 16h6"/>',
  'map-pin':
    '<path d="M12 21s7-5.3 7-10.5a7 7 0 1 0-14 0C5 15.7 12 21 12 21Z"/><circle cx="12" cy="10.5" r="2.6"/>',
  calendar:
    '<rect x="3.5" y="5.5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3.5v4M16 3.5v4"/>',
  sparkle:
    '<path d="M12 3.5 13.9 9l5.6 2-5.6 2-1.9 5.5L10.1 13l-5.6-2 5.6-2Z"/><path d="M18.5 4v3M20 5.5h-3"/>',
}
