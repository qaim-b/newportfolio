import Hero from '@/components/Hero'
import Journey from '@/components/Journey'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import BeyondEngineering from '@/components/BeyondEngineering'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Journey />
      <Projects />
      <Experience />
      <Skills />
      <BeyondEngineering />
      <Contact />
    </main>
  )
}
