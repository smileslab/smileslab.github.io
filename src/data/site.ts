/**
 * Single source of truth for site-wide strings, navigation and contact
 * details. Editing this file changes the header, footer, contact page and
 * every SEO tag at once.
 *
 * NOTE: entries marked `TODO:` below are placeholders that need a real value
 * before launch, search the repo for "TODO:" to find them all.
 */

export const site = {
  name: 'SMILES Lab',
  longName:
    'Secure Modeling and Intelligent Learning in Engineering Systems',
  acronymExpanded: 'SMILES',
  tagline: 'Making AI systems you can trust.',
  description:
    'The SMILES Lab at the University of Michigan-Flint builds multimodal, neuro-symbolic AI for multimedia forensics, cybersecurity and clinical decision support.',
  institution: 'University of Michigan-Flint',
  department: 'College of Innovation & Technology',
  url: 'https://smileslab.github.io',
  /** Used for og:image and Twitter cards. Generated at /og.png is out of
   *  scope for now; this points at the lab photo instead. */
  ogImage: '/og-cover.jpg',
} as const

export const contact = {
  // Never rendered as a literal mailto:, see components/EmailLink.astro.
  email: 'drmalik@umich.edu',
  piName: 'Dr. Khalid Mahmood Malik',
  piRole: 'Director, Cyber Security · Professor of Computer Science',
  // TODO: verify the building and room number.
  address: [
    'College of Innovation & Technology',
    'University of Michigan-Flint',
    '303 E. Kearsley Street',
    'Flint, MI 48502, USA',
  ],
  mapQuery: 'University of Michigan-Flint, 303 E Kearsley St, Flint, MI 48502',
} as const

export type NavItem = {
  label: string
  href: string
  /** Marks the nav item as the primary call to action. */
  cta?: boolean
}

export const nav: NavItem[] = [
  { label: 'Research', href: '/research' },
  { label: 'Publications', href: '/publications' },
  { label: 'Team', href: '/team' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
  { label: 'Join us', href: '/join', cta: true },
]

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: 'Research',
    items: [
      { label: 'Projects & funding', href: '/research' },
      { label: 'Publications', href: '/publications' },
      { label: 'News & blog', href: '/news' },
    ],
  },
  {
    title: 'People',
    items: [
      { label: 'Team', href: '/team' },
      { label: 'Alumni', href: '/alumni' },
      { label: 'Gallery', href: '/gallery' },
    ],
  },
  {
    title: 'Connect',
    items: [
      { label: 'Join the lab', href: '/join' },
      { label: 'Contact', href: '/contact' },
      {
        label: 'UM-Flint CIT',
        href: 'https://www.umflint.edu/cit/',
      },
    ],
  },
]

/**
 * Headline numbers shown on the home page. `funding` is the figure the lab
 * quotes publicly across its NSF, MTRAC and BAF awards.
 */
export const stats = [
  { value: '$2M+', label: 'in competitive research funding' },
  { value: '55+', label: 'peer-reviewed publications' },
  { value: '4', label: 'active funded projects' },
  { value: '10', label: 'researchers and students' },
] as const
