import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { experience } from '../data.js'

export default function Experience() {
  return (
    <Section id="experience" index="03" title="Experience">
      <ol className="relative border-l border-line">
        {experience.map((job) => (
          <Reveal as="li" key={job.company} className="relative pb-12 pl-6 last:pb-0 sm:pl-10">
            <span
              className="absolute top-2 -left-[4.5px] h-2 w-2 bg-accent"
              aria-hidden="true"
            />
            <p className="label text-muted">{job.dates}</p>
            <h3 className="mt-2 text-2xl">{job.role}</h3>
            <p className="mt-1 text-muted">
              {job.company}, {job.location}
            </p>
            <ul className="mt-4 max-w-[62ch] space-y-2">
              {job.bullets.map((b) => (
                <li key={b} className="relative pl-5">
                  <span className="absolute top-[0.8em] left-0 h-px w-2.5 bg-muted" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
