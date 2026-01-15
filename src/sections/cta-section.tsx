import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export function CtaSection() {
  return (
    <section className="relative bg-background">
      <div className="relative h-70 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <img
          className="size-full object-cover"
          src="/assets/waiter.jpg"
          alt="Friendly server providing excellent customer service"
        />
      </div>
      <div className="relative mx-auto max-w-7xl py-20 sm:py-32 lg:px-8 lg:py-40">
        <div className="px-6 md:ml-auto md:w-2/3 md:pl-12 lg:w-1/2 lg:pl-20 xl:pl-28">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary">
            Customer Service
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            We&#39;re here to help
          </h2>
          <p className="mt-6 text-base/7 text-foreground/80">
            From your first click to your final bite, our service team keeps
            your experience smooth, warm, and hassle-free.
          </p>
          <p className="mt-6 text-base/7 text-foreground/70">
            Got a question about your order or need a recommendation? We&#39;re
            ready to make it right and get your favorites to you fast.
          </p>
          <div className="mt-8">
            <Link to="/menu">
              <Button
                variant="default"
                size="lg"
                className="text-base font-display"
              >
                Explore the Menu <span aria-hidden="true">&rarr;</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
