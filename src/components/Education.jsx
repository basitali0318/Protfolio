import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { certifications, education } from '../data.js'

export default function Education() {
  return (
    <Section id="education" index="04" title="Education and Certifications">
      <div className="grid gap-10 md:grid-cols-2 md:gap-12">
        <Reveal>
          <h3 className="label text-muted">Education</h3>
          <ul className="mt-4">
            {education.map((e) => (
              <li key={e.title} className="border-t border-line py-4">
                <p className="font-serif text-xl">{e.title}</p>
                <p className="mt-1">{e.org}</p>
                <p className="mt-1 text-muted">{e.detail}</p>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <h3 className="label text-muted">Certifications</h3>
          <ul className="mt-4">
            {certifications.map((c) => (
              <li key={c.title} className="flex items-baseline justify-between gap-4 border-t border-line py-3">
                <span>{c.title}</span>
                <span className="label shrink-0 text-muted">{c.org}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
