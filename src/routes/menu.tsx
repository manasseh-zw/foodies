import { createFileRoute } from '@tanstack/react-router'
import { Header } from '@/components/header'
import { MenuSearch } from '@/components/menu/menu-search'
import { Footer } from '@/components/layout/footer'

export const Route = createFileRoute('/menu')({
  component: MenuPage,
})

function MenuPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header eyebrow="Feeling Hungry?" title="Discover Our" accent="Menu" />

      {/* Menu Search Experience */}
      <main className="sticky  container mx-auto py-8 px-4 lg:py-12">
        <MenuSearch />
      </main>
      <Footer />
    </div>
  )
}
