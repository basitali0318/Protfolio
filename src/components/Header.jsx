import Container from './Container.jsx'
import ThemeToggle from './ThemeToggle.jsx'
import { nav, site } from '../data.js'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg">
      <Container className="flex flex-wrap items-center justify-between gap-x-8 py-2 sm:py-3">
        <a href="#top" className="font-serif text-xl leading-none min-h-[44px] inline-flex items-center">
          {site.name}
        </a>
        <nav aria-label="Primary" className="order-last w-full sm:order-none sm:w-auto">
          <ul className="-mx-2 flex items-center justify-between sm:mx-0 sm:justify-end sm:gap-7">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="link inline-flex min-h-[44px] items-center px-2 text-[0.95rem] sm:px-0"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="hidden sm:block" aria-hidden="true">
              <span className="block h-4 w-px bg-line" />
            </li>
            <li className="hidden sm:block">
              <ThemeToggle />
            </li>
          </ul>
        </nav>
        <div className="sm:hidden">
          <ThemeToggle />
        </div>
      </Container>
    </header>
  )
}
