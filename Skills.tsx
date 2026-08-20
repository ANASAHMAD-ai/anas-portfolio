import Reveal from '../ui/Reveal'
import { skillCategories } from '../../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 px-[5vw] py-[150px] pb-10 max-w-[1180px] mx-auto">
      <Reveal className="eyebrow mb-4">02 — Skills</Reveal>
      <Reveal>
        <h2 className="text-[clamp(1.8rem,3.4vw,2.6rem)] font-display font-semibold mb-3">
          What I build with.
        </h2>
      </Reveal>
      <Reveal>
        <p className="text-muted max-w-[560px] mb-12 text-[1.02rem]">
          Grouped by how I actually use them — not arbitrary percentages.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <Reveal className="font-mono text-[0.74rem] uppercase tracking-[0.14em] text-dim mb-4">
              {category.title}
            </Reveal>
            {category.skills.map((skill) => (
              <Reveal key={skill.name} className="glass-card rounded-[18px] p-5 mb-4 flex items-center gap-4">
                <div className="w-[42px] h-[42px] rounded-[10px] flex items-center justify-center bg-white/[0.06] border border-white/10 font-display font-semibold text-[0.85rem] text-cyan flex-shrink-0">
                  {skill.abbr}
                </div>
                <div>
                  <h4 className="text-[0.98rem] font-semibold">{skill.name}</h4>
                  <p className="text-[0.8rem] text-dim">{skill.blurb}</p>
                </div>
              </Reveal>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
