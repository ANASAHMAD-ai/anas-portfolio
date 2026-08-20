import { useState } from 'react'
import Reveal from '../ui/Reveal'
import ProjectCard from '../ui/ProjectCard'
import ProjectModal from '../ui/ProjectModal'
import { projects } from '../../data/projects'
import { Project } from '../../types'

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="relative z-10 px-[5vw] py-[150px] pb-10 max-w-[1180px] mx-auto">
      <Reveal className="eyebrow mb-4">03 — Featured Projects</Reveal>
      <Reveal>
        <h2 className="text-[clamp(1.8rem,3.4vw,2.6rem)] font-display font-semibold mb-3">
          Things I've been building.
        </h2>
      </Reveal>
      <Reveal>
        <p className="text-muted max-w-[560px] mb-12 text-[1.02rem]">
          A few of the projects I've worked on while exploring applied AI. Click into any of them for
          the full write-up.
        </p>
      </Reveal>

      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <Reveal key={project.slug}>
            <ProjectCard project={project} onViewDetails={setActiveProject} />
          </Reveal>
        ))}
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  )
}
