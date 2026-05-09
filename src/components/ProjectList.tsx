import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import type { Project } from '../content/projects'

function ProjectItem({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Subtle parallax for the image
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])
  
  // Fade up for the text
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const textY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50])

  return (
    <div ref={ref} className="w-full flex items-center justify-center relative overflow-hidden py-40">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Image Container */}
        <motion.div 
          className="group w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-2xl md:rounded-3xl relative mb-12 shadow-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-white/20 transition-colors duration-500"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.05 }}
        >
          {/* Spotlight Effect div that fades in on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)] transition-opacity duration-500 pointer-events-none z-10" />
          
          <motion.img 
            src={project.image} 
            alt={project.title}
            style={{ y }}
            className="w-full h-[120%] object-cover absolute top-[-10%] left-0"
          />
        </motion.div>

        {/* Text Container */}
        <motion.div 
          style={{ opacity, y: textY }}
          className="w-full text-center md:text-left flex flex-col md:flex-row md:justify-between md:items-end"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-3 text-white">
              {project.title}
            </h2>
            <p className="text-zinc-400 text-sm md:text-base tracking-wide uppercase font-medium">
              {project.tag}
            </p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <a 
              href={project.url}
              className="inline-flex items-center text-sm font-medium uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
            >
              View Case Study
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <section id="work" className="w-full relative z-10">
      {projects.map((project, idx) => (
        <ProjectItem key={project.id} project={project} index={idx} />
      ))}
    </section>
  )
}
