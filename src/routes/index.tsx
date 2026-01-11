import { Header } from '@/components/layout/header'
import { Button } from '@/components/ui/button'
import { RatingBadge } from '@/components/ui/rating-badge'
import { MenuSection } from '@/sections'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero Section - Full viewport height */}
      <div className=" flex flex-col bg-primary relative">
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: 'url(/assets/doodle.svg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />
        <Header />
        <div className="relative z-10 flex flex-col flex-1">
          <section className="flex-1 flex items-center pt-20 pb-24 sm:pb-28 md:pb-32">
            <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0">
                {/* Left side - Text content */}
                <div className="flex-1 text-center md:text-left relative z-20 md:-mr-24 lg:mr-1">
                  <h1 className="font-serif text-5xl sm:text-5xl lg:text-8xl font-semibold text-primary-foreground leading-none mb-6">
                    Good Bites,
                    <br />
                    Good Vibes
                  </h1>
                  <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-md mx-auto md:mx-0">
                    Fresh ingredients, bold flavors, and unforgettable dining
                    experiences delivered right to your door.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <Button variant="secondary" size="lg" className="text-lg">
                      Order Now
                    </Button>
                    <RatingBadge
                      title="Rated 4.9/5"
                      subtitle="2,500+ happy customers"
                      rating={4.9}
                      theme="light"
                    />
                  </div>
                </div>

                {/* Right side - Burger image */}
                <div className="hidden md:flex flex-1 md:flex-[1.2] justify-center md:justify-end md:pr-0 relative">
                  <img
                    src="/assets/burger&fries&callout.png"
                    alt="Delicious burger"
                    className="w-full md:min-w-[120%] max-w-none md:-mr-[20%] object-contain"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Menu Section - Overlaps into hero */}
      <MenuSection />
    </div>
  )
}
