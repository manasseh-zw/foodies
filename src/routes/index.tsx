import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import {
  AboutSection,
  CtaSection,
  HeroSection,
  MenuSection,
  MenuShowcase,
  TestimonialsSection,
} from '@/sections'
import { CurveDivider } from '@/components/ui/curve-divider'
import MarqueeDivider from '@/components/ui/marquee-divider'
import { ChatWidget } from '@/components/chat/chat-widget'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Sticky Header - Fixed at top across all sections */}
      <Header />

      <HeroSection />

      {/* Menu Section - Overlaps into hero */}
      <MenuSection />

      {/* Menu Showcase Section */}
      <MenuShowcase />

      <CurveDivider
        flip={true}
        color="fill-primary"
        height={80}
        className="mt-auto"
      />
      <AboutSection />
      <CurveDivider color="fill-primary" height={80} className="mt-auto" />
      <TestimonialsSection />

      <MarqueeDivider
        items={[
          'BURGERS',
          'PIZZA',
          'CHICKEN',
          'WRAPS',
          'SIDES',
          'COMBOS',
          'DESSERTS',
          'DRINKS',
        ]}
        speed="normal"
        backgroundColor="#F6EFE3"
      />
      <CtaSection />
      <Footer />
      <ChatWidget />
    </div>
  )
}
