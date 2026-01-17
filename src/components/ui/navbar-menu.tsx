'use client'

import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'motion/react'
import * as React from 'react'
import { Button } from '@/components/ui/button'
import { HugeiconsIcon } from '@hugeicons/react'
import { CancelSquareIcon } from '@hugeicons/core-free-icons'

export interface NavbarMenuLink {
  label: string
  href: string
  icon?: React.ReactNode
  external?: boolean
  description?: string
  backgroundImage?: string
  rowSpan?: number
  mapEmbed?: string
}

export interface NavbarMenuSection {
  id: string
  links: NavbarMenuLink[]
  gridLayout?: string
  mapEmbed?: string
  mapLink?: string
  directLink?: string
}

interface NavbarMenuProps {
  activeMenu: string | null
  sections: NavbarMenuSection[]
  onClose?: () => void
}

export function NavbarMenu({ activeMenu, sections, onClose }: NavbarMenuProps) {
  const activeSection = sections.find((section) => section.id === activeMenu)
  const [hoveredMapLink, setHoveredMapLink] = React.useState<string | null>(
    null,
  )

  if (!activeMenu || !activeSection) {
    return null
  }

  if (
    activeSection.directLink ||
    (activeSection.links.length === 0 && !activeSection.mapEmbed)
  ) {
    return null
  }

  if (activeSection.mapEmbed) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="absolute left-0 right-0 top-full mt-2 px-6 flex justify-center"
          onMouseLeave={onClose}
        >
          <div className="bg-background border-2 border-primary rounded-lg overflow-hidden shadow-2xl">
            <iframe
              src={activeSection.mapEmbed}
              width="500"
              height="375"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    )
  }

  return (
    <AnimatePresence>
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
                <div
                  key={`${activeSection.id}-${link.label}`}
                  className="relative"
                  onMouseEnter={() =>
                    link.mapEmbed && setHoveredMapLink(link.label)
                  }
                  onMouseLeave={() => link.mapEmbed && setHoveredMapLink(null)}
                >
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className={cn(
                      'group relative overflow-hidden rounded-lg border border-border bg-card p-4 transition-colors hover:bg-accent hover:border-accent-foreground/20 block',
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
                  {link.mapEmbed && hoveredMapLink === link.label && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-full top-0 ml-4 z-50 pointer-events-none"
                    >
                      <div className="bg-background border-2 border-primary rounded-lg overflow-hidden shadow-2xl">
                        <iframe
                          src={link.mapEmbed}
                          width="400"
                          height="300"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title={link.label}
                        />
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
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
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileOpen, setIsMobileOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial scroll position

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  React.useEffect(() => {
    if (!isMobileOpen) {
      document.body.style.overflow = ''
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isMobileOpen])

  const mobileLinks = React.useMemo(
    () =>
      sections
        .map((section) => ({
          label: section.id
            .split('-')
            .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
            .join(' '),
          href:
            section.directLink ||
            section.mapLink ||
            section.links[0]?.href ||
            '#',
          external: !!section.mapLink,
        }))
        .filter((link) => link.href !== '#'),
    [sections],
  )

  // Always animate based on scroll, regardless of screen size
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 w-full flex justify-center pointer-events-none">
        <motion.header
          className={cn(
            'relative bg-secondary text-secondary-foreground shadow-lg mx-auto pointer-events-auto',
            className,
          )}
          initial={false}
          animate={{
            width: isScrolled ? '100%' : '96%',
            marginTop: isScrolled ? 0 : 16,
            borderTopLeftRadius: isScrolled ? 0 : 24,
            borderTopRightRadius: isScrolled ? 0 : 24,
            borderBottomLeftRadius: isScrolled ? 0 : 24,
            borderBottomRightRadius: isScrolled ? 0 : 24,
          }}
          transition={{
            type: 'spring',
            stiffness: 120,
            damping: 20,
            mass: 1,
          }}
        >
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between relative">
              {/* Left navigation links */}
              <nav className="hidden md:flex items-center gap-6 flex-1">
                {sections.map((section) =>
                  section.mapLink || section.directLink ? (
                    <a
                      key={section.id}
                      href={section.mapLink || section.directLink}
                      target={section.mapLink ? '_blank' : undefined}
                      rel={section.mapLink ? 'noopener noreferrer' : undefined}
                      onMouseEnter={() => setActiveMenu(section.id)}
                      className="text-base font-display font-medium hover:text-primary transition-colors capitalize py-2"
                    >
                      {section.id}
                    </a>
                  ) : (
                    <button
                      key={section.id}
                      onMouseEnter={() => setActiveMenu(section.id)}
                      className="text-base font-display font-medium hover:text-primary transition-colors capitalize py-2"
                    >
                      {section.id}
                    </button>
                  ),
                )}
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
              <button
                className="md:hidden text-secondary-foreground"
                type="button"
                onClick={() => setIsMobileOpen(true)}
                aria-label="Open menu"
              >
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
        </motion.header>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-60 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/40"
              aria-label="Close menu"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              className="absolute inset-2 rounded-[34px] bg-secondary text-secondary-foreground shadow-2xl flex flex-col"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <div className="relative flex items-start px-4 pt-4">
                <div className="text-3xl">{logo}</div>
                <button
                  type="button"
                  onClick={() => setIsMobileOpen(false)}
                  className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center text-white transition-transform active:scale-95"
                  aria-label="Close menu"
                >
                  <HugeiconsIcon icon={CancelSquareIcon} size={32} />
                </button>
              </div>
              <div className="px-4 pt-8">
                <div className="grid gap-6 text-4xl font-display font-black uppercase text-primary">
                  {mobileLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-3 tracking-tight"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      <span>{link.label}</span>
                      <ArrowIcon className="size-4 text-primary" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="mt-auto px-4 pb-4 pt-8">
                <div className="grid gap-3">
                  <a href="/menu" onClick={() => setIsMobileOpen(false)}>
                    <Button className="w-full text-lg" size="lg">
                      Order Now
                    </Button>
                  </a>
                  <a href="/contact" onClick={() => setIsMobileOpen(false)}>
                    <Button
                      variant="outline"
                      className="w-full text-lg border-2 border-secondary-foreground/70 bg-secondary text-secondary-foreground hover:bg-secondary/90"
                      size="lg"
                    >
                      Contact
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M9 6L15 12L9 18"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
