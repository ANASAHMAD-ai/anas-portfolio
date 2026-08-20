import { Github, Linkedin, Mail } from 'lucide-react'
import { social } from '../../data/social'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 px-[5vw] py-10 border-t border-white/10">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-display font-semibold text-sm">AA — Anas Ahmad</p>
          <p className="text-dim text-xs mt-1">Artificial Intelligence Student &amp; Aspiring AI Developer</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={social.github}
            aria-label="GitHub"
            className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-muted hover:border-cyan hover:text-cyan transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href={social.linkedin}
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-muted hover:border-cyan hover:text-cyan transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={social.email}
            aria-label="Email"
            className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-muted hover:border-cyan hover:text-cyan transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>

      <p className="text-dim text-xs mt-8">© {year} Anas Ahmad. All rights reserved.</p>
    </footer>
  )
}
