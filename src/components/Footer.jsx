import Container from './Container.jsx'
import { site } from '../data.js'

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <Container>
        <p className="label text-muted">
          © {new Date().getFullYear()} {site.name}
        </p>
      </Container>
    </footer>
  )
}
