import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Work from './components/Work.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Work />
        <About />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
