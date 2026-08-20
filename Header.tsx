import { useEffect, useState, MouseEvent } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { social } from '../../data/social'

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [cvNote, setCvNote] = useState(false)
  const activeId = useScrollSpy(LINKS.map((l) => l.id))

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleCvClick(e: MouseEvent) {
    if (!social.cvUrl) {
      e.preventDefault()
      setCvNote(true)
      setTimeout(() => setCvNote(false), 2500)
    }
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[100] px-[5vw] py-[18px] flex items-center justify-between backdrop-blur-xl bg-bg/55 border-b transition-colors ${
        scrolled ? 'border-white/10' : 'border-transparent'
      }`}
    >
      <a
        href="#home"
        aria-label="Anas Ahmad — home"
        className="relative w-[42px] h-[42px] rounded-[10px] flex items-center justify-center font-display font-bold text-sm border border-white/15 bg-white/[0.035]"
      >
        AA
        <span className="absolute -inset-px rounded-[11px] bg-signal opacity-55 animate-pulse-ring [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [mask-composite:exclude] p-px pointer-events-none" />
      </a>

      <nav className="hidden md:block">
        <ul className="flex items-center gap-9">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`relative text-[0.88rem] font-medium py-1 transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-signal after:transition-all after:duration-300 ${
                  activeId === link.id
                    ? 'text-ink after:w-full'
                    : 'text-muted after:w-0 hover:text-ink hover:after:w-full'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="hidden md:flex items-center gap-3 relative">
        <a
          href={social.cvUrl ?? '#'}
          onClick={handleCvClick}
          download={!!social.cvUrl}
          className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg border border-white/15 bg-white/[0.03] hover:border-cyan hover:text-cyan transition-colors"
        >
          <Download size={13} /> Download CV
        </a>
        {cvNote && (
          <span className="absolute top-full mt-2 right-0 text-[0.7rem] font-mono text-dim whitespace-nowrap bg-bg-elevated border border-white/10 px-2.5 py-1.5 rounded-md">
            CV coming soon
          </span>
        )}
      </div>

      <button
        className="md:hidden z-[110] w-[26px] flex flex-col items-center justify-center text-ink"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav
        className={`md:hidden fixed inset-y-0 right-0 w-[min(78vw,340px)] bg-bg-elevated border-l border-white/10 pt-24 px-9 z-[105] transition-transform duration-500 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col items-start gap-6">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className={`text-base font-medium ${activeId === link.id ? 'text-cyan' : 'text-muted'}`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={social.cvUrl ?? '#'}
              onClick={(e) => {
                handleCvClick(e)
                setMenuOpen(false)
              }}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-lg border border-white/15 mt-2"
            >
              <Download size={13} /> Download CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
