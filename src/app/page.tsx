import Hero from '@/components/sections/Hero'
import AboutMe from '@/components/sections/AboutMe'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Education from '@/components/sections/Education'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </main>
  )
}
