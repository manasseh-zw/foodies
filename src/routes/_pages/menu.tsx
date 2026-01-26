import { createFileRoute } from '@tanstack/react-router'
import { PageHeader } from '@/components/header'
import { MenuSearch } from '@/components/menu/menu-search'

export const Route = createFileRoute('/_pages/menu')({
  component: MenuPage,
})

function MenuPage() {
  return (
    <div className="flex flex-col bg-background text-foreground font-sans">
      {/* Page title section - pt-20 accounts for fixed navbar height */}
      <PageHeader 
        className="pt-20"
        eyebrow="Feeling Hungry?" 
        title="Discover Our" 
        accent="Menu" 
      />

      {/* Menu Search Experience */}
      <main className="flex-1 container mx-auto py-8 px-4 lg:py-12">
        <MenuSearch />
      </main>
    </div>
  )
}
