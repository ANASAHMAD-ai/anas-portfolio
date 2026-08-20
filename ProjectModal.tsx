import { useEffect, useRef } from 'react'
import { X, Github, ExternalLink } from 'lucide-react'
import { Project } from '../../types'

interface Props {
  project: Project | null
  onClose: () => void
}

/**
 * Accessible project detail modal: problem, solution, features,
 * technologies, process, and future improvements. Closes on Escape
 * or backdrop click, and returns focus to the close button on open.
 */
export default function ProjectModal({ project, onClose }: Props) {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!project) return
    closeBtnRef.current?.focus()

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/12 bg-bg-elevated shadow-2xl">
        <div className="sticky top-0 z-10 flex items-center justify-between px-7 py-5 border-b border-white/10 bg-bg-elevated/95 backdrop-blur">
          <div>
            <p className="font-mono text-[0.7rem] uppercase tracking-widest text-cyan mb-1">
              {project.status}
            </p>
            <h2 id="project-modal-title" className="text-xl font-display font-semibold">
              {project.name} — {project.tagline}
            </h2>
          </div>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            aria-label="Close project details"
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/12 hover:border-cyan hover:text-cyan transition-colors flex-shrink-0"
          >
            <X size={16} />
          </button>
        </div>

        <div className="px-7 py-6 space-y-6 text-sm">
          <section>
            <h3 className="font-mono text-xs uppercase tracking-widest text-dim mb-2">Problem</h3>
            <p className="text-muted leading-relaxed">{project.problem}</p>
          </section>

          <section>
            <h3 className="font-mono text-xs uppercase tracking-widest text-dim mb-2">Solution</h3>
            <p className="text-muted leading-relaxed">{project.solution}</p>
          </section>

          <section>
            <h3 className="font-mono text-xs uppercase tracking-widest text-dim mb-2">Features</h3>
            <ul className="space-y-1.5">
              {project.features.map((f) => (
                <li key={f} className="text-muted flex gap-2">
                  <span className="text-cyan">·</span> {f}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="font-mono text-xs uppercase tracking-widest text-dim mb-2">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[0.72rem] text-violet border border-violet/35 bg-violet/[0.07] px-2.5 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h3 className="font-mono text-xs uppercase tracking-widest text-dim mb-2">Development Process</h3>
            <p className="text-muted leading-relaxed">{project.process}</p>
          </section>

          <section>
            <h3 className="font-mono text-xs uppercase tracking-widest text-dim mb-2">
              Screenshots
            </h3>
            <div className="rounded-xl border border-dashed border-white/15 py-10 text-center text-dim text-xs font-mono">
              Screenshot placeholder — add project images here
            </div>
          </section>

          <section>
            <h3 className="font-mono text-xs uppercase tracking-widest text-dim mb-2">Future Improvements</h3>
            <ul className="space-y-1.5">
              {project.futureImprovements.map((f) => (
                <li key={f} className="text-muted flex gap-2">
                  <span className="text-violet">·</span> {f}
                </li>
              ))}
            </ul>
          </section>

          <div className="flex gap-3 pt-2">
            <a
              href={project.githubUrl}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-lg border border-white/15 hover:border-cyan hover:text-cyan transition-colors"
            >
              <Github size={14} /> GitHub Repository
            </a>
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-lg bg-signal text-bg"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
