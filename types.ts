export interface Project {
  slug: string
  index: string
  name: string
  tagline: string
  description: string
  problem: string
  solution: string
  features: string[]
  technologies: string[]
  process: string
  futureImprovements: string[]
  status: 'In Development' | 'Concept Stage'
  githubUrl: string
  liveDemoUrl: string | null
}

export interface EducationItem {
  level: string
  title: string
  institution: string
  note?: string
}

export interface SkillCategory {
  title: string
  skills: { name: string; blurb: string; abbr: string }[]
}

export interface JourneyStep {
  title: string
  description: string
}
