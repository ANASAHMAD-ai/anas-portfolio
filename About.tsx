import Reveal from '../ui/Reveal'
import { journey } from '../../data/education'

const focusAreas = [
  'Artificial Intelligence',
  'Machine Learning',
  'Python',
  'JavaScript',
  'Software Development',
  'AI-Powered Applications',
  'Problem Solving',
]

export default function About() {
  return (
    <section id="about" className="relative z-10 px-[5vw] py-[150px] pb-10 max-w-[1180px] mx-auto">
      <Reveal className="eyebrow mb-4">01 — About</Reveal>
      <Reveal>
        <h2 className="text-[clamp(1.8rem,3.4vw,2.6rem)] font-display font-semibold mb-4">
          Learning how machines think, one project at a time.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-12">
        <Reveal>
          <p className="text-muted mb-4 text-[1.02rem]">
            I'm an Artificial Intelligence student focused on developing strong foundations in
            programming, AI, and software development. I enjoy learning by building projects and
            experimenting with technologies that can solve real-world problems.
          </p>
          <p className="text-muted mb-6 text-[1.02rem]">
            My work sits at the intersection of software development and applied AI — I like
            taking an idea from a rough concept to something that actually runs, and writing code
            that's clear enough to revisit later.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="font-mono text-[0.76rem] px-3.5 py-2 rounded-full border border-white/10 text-muted"
              >
                {area}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="pl-6 border-l border-white/10 space-y-6">
            {journey.map((step, i) => (
              <div key={step.title} className="relative">
                <span className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-bg border-2 border-violet shadow-[0_0_0_4px_rgba(139,124,255,0.12)]" />
                <p className="font-mono text-[0.7rem] text-cyan uppercase tracking-wide mb-1">
                  Step {i + 1}
                </p>
                <p className="font-semibold text-[0.98rem]">{step.title}</p>
                <p className="text-muted text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
