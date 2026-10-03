import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import Tag from './Tag.jsx'
import { projects } from '../data.js'

function ProjectLinks({ title, links }) {
  const items = [
    links.live && { label: 'Live', href: links.live },
    links.github && { label: 'GitHub', href: links.github },
  ].filter(Boolean)
  if (items.length === 0) return null
  return (
    <ul className="mt-5 flex gap-6">
      {items.map((l) => (
        <li key={l.label}>
          <a
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="link label inline-flex min-h-[44px] items-center"
            aria-label={`${title} ${l.label} (opens in new tab)`}
          >
            {l.label} <span aria-hidden="true">&nbsp;↗</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default function Work() {
  return (
    <Section id="work" index="01" title="Selected Work">
      <ol className="border-b border-line">
        {projects.map((p, i) => (
          <Reveal as="li" key={p.title} className="border-t border-line py-8 first:border-t-0 first:pt-0 sm:py-10">
            <article className="grid gap-4 sm:grid-cols-[3rem_1fr]">
              <p className="label pt-2 text-muted" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </p>
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <h3 className="text-2xl sm:text-[1.75rem]">{p.title}</h3>
                  <p className="label text-muted">
                    {p.team && <span className="mr-3 text-accent">Team project</span>}
                    {p.year}
                  </p>
                </div>
                <p className="mt-3 max-w-[60ch]">{p.problem}</p>
                <dl className="mt-4 max-w-[60ch]">
                  <dt className="label text-muted">Outcome</dt>
                  <dd className="mt-1 text-muted">{p.outcome}</dd>
                </dl>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech used">
                  {p.tags.map((t, j) => (
                    <Tag key={`${t}-${j}`}>{t}</Tag>
                  ))}
                </ul>
                <ProjectLinks title={p.title} links={p.links} />
              </div>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
