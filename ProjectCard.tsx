import { Github, ExternalLink } from 'lucide-react'
import { Project } from '../../types'

interface Props {
  project: Project
  onViewDetails: (project: Project) => void
}

export default function ProjectCard({ project, onViewDetails }: Props) {
  return (
    <article className="glass-card rounded-[18px]">
      <div className="p-8 pb-6 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 items-start">
        <div className="font-display text-[2.2rem] font-bold text-transparent [-webkit-text-stroke:1px_var(--border-strong)]">
          {project.index}
        </div>
        <div>
          <div className="flex items-center gap-3 mb-1 flex-wrap">
            <h3 className="text-xl font-semibold font-display">{project.name}</h3>
            <span className="font-mono text-[0.7rem] px-2.5 py-1 rounded-full border border-white/10 text-dim">
              {project.status}
            </span>
          </div>
          <p className="text-sm text-cyan mb-2 font-medium">{project.tagline}</p>
          <p className="text-muted text-[0.96rem] max-w-xl">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[0.72rem] text-violet border border-violet/35 bg-violet/[0.07] px-2.5 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex md:flex-col gap-2.5 flex-shrink-0">
          <a
            href={project.githubUrl}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-lg border border-white/15 bg-white/[0.03] hover:border-cyan hover:text-cyan transition-colors"
          >
            <Github size={14} /> GitHub
          </a>
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-lg bg-signal text-bg hover:-translate-y-0.5 transition-transform"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
        </div>
      </div>
      <button
        onClick={() => onViewDetails(project)}
        className="w-full text-left px-8 py-4 border-t border-white/10 flex items-center justify-between text-dim font-mono text-xs uppercase tracking-wide hover:text-cyan transition-colors"
        aria-haspopup="dialog"
      >
        View Project <span aria-hidden="true">→</span>
      </button>
    </article>
  )
}
