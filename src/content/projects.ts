export type Project = {
  id: string
  title: string
  tag?: string
  image: string
  color?: string
  url?: string
}

export const projects: Project[] = [
  {
    id: 'Transmundo',
    title: 'Transmundo',
    tag: 'UI • UX • Wordpress Development',
    image: '../images/projects/tm-cover.webp',
    color: '#00e676',
    url: '/projects/transmundo'
  },
  {
    id: 'snapshot',
    title: 'Snapshot',
    tag: 'UI • UX • Webflow Design Audit',
    image: '../images/projects/snapshot.jpg',
    color: '#b2ff59',
    url: '/projects/snapshot'
  },
  {
    id: 'vitality',
    title: 'Vitality Physical Therapy',
    tag: 'UI • UX • Webflow Design',
    image: '../images/projects/vt-cover.webp', // Fallback to an existing image if iWire is missing
    color: '#59D6FF',
    url: '/projects/vitality'
  },
  {
    id: 'disalco',
    title: 'Disalco',
    tag: 'UI • UX • Wordpress Development',
    image: '../images/projects/disalco-cover.webp',
    color: '#b2ff59',
    url: '/projects/disalco'
  }
]
