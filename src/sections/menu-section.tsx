import { MenuCarousel } from '@/components/menu'

export function MenuSection() {
  return (
    <section
      id="menu"
      className="relative z-20 -mt-12 sm:-mt-16 md:-mt-20 pb-8"
    >
      <div className="absolute inset-x-0 top-12 sm:top-16 md:top-20 bottom-0 bg-background -z-10" />
      <div className="px-2 sm:px-6 md:px-10 lg:px-16">
        <MenuCarousel className="rounded-2xl overflow-hidden shadow-xl mx-auto" />
      </div>
    </section>
  )
}
