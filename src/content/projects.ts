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
    id: 'bo',
    title: 'Website Redesign',
    tag: 'Product • Photo',
    image: '../images/three.jpg',
    color: '#00e676',
    url: '#'
  },
  {
    id: 'no',
    title: 'Bang & Olufsen',
    tag: 'Product • Photo',
    image: '../images/two.jpg',
    color: '#B159FF',
    url: '#'
  },
  {
    id: 'yes',
    title: 'Bang & Olufsen',
    tag: 'Product • Photo',
    image: '../images/three.jpg',
    color: '#b2ff59',
    url: '#'
  }
]
