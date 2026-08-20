import Reveal from '../ui/Reveal'
import { journey, currentlyExploring } from '../../data/education'

export default function JourneyAndExploring() {
  return (
    <section id="journey" className="relative z-10 px-[5vw] py-[150px] pb-10 max-w-[1180px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        <div>
          <Reveal className="eyebrow mb-4">05 — Development Journey</Reveal>
          <Reveal>
            <h2 className="text-[clamp(1.8rem,3.4vw,2.6rem)] font-display font-semibold mb-3">
              A learning journey, not a resume of expertise.
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-muted text-sm mb-10">
              Programming Fundamentals → Software Development → AI Development → Machine Learning →
              Intelligent Applications.
            </p>
          </Reveal>

          <div className="relative pl-[2.6rem]">
            <div className="absolute left-[6px] top-1.5 bottom-1.5 w-px bg-gradient-to-b from-white/10 to-transparent" />
            {journey.map((step, i) => (
              <Reveal key={step.title} className={i !== journey.length - 1 ? 'pb-10' : ''}>
                <div className="relative">
                  <span className="absolute -left-[2.6rem] top-1 w-[13px] h-[13px] rounded-full bg-bg border-2 border-violet shadow-[0_0_0_4px_rgba(139,124,255,0.12)]" />
                  <h3 className="text-[1.05rem] font-semibold mb-1">{step.title}</h3>
                  <p className="text-muted text-sm">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal className="eyebrow mb-4">06 — Currently Exploring</Reveal>
          <Reveal>
            <h2 className="text-[clamp(1.8rem,3.4vw,2.6rem)] font-display font-semibold mb-3">
              What's next.
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-muted text-sm mb-10">Always learning. Always building.</p>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {currentlyExploring.map((topic) => (
              <Reveal key={topic} className="glass-card rounded-[18px] p-6 text-left">
                <span className="block w-2 h-2 rounded-full bg-cyan mb-4 shadow-[0_0_10px_2px_rgba(76,223,232,0.6)] animate-blink" />
                <h4 className="text-[1rem] font-semibold">{topic}</h4>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
