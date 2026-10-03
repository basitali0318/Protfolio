import Container from './Container.jsx'
import Reveal from './Reveal.jsx'

// Numbered editorial section: mono index + title on the left, content on the right.
export default function Section({ id, index, title, children }) {
  const headingId = `${id}-title`
  return (
    <section id={id} aria-labelledby={headingId} className="border-t border-line py-16 sm:py-24">
      <Container className="grid gap-8 md:grid-cols-[200px_1fr] md:gap-12">
        <Reveal>
          <p className="label text-accent">{index}</p>
          <h2 id={headingId} className="mt-2 text-3xl sm:text-[2.125rem]">
            {title}
          </h2>
        </Reveal>
        <div className="min-w-0">{children}</div>
      </Container>
    </section>
  )
}
