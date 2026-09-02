import raw from '../data/publications.json'

export type RawPublication = {
  title: string
  authors?: string
  venue?: string
  ifValue?: string
  link?: string
  /** Optional; fill this in to enable year grouping and sorting. */
  year?: number | string
}

export type Publication = {
  id: string
  title: string
  authors: string
  /** Venue with any trailing "(2024)" stripped — the year lives in `year`. */
  venue: string
  impactFactor: string | null
  link: string | null
  year: number | null
  /** Lowercased haystack used by the client-side search box. */
  search: string
}

/** Pulls a 4-digit year out of a venue string like "Information Fusion (2024)". */
function extractYear(entry: RawPublication): number | null {
  if (entry.year !== undefined && entry.year !== null && entry.year !== '') {
    const parsed = Number(entry.year)
    if (Number.isFinite(parsed)) return parsed
  }
  const match = entry.venue?.match(/\b(19|20)\d{2}\b/)
  return match ? Number(match[0]) : null
}

function cleanVenue(venue: string | undefined): string {
  if (!venue) return ''
  return venue
    .replace(/\s*[([]\s*(19|20)\d{2}\s*[)\]]\s*/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim()
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 70)
}

export const publications: Publication[] = (raw as RawPublication[]).map(
  (entry, index) => {
    const venue = cleanVenue(entry.venue)
    const authors = (entry.authors ?? '').trim()
    const title = entry.title.trim()

    return {
      id: `${slugify(title)}-${index}`,
      title,
      authors,
      venue,
      impactFactor: entry.ifValue?.trim() || null,
      link: entry.link?.trim() || null,
      year: extractYear(entry),
      search: `${title} ${authors} ${venue}`.toLowerCase(),
    }
  }
)

export const publicationCount = publications.length

/** Distinct venues, most frequent first — drives the venue filter. */
export const venues: { name: string; count: number }[] = Object.entries(
  publications.reduce<Record<string, number>>((acc, publication) => {
    if (!publication.venue) return acc
    acc[publication.venue] = (acc[publication.venue] ?? 0) + 1
    return acc
  }, {})
)
  .map(([name, count]) => ({ name, count }))
  .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name))

/** Years present in the data, newest first. Empty until years are filled in. */
export const years: number[] = [
  ...new Set(
    publications
      .map((publication) => publication.year)
      .filter((year): year is number => year !== null)
  ),
].sort((a, b) => b - a)

/**
 * Highest impact factor on record, used for the home page stat band.
 * Returns a display string rather than a number so "18.16" keeps its shape.
 */
export const topImpactFactor: string | null = publications.reduce<
  string | null
>((best, publication) => {
  if (!publication.impactFactor) return best
  const value = Number.parseFloat(publication.impactFactor)
  if (!Number.isFinite(value)) return best
  if (best === null) return publication.impactFactor
  return value > Number.parseFloat(best) ? publication.impactFactor : best
}, null)
