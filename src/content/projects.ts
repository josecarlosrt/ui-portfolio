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
    tag: 'UI • UX • Website Mockup',
    image: '../images/projects/transmundo.png',
    color: '#00e676',
    url: '/projects/transmundo'
  },
  {
    id: 'snapshot',
    title: 'Snapshot',
    tag: 'UI • UX • Design Audit',
    image: '../images/projects/snapshot.jpg',
    color: '#b2ff59',
    url: '/projects/snapshot'
  },
  {
    id: 'iwire',
    title: 'iWire',
    tag: 'UI • UX • Web Design',
    image: '../images/projects/iwire-cover.png', // Fallback to an existing image if iWire is missing
    color: '#59D6FF',
    url: '/projects/iwire'
  }
]
