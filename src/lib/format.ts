/** Shared formatting helpers. */

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'UTC',
})

/** "2 September 2026" -> "September 2, 2026" */
export function formatDate(date: Date): string {
  return dateFormatter.format(date)
}

/** Machine-readable value for <time datetime>. */
export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10)
}

/** Rough reading time for long-form posts. */
export function readingTime(markdown: string): string {
  const words = markdown.trim().split(/\s+/).length
  return `${Math.max(1, Math.round(words / 220))} min read`
}
