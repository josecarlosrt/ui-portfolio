import { motion } from 'framer-motion'
import React, { useRef } from 'react'
import type { Project } from '../content/projects'

import { 
  SiFigma, 
  SiShopify, 
  SiWordpress, 
  SiWebflow, 
  SiElementor, 
  SiThreedotjs, 
  SiJavascript
} from 'react-icons/si'

const getTechIcon = (tech: string) => {
  const iconClass = "w-4 h-4"
  switch (tech.toLowerCase()) {
    case 'figma': return <SiFigma className={`${iconClass} text-[#F24E1E]`} />;
    case 'shopify': return <SiShopify className={`${iconClass} text-[#96BF48]`} />;
    case 'wordpress': return <SiWordpress className={`${iconClass} text-[#21759B]`} />;
    case 'webflow': return <SiWebflow className={`${iconClass} text-[#4353FF]`} />;
    case 'elementor': return <SiElementor className={`${iconClass} text-[#92003B]`} />;
    case 'threejs': return <SiThreedotjs className={`${iconClass} text-[#049EF4]`} />;
    case 'javascript': return <SiJavascript className={`${iconClass} text-[#F7DF1E]`} />;
    default: return null;
  }
}

function BentoCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)
  }

  // Bento layout positioning:
  // Card 0 (Transmundo): Wide (md:col-span-2)
  // Card 1 (Unidos Farma): Square (md:col-span-1)
  // Card 2 (Space Media): Tall (md:row-span-2)
  // Card 3 (Ivoni Beauty): Wide (md:col-span-2)
  // Card 4 (Vitality PT): Square (md:col-span-1)
  // Card 5 (Disalco): Square (md:col-span-1)
  let spanClass = "col-span-1 row-span-1"
  if (index === 0) {
    spanClass = "col-span-1 md:col-span-2 md:row-span-1"
  } else if (index === 2) {
    spanClass = "col-span-1 md:row-span-2"
  } else if (index === 3) {
    spanClass = "col-span-1 md:col-span-2 md:row-span-1"
  }

  const isWide = index === 0 || index === 3
  const isTall = index === 2

  // Convert Hex to RGB for colored spotlight & glow
  const hexToRgb = (hex?: string) => {
    if (!hex) return '255, 255, 255';
    const cleanHex = hex.replace('#', '');
    const num = parseInt(cleanHex, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return `${r}, ${g}, ${b}`;
  }

  const rgbColor = hexToRgb(project.color);

  return (
    <motion.a
      href={project.url}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:border-[rgba(var(--brand-color-rgb),0.35)] flex flex-col justify-between cursor-pointer ${spanClass}`}
      style={{
        '--brand-color': project.color || '#fff',
        '--brand-color-rgb': rgbColor,
      } as React.CSSProperties}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
      whileHover={{ 
        y: -4,
        boxShadow: `0 20px 40px rgba(var(--brand-color-rgb), 0.15), 0 1px 1px rgba(255,255,255,0.05)`
      }}
    >
      {/* Brand-Colored Mouse-Tracking Spotlight */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
        style={{
          background: `radial-gradient(320px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(var(--brand-color-rgb), 0.15), transparent 80%)`,
        }}
      />

      {/* Hover Tech Stack Badge */}
      <div className="absolute top-4 right-4 z-30 flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 opacity-0 translate-y-[-8px] scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 ease-out pointer-events-none">
        <span className="text-[10px] text-zinc-400 font-medium tracking-wide uppercase mr-1 select-none">Stack</span>
        <div className="flex gap-1.5 items-center">
          {project.tech.map(t => (
            <div key={t} title={t.toUpperCase()} className="flex items-center justify-center">
              {getTechIcon(t)}
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Content Structure based on layout shape */}
      {isWide ? (
        <div className="flex flex-col md:flex-row h-full w-full justify-between items-stretch">
          {/* Text Details (Left 45%) */}
          <div className="flex flex-col justify-between p-6 md:p-8 w-full md:w-[45%] h-full z-20 relative select-none">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[9px] uppercase tracking-wider text-zinc-400 font-semibold bg-white/5 border border-white/10 rounded-full px-2 py-0.5">
                  {project.duration}
                </span>
                <span className="text-[9px] uppercase tracking-wider text-[rgba(var(--brand-color-rgb),0.85)] font-bold">
                  {project.role}
                </span>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-white mb-2 group-hover:text-[var(--brand-color)] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed line-clamp-3">
                {project.summary}
              </p>
            </div>
            
            <span className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors duration-300 mt-6">
              View Case Study
              <svg className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>

          {/* Image Container (Right 55%, bleeding out bottom-right) */}
          <div className="relative md:absolute md:right-0 md:bottom-0 w-full md:w-[52%] h-48 md:h-[90%] overflow-hidden rounded-t-2xl md:rounded-t-none md:rounded-tl-3xl border-t border-white/10 md:border-l z-10">
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent z-20 pointer-events-none md:-left-1" />
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover object-left-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </div>
      ) : isTall ? (
        <div className="flex flex-col h-full w-full justify-between items-stretch">
          {/* Image Container (Top 55%) */}
          <div className="relative w-full h-[52%] overflow-hidden border-b border-white/10 z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]/80 z-20 pointer-events-none" />
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Text Details (Bottom 45%) */}
          <div className="flex flex-col justify-between p-6 md:p-8 h-[48%] z-20 relative select-none">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[9px] uppercase tracking-wider text-zinc-400 font-semibold bg-white/5 border border-white/10 rounded-full px-2 py-0.5">
                  {project.duration}
                </span>
                <span className="text-[9px] uppercase tracking-wider text-[rgba(var(--brand-color-rgb),0.85)] font-bold">
                  {project.role}
                </span>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-white mb-2 group-hover:text-[var(--brand-color)] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed line-clamp-4">
                {project.summary}
              </p>
            </div>

            <span className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors duration-300 mt-6">
              View Case Study
              <svg className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-full w-full justify-between items-stretch">
          {/* Image Container (Top 48%) */}
          <div className="relative w-full h-[48%] overflow-hidden border-b border-white/10 z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]/80 z-20 pointer-events-none" />
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Text Details (Bottom 52%) */}
          <div className="flex flex-col justify-between p-5 md:p-6 h-[52%] z-20 relative select-none">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[9px] uppercase tracking-wider text-zinc-400 font-semibold bg-white/5 border border-white/10 rounded-full px-2 py-0.5">
                  {project.duration}
                </span>
                <span className="text-[9px] uppercase tracking-wider text-[rgba(var(--brand-color-rgb),0.85)] font-bold">
                  {project.role}
                </span>
              </div>
              <h3 className="text-xl font-medium tracking-tight text-white mb-1 group-hover:text-[var(--brand-color)] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed line-clamp-2">
                {project.summary}
              </p>
            </div>

            <span className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors duration-300 mt-4">
              View Case Study
              <svg className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>
        </div>
      )}
    </motion.a>
  )
}

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <section id="work" className="w-full relative z-10 py-16 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left select-none">
          <motion.p 
            className="text-xs uppercase tracking-widest text-[rgba(255,255,255,0.4)] font-semibold mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Work
          </motion.p>
          <motion.h2 
            className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            className="w-16 h-1 bg-white/20 rounded-full mb-6 md:mx-0 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p 
            className="text-zinc-400 text-sm md:text-base max-w-2xl font-light leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            A showcase of UX case studies, interactive prototypes, and production builds. Hover cards to explore the technologies behind them.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:grid-rows-[340px_340px_340px] auto-rows-auto">
          {projects.map((project, idx) => (
            <BentoCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

