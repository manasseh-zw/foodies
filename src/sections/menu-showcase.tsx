import { Link } from '@tanstack/react-router'

const showcaseImages = [
  {
    src: '/assets/menu/menu-showcase1.jpg',
    alt: 'Delicious gourmet burger with fresh ingredients',
    className:
      'aspect-7/5 w-[37rem] max-w-none rounded-xl bg-muted object-cover',
  },
  {
    src: '/assets/menu/menu-showcase4.jpg',
    alt: 'Freshly prepared crispy chicken wings',
    className:
      'aspect-4/3 w-[24rem] max-w-none flex-none rounded-xl bg-muted object-cover',
  },
  {
    src: '/assets/menu/menu-showcase3.jpg',
    alt: 'Artisan pizza with premium toppings',
    className:
      'aspect-7/5 w-[37rem] max-w-none flex-none rounded-xl bg-muted object-cover',
  },
  {
    src: '/assets/menu/menu-showcase2.jpg',
    alt: 'Loaded fries with special sauce',
    className:
      'aspect-4/3 w-[24rem] max-w-none rounded-xl bg-muted object-cover',
  },
] as const

export function MenuShowcase() {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-24 lg:py-36">
      {/* Food doodle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'url(/assets/doodle.svg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />

      {/* Top gradient fade - smooth transition from non-doodled section */}
      <div
        className="absolute inset-x-0 top-0 h-32 sm:h-40 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, #FCFAF8 0%, transparent 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 lg:mx-0 lg:max-w-none lg:min-w-full lg:flex-none lg:gap-y-4">
          {/* Text Content */}
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Our Menu
            </h2>
            <p className="mt-6 text-xl/8 text-foreground/80">
              From flame-grilled burgers to crispy pizzas and savory chicken,
              every dish is crafted with passion and the freshest ingredients to
              satisfy your cravings.
            </p>
            <p className="mt-6 text-base/7 text-foreground/70">
              Whether you're in the mood for a quick bite or a full feast, our
              menu has something for everyone. Explore our selection and
              discover your new favorite meal.
            </p>
            <div className="mt-10 flex">
              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-display text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                View Full Menu <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Image Grid */}
          <div className="flex flex-wrap items-start justify-end gap-4 sm:gap-5 lg:contents">
            {/* Top Right Image */}
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                src={showcaseImages[0].src}
                alt={showcaseImages[0].alt}
                loading="lazy"
                decoding="async"
                className={showcaseImages[0].className}
              />
            </div>

            {/* Bottom Row Images */}
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-4 lg:translate-x-16">
              {/* First - Order first on mobile */}
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <img
                  src={showcaseImages[1].src}
                  alt={showcaseImages[1].alt}
                  loading="lazy"
                  decoding="async"
                  className={showcaseImages[1].className}
                />
              </div>

              {/* Second */}
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img
                  src={showcaseImages[2].src}
                  alt={showcaseImages[2].alt}
                  loading="lazy"
                  decoding="async"
                  className={showcaseImages[2].className}
                />
              </div>

              {/* Third - Hidden on smallest screens */}
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img
                  src={showcaseImages[3].src}
                  alt={showcaseImages[3].alt}
                  loading="lazy"
                  decoding="async"
                  className={showcaseImages[3].className}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
