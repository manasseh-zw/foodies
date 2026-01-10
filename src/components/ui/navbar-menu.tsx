'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'

export interface NavbarMenuLink {
  label: string
  href: string
  icon?: React.ReactNode
  external?: boolean
  description?: string
  backgroundImage?: string
  rowSpan?: number
}

export interface NavbarMenuSection {
  id: string
  links: NavbarMenuLink[]
  gridLayout?: string
}

interface NavbarMenuProps {
  activeMenu: string | null
  sections: NavbarMenuSection[]
  onClose?: () => void
}

export function NavbarMenu({ activeMenu, sections, onClose }: NavbarMenuProps) {
  const activeSection = sections.find((section) => section.id === activeMenu)

  return (
    <AnimatePresence>
      {activeMenu && activeSection && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="absolute left-0 right-0 top-full mt-2 px-6"
          onMouseLeave={onClose}
        >
          <div className="container mx-auto">
            <div className="bg-background border border-border rounded-xl p-6 max-w-4xl">
              <div
                className={cn(
                  'gap-4',
                  activeSection.gridLayout || 'grid grid-cols-2',
                )}
              >
                {activeSection.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className={cn(
                      'group relative overflow-hidden rounded-lg border border-border bg-card p-4 transition-colors hover:bg-accent hover:border-accent-foreground/20',
                      link.rowSpan === 2 && 'row-span-2',
                    )}
                    style={
                      link.backgroundImage
                        ? {
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${link.backgroundImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }
                        : undefined
                    }
                  >
                    <div className="relative z-10">
                      {link.icon && (
                        <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          {link.icon}
                        </div>
                      )}
                      <h3
                        className={cn(
                          'font-medium mb-1',
                          link.backgroundImage && 'text-white',
                        )}
                      >
                        {link.label}
                      </h3>
                      {link.description && (
                        <p
                          className={cn(
                            'text-sm text-muted-foreground',
                            link.backgroundImage && 'text-white/80',
                          )}
                        >
                          {link.description}
                        </p>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

interface NavbarWithMenuProps {
  sections: NavbarMenuSection[]
  logo?: React.ReactNode
  ctaButton?: React.ReactNode
  className?: string
}

export function NavbarWithMenu({
  sections,
  logo,
  ctaButton,
  className,
}: NavbarWithMenuProps) {
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null)

  return (
    <div className="sticky top-0 z-50 w-full pt-4 px-4">
      <header
        className={cn(
          'relative bg-secondary text-secondary-foreground rounded-lg md:rounded-2xl',
          className,
        )}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between relative">
            {/* Left navigation links */}
            <nav className="hidden md:flex items-center gap-6 flex-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onMouseEnter={() => setActiveMenu(section.id)}
                  className="text-base font-medium hover:text-primary transition-colors capitalize py-2"
                >
                  {section.id}
                </button>
              ))}
            </nav>

            {/* Centered Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 shrink-0">
              {logo}
            </div>

            {/* Right CTA */}
            <div className="hidden md:flex items-center flex-1 justify-end">
              {ctaButton}
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden text-secondary-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Dropdown Menu */}
        <NavbarMenu
          activeMenu={activeMenu}
          sections={sections}
          onClose={() => setActiveMenu(null)}
        />
      </header>
    </div>
  )
}
