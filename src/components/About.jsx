import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import Portrait from './Portrait.jsx'
import { about } from '../data.js'

export default function About() {
  return (
    <Section id="about" index="02" title="About">
      <Reveal className="grid gap-10 md:grid-cols-[1fr_200px] md:items-start lg:grid-cols-[1fr_240px]">
        <div className="max-w-[62ch] space-y-5 text-lg">
          {about.paragraphs.map((text) => (
            <p key={text.slice(0, 24)}>{text}</p>
          ))}
        </div>
        <Portrait className="order-first max-w-[200px] md:order-none md:max-w-none" />
      </Reveal>
      <Reveal as="dl" className="mt-12 grid gap-x-10 gap-y-8 border-t border-line pt-10 sm:grid-cols-2">
        {about.skills.map((s) => (
          <div key={s.group}>
            <dt className="label text-muted">{s.group}</dt>
            <dd className="mt-2">{s.items.join(', ')}</dd>
          </div>
        ))}
      </Reveal>
    </Section>
  )
}
