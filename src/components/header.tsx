import { cn } from '@/lib/utils'

interface PageHeaderProps {
  /** Small text above the main title */
  eyebrow?: string
  /** Main title text */
  title: string
  /** Accent text that appears on a new line after the title */
  accent?: string
  className?: string
}

/**
 * PageHeader - A decorative page title section with doodle background.
 * Used for pages like Menu, Contact, etc. to display the page title.
 * Should be used after the main site Header (navbar).
 * Includes pt-20 padding to account for the fixed navbar.
 */
export function PageHeader({
  eyebrow,
  title,
  accent,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn('relative w-full bg-primary pt-24 pb-12 md:pt-28 md:pb-16 px-4 overflow-hidden', className)}>
      {/* Doodle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: 'url(/assets/doodle.svg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        {eyebrow && (
          <p className="text-xs md:text-sm font-bold tracking-widest uppercase mb-3 text-foreground/70">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display tracking-normal text-foreground uppercase leading-[0.9] drop-shadow-sm">
          {title}
          {accent && (
            <>
              <br />
              {accent}
            </>
          )}
        </h1>
      </div>
    </div>
  )
}

// Keep the old name as an alias for backwards compatibility
export { PageHeader as Header }

