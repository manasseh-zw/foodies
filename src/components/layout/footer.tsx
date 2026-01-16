import { Link } from '@tanstack/react-router'
import { ZimbabweFlagIcon } from '@/components/icons'

const navLinks = [
  { label: 'Menu', to: '/menu' },
  { label: 'Locations', to: '/locations' },
  { label: 'About', to: '/about' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Delivery', to: '/delivery' },
  { label: 'Contact', to: '/contact' },
]

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com',
    className: 'text-[#1877F2]',
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.23 0-1.62.77-1.62 1.56V12h2.76l-.44 2.89h-2.32v6.99A10 10 0 0 0 22 12Z"
        />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com',
    className: 'text-[#E1306C]',
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 3.5a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5Zm5.25-3.25a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z"
        />
      </svg>
    ),
  },
  {
    label: 'X',
    href: 'https://x.com',
    className: 'text-black',
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M18.244 2.25h3.308l-7.227 8.26 8.49 11.24h-6.64l-5.21-6.81-5.95 6.81H1.25l7.73-8.84-8.14-10.9h6.8l4.71 6.23 5.89-6.23Z"
        />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com',
    className: 'text-[#FF0000]',
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5a3 3 0 0 0-2.1 2.1A31.8 31.8 0 0 0 0 12a31.8 31.8 0 0 0 .5 5.8a3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.8 31.8 0 0 0 24 12a31.8 31.8 0 0 0-.5-5.8ZM9.6 15.5V8.5L15.8 12l-6.2 3.5Z"
        />
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-16 sm:py-20 lg:px-8">
        <nav
          className="-mb-2 flex flex-wrap justify-center gap-x-10 gap-y-3 text-base font-medium text-foreground/70"
          aria-label="Footer"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-12 flex justify-center gap-x-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={`transition-colors hover:text-foreground ${link.className}`}
            >
              <span className="sr-only">{link.label}</span>
              {link.icon}
            </a>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Foodies. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <ZimbabweFlagIcon className="h-4 w-6" />
            <span>Proudly Zimbabwe</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
