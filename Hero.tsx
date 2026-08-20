import Reveal from '../ui/Reveal'
import NeuralCanvas from '../ui/NeuralCanvas'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 px-[5vw] max-w-[1180px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 items-center w-full">
        <div>
          <Reveal className="flex items-center gap-2.5 text-muted font-mono text-[0.82rem] mb-6">
            <span className="w-[7px] h-[7px] rounded-full bg-[#4cffb0] shadow-[0_0_8px_2px_rgba(76,255,176,0.7)] animate-blink" />
            Open to AI &amp; software opportunities
          </Reveal>

          <Reveal>
            <h1 className="text-[clamp(2.6rem,6vw,4.4rem)] font-display font-bold leading-[1.04] mb-2">
              Anas <span className="text-gradient">Ahmad</span>
            </h1>
          </Reveal>

          <Reveal>
            <p className="text-[clamp(1.1rem,2vw,1.4rem)] text-muted font-medium font-display mb-6">
              Artificial Intelligence Student &amp; Aspiring AI Developer
            </p>
          </Reveal>

          <Reveal>
            <p className="text-muted max-w-[480px] mb-10 text-[1.02rem]">
              I'm an Artificial Intelligence student passionate about building intelligent software,
              learning emerging technologies, and turning ideas into practical solutions.
            </p>
          </Reveal>

          <Reveal className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold bg-signal text-bg hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-8px_rgba(139,124,255,0.55)] transition-all"
            >
              Explore My Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold border border-white/15 bg-white/[0.03] hover:border-cyan hover:text-cyan hover:-translate-y-0.5 transition-all"
            >
              Let's Connect
            </a>
          </Reveal>
        </div>

        <Reveal>
          <NeuralCanvas />
        </Reveal>
      </div>

      <div className="hidden sm:flex absolute bottom-9 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-dim font-mono text-[0.68rem] uppercase tracking-[0.15em]">
        <span>Scroll</span>
        <span className="w-px h-[34px] bg-gradient-to-b from-dim to-transparent" />
      </div>
    </section>
  )
}
