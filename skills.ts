import { SkillCategory } from '../types'

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    skills: [
      { name: 'Python', abbr: 'Py', blurb: 'Primary language for AI & scripting' },
      { name: 'C++', abbr: 'C++', blurb: 'Core programming & logic' },
      { name: 'JavaScript', abbr: 'JS', blurb: 'Web interactivity & front-end logic' },
    ],
  },
  {
    title: 'AI & Technology',
    skills: [
      { name: 'Artificial Intelligence', abbr: 'AI', blurb: 'Applied concepts & problem-solving' },
      { name: 'Machine Learning', abbr: 'ML', blurb: 'Model fundamentals & experimentation' },
      { name: 'Generative AI', abbr: 'GenAI', blurb: 'Exploring generative models & tooling' },
      { name: 'AI Applications', abbr: 'App', blurb: 'Turning AI concepts into usable tools' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git & GitHub', abbr: 'Git', blurb: 'Version control & collaboration' },
      { name: 'VS Code', abbr: 'VS', blurb: 'Daily development environment' },
      { name: 'Tkinter', abbr: 'TK', blurb: 'Python desktop interfaces' },
      { name: 'Arduino', abbr: 'Ard', blurb: 'Hardware experimentation' },
    ],
  },
]
