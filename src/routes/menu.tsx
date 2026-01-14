import { createFileRoute } from '@tanstack/react-router'
import { MenuHeader } from '@/components/menu/menu-header'
import { MenuSearch } from '@/components/menu/menu-search'

export const Route = createFileRoute('/menu')({
  component: MenuPage,
})

function MenuPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <MenuHeader />
      
      {/* Menu Search Experience */}
      <main className="container mx-auto py-8 px-4 lg:py-12">
        <MenuSearch />
      </main>
    </div>
  )
}
