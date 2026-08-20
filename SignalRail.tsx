import { useScrollSpy } from '../../hooks/useScrollSpy'

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

/**
 * Signature element: a vertical "signal trace" that mirrors scroll
 * position like a neural pathway map of the page. Desktop only.
 */
export default function SignalRail() {
  const activeId = useScrollSpy(SECTIONS.map((s) => s.id))

  return (
    <nav
      aria-hidden="true"
      className="hidden lg:flex fixed left-7 top-1/2 -translate-y-1/2 z-40 flex-col items-center"
    >
      <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-white/10" />
      {SECTIONS.map((s) => {
        const active = s.id === activeId
        return (
          <div key={s.id} className="relative w-[26px] h-[26px] flex items-center justify-center">
            <span
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                active ? 'bg-cyan scale-[1.6] shadow-[0_0_10px_2px_rgba(76,223,232,0.7)]' : 'bg-dim'
              }`}
            />
            <span
              className={`absolute left-5 whitespace-nowrap font-mono text-[0.68rem] uppercase tracking-[0.08em] transition-all duration-300 ${
                active ? 'text-cyan opacity-100 translate-x-0' : 'text-dim opacity-0 -translate-x-1.5'
              }`}
            >
              {s.label}
            </span>
          </div>
        )
      })}
    </nav>
  )
}
