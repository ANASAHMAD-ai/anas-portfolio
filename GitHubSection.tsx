import { Github, ExternalLink } from 'lucide-react'
import Reveal from '../ui/Reveal'
import { social } from '../../data/social'
import { projects } from '../../data/projects'

/**
 * Static placeholder repo cards, built from the same project data used
 * in the Projects section. To go live, replace this with a fetch to
 * https://api.github.com/users/<username>/repos and map the response
 * into the same card shape.
 */
export default function GitHubSection() {
  return (
    <section id="github" className="relative z-10 px-[5vw] py-[150px] pb-10 max-w-[1180px] mx-auto">
      <Reveal className="eyebrow mb-4">07 — GitHub</Reveal>
      <Reveal>
        <h2 className="text-[clamp(1.8rem,3.4vw,2.6rem)] font-display font-semibold mb-3">
          Explore My Code.
        </h2>
      </Reveal>
      <Reveal>
        <p className="text-muted max-w-[560px] mb-10 text-[1.02rem]">
          I believe the best way to learn technology is to build, experiment, and share.
        </p>
      </Reveal>

      <Reveal>
        <a
          href={social.github}
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold border border-white/15 bg-white/[0.03] hover:border-cyan hover:text-cyan transition-colors mb-10"
        >
          <Github size={16} /> View GitHub Profile
        </a>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {projects.map((project) => (
          <Reveal key={project.slug} className="glass-card rounded-[18px] p-6">
            <div className="flex items-center justify-between mb-3">
              <Github size={16} className="text-dim" />
              <span className="font-mono text-[0.68rem] text-dim uppercase">{project.status}</span>
            </div>
            <h4 className="font-semibold mb-1.5">{project.name}</h4>
            <p className="text-muted text-sm mb-4">{project.tagline}</p>
            <a
              href={project.githubUrl}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan"
            >
              View repository <ExternalLink size={12} />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
