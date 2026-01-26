import { createFileRoute, Outlet } from '@tanstack/react-router'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

/**
 * Layout route - wraps all pages with the shared site navigation and footer.
 * The underscore prefix makes it a pathless layout.
 */
export const Route = createFileRoute('/_pages')({
  component: LayoutComponent,
})

function LayoutComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Universal site navigation */}
      <Header />
      
      {/* Page content renders here */}
      <div className="flex-1 flex flex-col">
        <Outlet />
      </div>

      {/* Universal footer */}
      <Footer />
    </div>
  )
}
