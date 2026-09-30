import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import Skills from './sections/Skills/Skills'
import Projects from './sections/Projects/Projects'
import Services from './sections/Services/Services'
import Journey from './sections/Journey/Journey'
import Contact from './sections/Contact/Contact'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <main id="main" onClick={() => menuOpen && setMenuOpen(false)}>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Journey />
      <Contact />
    </main>
    <footer className="site-footer"><a className="wordmark" href="#home">ROY<span>.</span></a><span>Designed & built with curiosity.</span><a href="#home" aria-label="Back to top">Back to top ↑</a></footer>
  </>
}
