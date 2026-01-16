import { Link } from '@tanstack/react-router'
import { HomeIcon } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface HeaderProps {
  eyebrow?: string
  title: string
  accent?: string
  className?: string
  showHomeButton?: boolean
}

export function Header({
  eyebrow,
  title,
  accent,
  className,
  showHomeButton = true,
}: HeaderProps) {
  return (
    <div className={cn('relative w-full bg-primary py-24 px-4 overflow-hidden', className)}>
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: 'url(/assets/doodle.svg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />
      {showHomeButton && (
        <div className="fixed right-0 top-24 z-50 group">
          <Link to="/">
            <Button
              variant="secondary"
              className="rounded-l-full shadow-lg h-auto py-4 pl-3 pr-5 text-base font-bold gap-2 animate-in fade-in zoom-in duration-300 transition-transform translate-x-[calc(100%-3rem)] group-hover:translate-x-0"
            >
              <HomeIcon className="w-5 h-5" />
              Home
            </Button>
          </Link>
        </div>
      )}

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        {eyebrow && (
          <p className="text-sm md:text-base font-bold tracking-widest uppercase mb-4 text-foreground/80">
            {eyebrow}
          </p>
        )}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display tracking-normal text-foreground uppercase leading-[0.9] drop-shadow-sm">
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
