import { Project } from '../types'

// Single source of truth for all project content.
// Add a new project by appending another object to this array —
// the grid and the detail modal both read from here automatically.
export const projects: Project[] = [
  {
    slug: 'aida',
    index: '01',
    name: 'AIDA',
    tagline: 'AI Desktop Voice Assistant',
    description:
      'A desktop AI voice assistant project designed to combine voice interaction, intelligent responses, and useful desktop functionality into a single application.',
    problem:
      'Everyday desktop tasks (opening apps, checking information, simple commands) usually require typing and clicking. AIDA explores whether a voice-first interface can make that faster and more natural.',
    solution:
      'A Python-based assistant that listens for a wake word, transcribes speech, interprets the command, and responds with synthesized speech — with a lightweight Tkinter interface showing live status.',
    features: [
      'Wake-word activated listening loop',
      'Ambient noise calibration for more reliable recognition',
      'Text-to-speech responses',
      'Simple, readable Tkinter status interface',
      'Graceful handling of unclear or failed speech input',
    ],
    technologies: ['Python', 'Tkinter', 'Speech Recognition', 'Text-to-Speech', 'AI APIs'],
    process:
      'Started with a basic speech-to-text loop, then iterated on reliability — fixing issues like wake-word case sensitivity, silent exception handling, and listen timeouts that caused the assistant to get stuck.',
    futureImprovements: [
      'More natural conversational responses',
      'Expandable command/plugin system',
      'Better noise handling in busy environments',
    ],
    status: 'In Development',
    githubUrl: '#',
    liveDemoUrl: '#',
  },
  {
    slug: 'truthguard',
    index: '02',
    name: 'TruthGuard',
    tagline: 'AI Image Integrity Concept',
    description:
      'An AI-focused project concept exploring how intelligent systems can help analyze digital image authenticity and integrity.',
    problem:
      'Digitally altered images are increasingly hard to spot by eye. TruthGuard explores whether a model-driven approach can help surface signs of manipulation.',
    solution:
      'A research-stage concept for analyzing image consistency — looking into computer vision techniques that could flag artifacts typically introduced by editing or generation tools.',
    features: [
      'Concept-level image analysis pipeline',
      'Research into common manipulation artifacts',
      'Planned scoring approach for authenticity signals',
    ],
    technologies: ['Python', 'AI', 'Image Processing'],
    process:
      'Currently in the research and planning phase — working through which computer vision approaches are realistic to implement before writing production code.',
    futureImprovements: [
      'Build a working prototype pipeline',
      'Test against a small labeled image set',
      'Add a simple interface to inspect results',
    ],
    status: 'Concept Stage',
    githubUrl: '#',
    liveDemoUrl: null,
  },
  {
    slug: 'ecomind',
    index: '03',
    name: 'EcoMind',
    tagline: 'AI for Environmental Awareness',
    description:
      'An AI project concept focused on using intelligent technology to encourage environmental awareness and explore technology-driven solutions.',
    problem:
      'It can be hard to translate environmental data into something people actually act on day to day.',
    solution:
      'A concept for an AI-assisted tool that turns environmental data into clear, actionable insights, aimed at encouraging more sustainable everyday decisions.',
    features: [
      'Concept-level data analysis approach',
      'Focus on clear, actionable insights over raw data',
      'Environmental-awareness framing throughout',
    ],
    technologies: ['Python', 'AI', 'Data Analysis'],
    process:
      'Early-stage exploration — defining the problem space and what "useful insight" should actually look like before building a working version.',
    futureImprovements: [
      'Source a real environmental dataset to prototype with',
      'Build a first working analysis script',
      'Design a simple way to present insights',
    ],
    status: 'Concept Stage',
    githubUrl: '#',
    liveDemoUrl: null,
  },
]
