import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    function onScroll() {
      setShow(window.scrollY > 500)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-7 right-7 z-[60] w-[46px] h-[46px] rounded-full border border-white/15 bg-white/[0.06] backdrop-blur flex items-center justify-center transition-all duration-400 hover:border-cyan hover:text-cyan ${
        show ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2.5'
      }`}
    >
      <ArrowUp size={18} />
    </button>
  )
}
