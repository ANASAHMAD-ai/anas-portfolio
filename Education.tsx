import Reveal from '../ui/Reveal'
import { education } from '../../data/education'

export default function Education() {
  return (
    <section id="education" className="relative z-10 px-[5vw] py-[150px] pb-10 max-w-[1180px] mx-auto">
      <Reveal className="eyebrow mb-4">04 — Education</Reveal>
      <Reveal>
        <h2 className="text-[clamp(1.8rem,3.4vw,2.6rem)] font-display font-semibold mb-12">
          Academic path.
        </h2>
      </Reveal>

      <div className="relative pl-[2.6rem]">
        <div className="absolute left-[6px] top-1.5 bottom-1.5 w-px bg-gradient-to-b from-white/10 to-transparent" />
        {education.map((item, i) => (
          <Reveal key={item.title} className={i !== education.length - 1 ? 'pb-10' : ''}>
            <div className="relative">
              <span className="absolute -left-[2.6rem] top-1 w-[13px] h-[13px] rounded-full bg-bg border-2 border-violet shadow-[0_0_0_4px_rgba(139,124,255,0.12)]" />
              <p className="font-mono text-[0.72rem] text-cyan uppercase tracking-[0.08em] mb-1.5">
                {item.level}
              </p>
              <h3 className="text-[1.15rem] font-semibold font-display mb-1">{item.title}</h3>
              <p className="text-muted text-[0.92rem]">{item.institution}</p>
              {item.note && <p className="text-dim text-xs mt-1">{item.note}</p>}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
