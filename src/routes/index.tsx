import { createFileRoute } from '@tanstack/react-router'
import { Header } from '@/components/layout/header'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary flex-1">
        <div className="container mx-auto px-6 py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Left side - Text content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                Delicious Food,
                <br />
                Delivered Fresh
              </h1>
              <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-md mx-auto md:mx-0">
                Experience the finest flavors crafted with passion and served with love.
              </p>
              <Button 
                variant="secondary" 
                size="lg"
                className="text-base px-8 py-6"
              >
                Order Now
              </Button>
            </div>

            {/* Right side - Burger image */}
            <div className="flex-1 flex justify-center md:justify-end">
              <img
                src="/assets/burger.png"
                alt="Delicious burger"
                className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
