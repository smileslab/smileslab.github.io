import { getCollection } from 'astro:content'

// Employers of former members, taken from each alumni entry's `now` field
// ("Senior Data Scientist, General Motors" gives "General Motors").
export async function alumniEmployers(): Promise<string[]> {
  const alumni = await getCollection('alumni')
  const names = alumni
    .map((person) => person.data.now?.split(',').pop()?.trim())
    .filter((name): name is string => Boolean(name))
  return [...new Set(names)].sort((a, b) => a.localeCompare(b))
}
