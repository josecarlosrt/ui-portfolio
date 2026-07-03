import { motion } from 'framer-motion'

// ─── Re-used easing (same as the rest of the site) ───────────────────────────
const ease = [0.16, 1, 0.3, 1] as const

// ─── Section header sub-component ─────────────────────────────────────────────
function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <>
      <motion.p
        className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-4"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="w-16 h-1 bg-white/20 rounded-full mb-16"
        initial={{ width: 0 }}
        whileInView={{ width: 64 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease }}
      />
    </>
  )
}

// ─── Toolbox data ─────────────────────────────────────────────────────────────
const toolbox = [
  {
    label: 'Design',
    color: '#a78bfa',
    items: [
      'Figma',
      'Design Systems',
      'Wireframing & Prototyping',
      'UX/UI Audits',
      'CRO',
      'Typography & Visual Hierarchy',
    ],
  },
  {
    label: 'Build',
    color: '#67e8f9',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'React & Next.js',
      'Astro',
      'Technical SEO',
      'Core Web Vitals',
    ],
  },
  {
    label: 'Platforms',
    color: '#86efac',
    items: ['Webflow', 'Shopify', 'WordPress', 'Sanity', 'Strapi'],
  },
]

// ─── "How I Work" steps ───────────────────────────────────────────────────────
const steps = [
  {
    num: '01',
    heading: 'Understand & audit',
    body: 'Heuristic evaluations, user flows, and IA mapping before any pixels move.',
  },
  {
    num: '02',
    heading: 'Design the system',
    body: 'Tokens, components, and responsive layouts in Figma, built to be implemented, not just admired.',
  },
  {
    num: '03',
    heading: 'Ship it',
    body: 'Production builds in React, Astro, WordPress, or Shopify, optimized for Core Web Vitals from day one.',
  },
]

// ─── "My Path" blocks ─────────────────────────────────────────────────────────
const path = [
  {
    heading: 'From pixels to systems',
    body: 'I started in graphic design and spent my early career producing websites at high volume, at one point shipping a site per day. That pace taught me two things: strong visual fundamentals under pressure, and that good systems beat heroic effort every time.',
  },
  {
    heading: 'Leading design at scale',
    body: 'At PartnerHero I led a team of 12 web professionals, running design reviews, UX/UI audits, and technical QA. I built and maintained the design systems, component libraries, and style guides that kept a high-volume operation consistent, and learned how to give feedback that makes work better without slowing it down.',
  },
  {
    heading: 'Designing what I build, building what I design',
    body: 'Today I focus on UX/UI work end to end: auditing existing experiences, restructuring information architecture around user goals, designing systems in Figma, and implementing them in production code. Performance is part of the design, I treat Core Web Vitals, accessibility, and technical SEO as UX decisions, not afterthoughts.',
  },
]

// ─── Download icon ────────────────────────────────────────────────────────────
function DownloadIcon() {
  return (
    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
      />
    </svg>
  )
}

// ─── Main component ────────────────────────────────────────────────────────────
export default function AboutContent() {
  return (
    <div className="text-white">

      {/* ─── 1. Hero / Intro ─────────────────────────────────────────────── */}
      <section className="min-h-screen flex items-center px-6 md:px-12 pt-28 pb-20 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center w-full">

          {/* Portrait — left on desktop */}
          <motion.div
            className="order-2 md:order-1 flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease }}
          >
            <div className="relative w-full max-w-sm">
              <div
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
                style={{ aspectRatio: '1 / 1' }}
              >
                <img
                  src="/images/about/jose-portrait.webp"
                  alt="Jose Rivera, UX/UI designer and developer"
                  width={480}
                  height={480}
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  fetchPriority="high"
                />
                {/* Subtle gradient overlay for visual polish */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 via-transparent to-transparent pointer-events-none" />
              </div>
              {/* Decorative glow border */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Text — right on desktop */}
          <div className="order-1 md:order-2 flex flex-col gap-6">
            <motion.p
              className="text-xs uppercase tracking-widest text-white/40 font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
            >
              About
            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter leading-[1.1] text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
            >
              Hi, I'm Jose, I design interfaces and then I build them.
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-zinc-400 font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.2 }}
            >
              I'm a bilingual UX/UI designer and front-end developer from San Pedro Sula, Honduras, with 9+ years bridging the gap between design and code. I create design systems in Figma and ship them myself in React, Astro, WordPress, and Shopify, which means no handoff friction, no "that's not what the mockup looked like," and interfaces that are designed with real implementation constraints in mind.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── 2. My Path ──────────────────────────────────────────────────── */}
      <section className="relative z-10 py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Background" title="My Path" />

          {/* Timeline-style cards */}
          <div className="flex flex-col gap-0">
            {path.map((block, i) => (
              <motion.div
                key={block.heading}
                className="relative pl-8 md:pl-16 pb-12 last:pb-0 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, ease, delay: i * 0.1 }}
              >
                {/* Vertical connector line */}
                {i < path.length - 1 && (
                  <div className="absolute left-[11px] md:left-[27px] top-6 bottom-0 w-px bg-white/10" />
                )}
                {/* Dot */}
                <div className="absolute left-0 md:left-4 top-1.5 w-3 h-3 rounded-full border-2 border-white/30 bg-[#0a0a0a] group-hover:border-white/60 transition-colors duration-300" />

                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] backdrop-blur-sm p-6 md:p-8 hover:border-white/15 transition-colors duration-300">
                  <h3 className="text-lg md:text-xl font-medium tracking-tight text-white mb-3">
                    {block.heading}
                  </h3>
                  <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
                    {block.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. How I Work ───────────────────────────────────────────────── */}
      <section className="relative z-10 py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Process" title="How I Work" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="group relative rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8 hover:border-white/20 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, ease, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                {/* Step number */}
                <span className="block text-5xl font-medium tracking-tighter text-white/[0.08] mb-6 select-none">
                  {step.num}
                </span>
                <h3 className="text-lg font-medium tracking-tight text-white mb-3">
                  {step.heading}
                </h3>
                <p className="text-sm text-zinc-400 font-light leading-relaxed">
                  {step.body}
                </p>
                {/* Connector line between cards (desktop only) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-px bg-white/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. Toolbox ──────────────────────────────────────────────────── */}
      <section className="relative z-10 py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Skills & Tools" title="Toolbox" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {toolbox.map((group, gi) => (
              <motion.div
                key={group.label}
                className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, ease, delay: gi * 0.1 }}
              >
                {/* Category label with accent colour */}
                <span
                  className="block text-[10px] uppercase tracking-widest font-bold mb-5"
                  style={{ color: group.color }}
                >
                  {group.label}
                </span>
                {/* Tag chips — same pill style as the ProjectLayout tools list */}
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 font-light tracking-wide"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. Beyond the Screen ────────────────────────────────────────── */}
      <section className="relative z-10 py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-10 md:p-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease }}
          >
            <p className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-4">
              The human bit
            </p>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-6">
              Beyond the Screen
            </h2>
            <p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed max-w-3xl">
              When I'm not designing or shipping, I'm probably at home watching YouTube videos or just chatting with my wife, getting tackled by our four boxer dogs, or out training for a half marathon. Beyond that, I'm co-building <span className="text-white font-medium">Space Media</span>, a creative agency I run with my brother. I work in English and Spanish, often in the same sentence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── 6. CTA ──────────────────────────────────────────────────────── */}
      <section className="relative z-10 py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Let's work together
          </motion.p>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-white mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
          >
            Let's build something users actually enjoy.
          </motion.h2>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
          >
            {/* Primary — matches the site's existing filled white button */}
            <a
              href="mailto:josecarlosrt7@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition-colors duration-300"
            >
              Get in touch
            </a>

            <a
              href="/files/jose-rivera-resume.pdf"
              download
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-colors duration-300"
            >
              Download resume
              <DownloadIcon />
            </a>
          </motion.div>

          {/* Social links row */}
          <motion.div
            className="flex justify-center gap-8 mt-10 text-sm text-zinc-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <a
              href="https://www.linkedin.com/in/jose-carlos-rivera-670375197/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/josecarlosrt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub ↗
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
