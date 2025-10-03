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
    id: 'twin-oaks',
    title: 'Logo and Website Design',
    tag: 'Branding • Identity • Web Design',
    image: '../images/projects/twin-oaks.png',
    color: '#59D6FF',
    url: '/projects/twin-oaks'
  },
  {
    id: 'burger-bar',
    title: 'The Burger Bar',
    tag: 'Branding • Web Design',
    image: '../images/projects/burger-bar.png',
    color: '#ff1744',
    url: '/projects/burger-bar'
  },
  {
    id: 'wellness',
    title: 'Shopify Redesign',
    tag: 'Development • Design',
    image: '../images/projects/wellness.png',
    color: '#B159FF',
    url: 'projects/wellness'
  },
  {
    id: 'Transmundo',
    title: 'Website Mockup',
    tag: 'UI • UX',
    image: '../images/projects/transmundo.png',
    color: '#00e676',
    url: '/projects/transmundo'
  },
  {
    id: 'design-audit',
    title: 'Design Audit',
    tag: 'UI • UX',
    image: '../images/projects/snapshot.jpg',
    color: '#b2ff59',
    url: '/projects/snapshot'
  }
]
