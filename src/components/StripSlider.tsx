import { useRef } from 'react'
import { type Project } from '../content/projects'

export default function StripSlider({ items }: { items: Project[] }) {
  const ref = useRef<HTMLDivElement>(null)

const scrollByPanels = (dir: 1 | -1) => {
    const el = ref.current
    if (!el) return
    const first = el.querySelector('a') as HTMLAnchorElement | null
    const panelWidth = first ? first.clientWidth + 16 /*gap aproximado*/ : el.clientWidth / 4
    el.scrollBy({ left: dir * panelWidth, behavior: 'smooth' })
}


  return (
    <section className="relative h-[80vh]">
      <div
        ref={ref}
        className="flex h-full snap-x snap-mandatory overflow-x-auto scroll-smooth
                  [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
                  gap-4 px-6"
      >
        {items.map((p) => (
          <a
            key={p.id}
            href={p.url ?? '#'}
            className="group relative h-[70%] aspect-square md:aspect-[3/4] shrink-0 snap-start overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
          >
            <img
              src={p.image}
              alt={p.title}
              className="absolute inset-0 h-full w-full object-cover transform-gpu  transition-transform duration-500 ease-out  group-hover:scale-[1.04]"
            />
            <div
              className="absolute inset-0 opacity-80 mix-blend-multiply  transition-opacity duration-300 ease-out  group-hover:opacity-40"
              style={{ backgroundColor: p.color ?? '#111' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b  from-black/10 to-black/60 transition-opacity duration-300  group-hover:from-black/0 group-hover:to-black/40" />
            <div className="absolute bottom-8 left-6 right-6 text-white">
              <h3 className="text-lg font-medium">{p.title}</h3>
              <div className="mt-1 h-px w-10 bg-white/60" />
            </div>
          </a>
        ))}
      </div>


      <div className="absolute inset-y-0 right-4 flex items-center gap-2">
        <button
          onClick={() => scrollByPanels(-1)}
          className="rounded-full bg-white/90 px-3 py-2 text-sm font-medium text-black hover:bg-white"
        >
          ←
        </button>
        <button
          onClick={() => scrollByPanels(1)}
          className="rounded-full bg-white/90 px-3 py-2 text-sm font-medium text-black hover:bg-white"
        >
          →
        </button>
      </div>
    </section>
  )
}
