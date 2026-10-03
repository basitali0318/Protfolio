import Container from './Container.jsx'
import { hero, site } from '../data.js'

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="pt-14 pb-20 sm:pt-24 sm:pb-28">
      <Container>
        <p className="label text-muted">
          <span className="mr-3 inline-block h-2 w-2 bg-accent align-middle" aria-hidden="true" />
          {hero.eyebrow}
        </p>
        <h1 id="hero-title" className="mt-6 text-5xl font-medium sm:text-7xl lg:text-[5.5rem]">
          {site.name}
        </h1>
        <p className="mt-8 max-w-[24ch] font-serif text-[1.75rem] leading-[1.2] sm:text-4xl lg:text-[2.75rem]">
          {hero.headline}
        </p>
        <p className="mt-6 max-w-[58ch] text-lg text-muted">{hero.supporting}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#work" className="btn btn-solid">
            View Work
          </a>
          <a href={site.resume} className="btn btn-ghost" target="_blank" rel="noreferrer" download>
            Download CV
            <span className="label" aria-hidden="true">
              PDF
            </span>
          </a>
        </div>
      </Container>
    </section>
  )
}
