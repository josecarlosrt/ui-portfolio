import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 pt-24 pb-32 max-w-7xl mx-auto relative z-10">
      <div className="max-w-4xl flex flex-col items-center">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter leading-[1.1] mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Senior UX/UI Designer & Web Developer
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
I bridge the gap between design and development by building my own Figma systems into flawless code. React, Astro, Wordpress, Shopify, and Webflow. No handoff friction
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <a 
            href="#work" 
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition-colors duration-300"
          >
            View Work
          </a>
        </motion.div>
      </div>
    </section>
  )
}
