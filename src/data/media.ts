// Press coverage of the lab's work. Newest first is applied on the page.
export type MediaItem = {
  outlet: string
  title: string
  /** ISO date (YYYY-MM-DD), or just YYYY when the page shows no date. */
  date: string
  url: string
  /** Short note on which lab work the piece covers. */
  topic?: string
}

export const media: MediaItem[] = [
  {
    outlet: 'WXYZ-TV Detroit (Channel 7)',
    title:
      'AI scams on the rise: Michigan residents conned by deepfakes and cloned voices',
    date: '2026-05-11',
    url: 'https://www.wxyz.com/news/ai-scams-on-the-rise-michigan-residents-conned-by-deepfakes-and-cloned-voices',
    topic: 'Deepfake and voice-cloning scams',
  },
  {
    outlet: 'Look to Michigan, University of Michigan',
    title: 'The Michigan Deepfake Resilience Hub',
    date: '2026',
    url: 'https://looktomichigan.umich.edu/sif-projects/the-michigan-deepfake-resilience-hub/',
    topic: 'Strategic Initiative Fund project',
  },
  {
    outlet: 'The University Record',
    title: 'MEDC, U-M award $1.8M for biomedical research projects',
    date: '2024-03-21',
    url: 'https://record.umich.edu/articles/medc-u-m-award-1-8m-for-biomedical-research-projects/',
    topic: 'MTRAC Life Sciences award for StrokeAssist',
  },
  {
    outlet: 'FOX 2 Detroit',
    title: "Deepfakes made by artificial intelligence can imitate anyone's voice",
    date: '2023-08-04',
    url: 'https://www.fox2detroit.com/news/deepfakes-made-by-artificial-intelligence-can-imitate-anyones-voice-including-fox-2s-own-talent',
    topic: 'Audio deepfake detection',
  },
  {
    outlet: 'Detroit Free Press',
    title: "Michigan's members of Congress address the threat of deepfakes",
    date: '2019-12-24',
    url: 'https://www.freep.com/story/news/local/michigan/2019/12/24/deepfakes-michigan-members-of-congress-address-threat/2679222001/',
    topic: 'Deepfakes and policy',
  },
]
