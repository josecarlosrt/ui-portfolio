export type Project = {
  id: string
  title: string
  tag?: string
  image: string
  color?: string
  url?: string
  tech: string[]
  role: string
  summary: string
  duration: string
}

export const projects: Project[] = [
  {
    id: 'Transmundo',
    title: 'Transmundo',
    tag: 'UI • UX • Wordpress Development',
    image: '../images/projects/tm-cover.webp',
    color: '#00e676',
    url: '/projects/transmundo',
    tech: ['wordpress', 'figma'],
    role: 'Web Designer',
    summary: 'Conceptualized a website redesign for a travel agency modernizing their digital presence with AI planning tools.',
    duration: '4 Weeks'
  },
  {
    id: 'unidos',
    title: 'Unidos Farma',
    tag: 'UI • UX • Elementor Design System',
    image: '../images/projects/unidos-farma-1.webp',
    color: '#9B111E',
    url: '/projects/unidos',
    tech: ['wordpress', 'elementor', 'figma'],
    role: 'UX & Web Designer',
    summary: 'Designed a trust-first visual language, comprehensive UI kit, and high-fidelity wireframes for a regional pharma brand launch.',
    duration: '1 Week'
  },
  {
    id: 'space-media',
    title: 'Space Media',
    tag: 'UI • UX • Design System',
    image: '../images/projects/space-1.webp',
    color: '#481983',
    url: '/projects/space-media',
    tech: ['figma', 'threejs', 'javascript'],
    role: 'Designer & Developer',
    summary: 'Designed and built a creative agency portfolio from scratch, using Three.js 3D renders and experimental layouts.',
    duration: '3 Weeks'
  },
  {
    id: 'ivoni',
    title: 'Ivoni Beauty',
    tag: 'UI • UX • Shopify Design System',
    image: '../images/projects/ivoni-3.webp',
    color: '#E85286',
    url: '/projects/ivoni',
    tech: ['shopify', 'figma'],
    role: 'Brand & UX Designer',
    summary: 'Created a comprehensive packaging and brand identity system and built an immersive e-commerce experience on Shopify.',
    duration: '6 Weeks'
  },
  {
    id: 'vitality',
    title: 'Vitality Physical Therapy',
    tag: 'UI • UX • Webflow Design',
    image: '../images/projects/vt-cover.webp',
    color: '#59D6FF',
    url: '/projects/vitality',
    tech: ['webflow', 'figma'],
    role: 'UX & Webflow Designer',
    summary: 'Developed a custom visual design system in Figma and translated it into a high-performance, pixel-perfect Webflow site.',
    duration: '3 Weeks'
  },
  {
    id: 'disalco',
    title: 'Disalco',
    tag: 'UI • UX • Wordpress Development',
    image: '../images/projects/disalco-cover.webp',
    color: '#b2ff59',
    url: '/projects/disalco',
    tech: ['wordpress', 'elementor', 'figma'],
    role: 'UX & Web Designer',
    summary: 'Expanded a single logo into a full digital identity kit and structured high-fidelity wireframes optimized for rapid development.',
    duration: '1 Week'
  }
]

