import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import BackToTop from './components/Layout/BackToTop'
import CustomCursor from './components/Layout/CustomCursor'
import SignalRail from './components/ui/SignalRail'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Education from './components/sections/Education'
import JourneyAndExploring from './components/sections/JourneyAndExploring'
import GitHubSection from './components/sections/GitHubSection'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <div className="bg-grid" />
      <div className="fixed -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full [background:radial-gradient(circle,rgba(139,124,255,0.16),transparent_65%)] blur-[40px] z-0 pointer-events-none" />
      <div className="fixed -bottom-[15%] -right-[10%] w-[55vw] h-[55vw] rounded-full [background:radial-gradient(circle,rgba(76,223,232,0.11),transparent_65%)] blur-[40px] z-0 pointer-events-none" />

      <CustomCursor />
      <SignalRail />
      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <JourneyAndExploring />
        <GitHubSection />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
