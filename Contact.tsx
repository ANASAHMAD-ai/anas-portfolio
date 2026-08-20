import { useState, FormEvent } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import Reveal from '../ui/Reveal'
import { social } from '../../data/social'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative z-10 px-[5vw] py-[150px] pb-10 max-w-[1180px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        <Reveal>
          <p className="eyebrow mb-4">08 — Contact</p>
          <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-display font-semibold mb-5">
            Let's build something <span className="text-gradient">intelligent.</span>
          </h2>
          <p className="text-muted max-w-[420px] mb-8">
            Have a project in mind, a question, or just want to talk about AI? My inbox is open.
          </p>
          <div className="flex gap-3.5">
            <a
              href={social.github}
              aria-label="GitHub"
              className="w-11 h-11 rounded-[11px] border border-white/10 flex items-center justify-center text-muted hover:border-cyan hover:text-cyan hover:-translate-y-0.5 transition-all"
            >
              <Github size={17} />
            </a>
            <a
              href={social.linkedin}
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-[11px] border border-white/10 flex items-center justify-center text-muted hover:border-cyan hover:text-cyan hover:-translate-y-0.5 transition-all"
            >
              <Linkedin size={17} />
            </a>
            <a
              href={social.email}
              aria-label="Email"
              className="w-11 h-11 rounded-[11px] border border-white/10 flex items-center justify-center text-muted hover:border-cyan hover:text-cyan hover:-translate-y-0.5 transition-all"
            >
              <Mail size={17} />
            </a>
          </div>
        </Reveal>

        <Reveal>
          <form onSubmit={handleSubmit} className="glass-card rounded-[18px] p-9">
            <div className="mb-5">
              <label htmlFor="name" className="block font-mono text-[0.72rem] uppercase tracking-wide text-dim mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full bg-white/[0.03] border border-white/10 rounded-[10px] px-4 py-3.5 text-sm focus:border-cyan outline-none transition-colors"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block font-mono text-[0.72rem] uppercase tracking-wide text-dim mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full bg-white/[0.03] border border-white/10 rounded-[10px] px-4 py-3.5 text-sm focus:border-cyan outline-none transition-colors"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="message" className="block font-mono text-[0.72rem] uppercase tracking-wide text-dim mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Tell me about your project or question..."
                rows={4}
                className="w-full bg-white/[0.03] border border-white/10 rounded-[10px] px-4 py-3.5 text-sm focus:border-cyan outline-none transition-colors resize-y"
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-3.5 rounded-xl text-sm font-semibold bg-signal text-bg hover:-translate-y-0.5 transition-transform"
            >
              Send Message
            </button>
            <p className={`text-xs mt-4 ${submitted ? 'text-cyan' : 'text-dim'}`}>
              {submitted
                ? "Thanks — your message is ready. Connect this form to an email service (e.g. Formspree or a backend endpoint) to start receiving messages."
                : "This form isn't wired to a server yet — it needs a backend or email-forwarding integration before it can send."}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
