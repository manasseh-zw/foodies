import { MenuCarousel } from '@/components/menu'

export function MenuSection() {
  return (
    <section className="relative z-20 -mt-16 sm:-mt-20 md:-mt-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      <MenuCarousel className="rounded-2xl overflow-hidden shadow-xl max-w-7xl mx-auto" />
    </section>
  )
}
