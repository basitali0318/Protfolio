import { useState } from 'react'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { site } from '../data.js'

// Optional: set VITE_FORM_ENDPOINT (e.g. a Formspree URL) to send messages directly.
// Without it, the form opens the visitor's email app with the message filled in.
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const initial = { name: '', email: '', message: '' }

function validate(values) {
  const errors = {}
  if (values.name.trim().length < 2) errors.name = 'Please enter your name.'
  if (!EMAIL_RE.test(values.email.trim())) errors.email = 'Please enter a valid email address.'
  if (values.message.trim().length < 10) errors.message = 'Please write at least 10 characters.'
  return errors
}

function mailtoHref({ name, email, message }) {
  const subject = `Portfolio enquiry from ${name.trim()}`
  const body = `${message.trim()}\n\n${name.trim()}\n${email.trim()}`
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

function Field({ id, label, error, multiline, ...props }) {
  const Input = multiline ? 'textarea' : 'input'
  return (
    <div>
      <label htmlFor={id} className="label text-muted">
        {label}
      </label>
      <Input
        id={id}
        name={id}
        className={`field ${multiline ? 'min-h-[140px] resize-y' : ''}`}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-accent">
          {error}
        </p>
      )}
    </div>
  )
}

export default function Contact() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: 'idle', text: '' })

  function onChange(e) {
    const next = { ...values, [e.target.name]: e.target.value }
    setValues(next)
    if (errors[e.target.name]) setErrors(validate(next))
  }

  async function onSubmit(e) {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0]
      document.getElementById(first)?.focus()
      return
    }

    if (!FORM_ENDPOINT) {
      window.location.href = mailtoHref(values)
      setStatus({ type: 'ok', text: 'Your email app should open with the message ready to send.' })
      return
    }

    setStatus({ type: 'sending', text: 'Sending...' })
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error(`Request failed with ${res.status}`)
      setValues(initial)
      setStatus({ type: 'ok', text: 'Thanks. Your message was sent and I will reply by email.' })
    } catch {
      setStatus({ type: 'error', text: 'The message could not be sent.' })
    }
  }

  return (
    <Section id="contact" index="05" title="Contact">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <p className="max-w-[40ch] text-lg">
            For roles, projects or questions about my work, email is the fastest way to reach me.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="link-quiet mt-6 inline-block font-serif text-2xl break-all sm:text-[1.75rem]"
          >
            {site.email}
          </a>
          <ul className="mt-8 flex flex-wrap gap-x-8">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link label inline-flex min-h-[44px] items-center"
                >
                  {s.label} <span aria-hidden="true">&nbsp;↗</span>
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="label mt-6 text-muted">{site.location}</p>
        </Reveal>

        <Reveal as="form" onSubmit={onSubmit} noValidate className="space-y-8" aria-label="Contact form">
          <Field
            id="name"
            label="Name"
            autoComplete="name"
            value={values.name}
            onChange={onChange}
            error={errors.name}
            required
          />
          <Field
            id="email"
            label="Email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={onChange}
            error={errors.email}
            required
          />
          <Field
            id="message"
            label="Message"
            multiline
            rows={5}
            value={values.message}
            onChange={onChange}
            error={errors.message}
            required
          />
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <button type="submit" className="btn btn-solid" disabled={status.type === 'sending'}>
              Send message
            </button>
            <p role="status" aria-live="polite" className="text-sm text-muted">
              {status.text}
              {status.type === 'error' && (
                <>
                  {' '}
                  <a href={mailtoHref(values)} className="link-quiet">
                    Send it by email instead
                  </a>
                  .
                </>
              )}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
