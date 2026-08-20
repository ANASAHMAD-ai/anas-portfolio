import { EducationItem, JourneyStep } from '../types'

export const education: EducationItem[] = [
  {
    level: 'Diploma',
    title: 'Diploma in Information Technology (DIT)',
    institution: 'Khyber Computer and Vocational College',
  },
  {
    level: 'Intermediate',
    title: 'FSc Computer Science',
    institution: 'Government Degree College Khwazakhela, Swat',
  },
  {
    level: "Bachelor's — In Progress",
    title: 'BS Artificial Intelligence',
    institution: 'University of Management and Technology (UMT), Lahore',
    note: 'Currently pursuing this degree.',
  },
]

export const journey: JourneyStep[] = [
  { title: 'Programming Fundamentals', description: 'Core logic, syntax, and problem-solving.' },
  { title: 'Software Development', description: 'Turning exercises into small, working tools.' },
  { title: 'AI Development', description: 'Started exploring how intelligent systems are built.' },
  { title: 'Machine Learning', description: 'Digging into model fundamentals and experimentation.' },
  { title: 'Intelligent Applications', description: 'Building projects like AIDA, TruthGuard, and EcoMind.' },
]

export const currentlyExploring = [
  'Python',
  'JavaScript',
  'Machine Learning',
  'Generative AI',
  'AI Agents',
  'Advanced Software Development',
]
