import * as React from 'react'
import { motion, type Transition } from 'motion/react'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaCarouselType } from 'embla-carousel'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/animate-ui/button'
import Marquee from '@/components/ui/marquee'
import { MenuTabs } from './menu-tabs'
import { MenuItemCard } from './menu-item-card'
import { menuCategories } from './menu-data'

const transition: Transition = {
  type: 'spring',
  stiffness: 240,
  damping: 24,
  mass: 1,
}

const marqueeItems = [
  'BRINGING YOU THE BEST IN BURGERS, CHICKEN & PIZZA!',
  '•',
  'FRESH INGREDIENTS DAILY',
  '•',
  'ORDER NOW FOR FAST DELIVERY',
  '•',
  'FOODIES - GOOD BITES, GOOD VIBES',
  '•',
]

type CarouselControls = {
  selectedIndex: number
  scrollSnaps: number[]
  prevDisabled: boolean
  nextDisabled: boolean
  onDotClick: (index: number) => void
  onPrev: () => void
  onNext: () => void
}

function useCarouselControls(
  emblaApi: EmblaCarouselType | undefined,
): CarouselControls {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])
  const [prevDisabled, setPrevDisabled] = React.useState(true)
  const [nextDisabled, setNextDisabled] = React.useState(true)

  const onDotClick = React.useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  )

  const onPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const onNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const updateSelectionState = (api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap())
    setPrevDisabled(!api.canScrollPrev())
    setNextDisabled(!api.canScrollNext())
  }

  const onInit = React.useCallback((api: EmblaCarouselType) => {
    setScrollSnaps(api.scrollSnapList())
    updateSelectionState(api)
  }, [])

  const onSelect = React.useCallback((api: EmblaCarouselType) => {
    updateSelectionState(api)
  }, [])

  React.useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    emblaApi.on('reInit', onInit).on('select', onSelect)

    return () => {
      emblaApi.off('reInit', onInit).off('select', onSelect)
    }
  }, [emblaApi, onInit, onSelect])

  return {
    selectedIndex,
    scrollSnaps,
    prevDisabled,
    nextDisabled,
    onDotClick,
    onPrev,
    onNext,
  }
}

type DotButtonProps = {
  selected?: boolean
  onClick: () => void
}

function DotButton({ selected = false, onClick }: DotButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      layout
      initial={false}
      className={cn(
        'flex cursor-pointer select-none items-center justify-center rounded-full border-none transition-all duration-300',
        selected
          ? 'bg-white w-6 h-2.5'
          : 'bg-white/20 hover:bg-white/40 w-2.5 h-2.5',
      )}
      animate={{
        width: selected ? 24 : 10,
        height: 10,
        opacity: selected ? 1 : 0.5,
      }}
      transition={transition}
    />
  )
}

function MenuCarousel({ className }: { className?: string }) {
  const [activeCategory, setActiveCategory] = React.useState(
    menuCategories[0].id,
  )
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    containScroll: false,
    loop: true,
    slidesToScroll: 1,
  })

  const { selectedIndex, onPrev, onNext } = useCarouselControls(emblaApi)

  const currentCategory = menuCategories.find((c) => c.id === activeCategory)
  const baseItems = currentCategory?.items ?? []

  // Duplicate items to ensure smooth infinite scrolling (3x)
  const items = React.useMemo(() => {
    if (baseItems.length === 0) return []
    return [...baseItems, ...baseItems, ...baseItems].map((item, index) => ({
      ...item,
      uniqueId: `${item.id}-${index}`,
    }))
  }, [baseItems])

  React.useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(baseItems.length, false) // Start at the middle set
    }
  }, [activeCategory, emblaApi, baseItems.length])

  return (
    <div className={cn('w-full bg-secondary', className)}>
      {/* Marquee */}
      <div className="bg-secondary text-secondary-foreground ">
        <Marquee items={marqueeItems} />
      </div>

      {/* Main carousel container */}
      <div className="bg-accent pt-10 pb-6 sm:pt-12 sm:pb-8 rounded-xl">
        {/* Tabs */}
        <div className="flex justify-center mb-8 sm:mb-12 px-4">
          <MenuTabs
            categories={menuCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* Carousel content */}
        <div className="relative [--slide-gap:1.5rem] sm:[--slide-gap:2rem]">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y touch-pinch-zoom ml-[calc(var(--slide-gap)*-1)]">
              {items.map((item, index) => {
                const isActive = index === selectedIndex
                return (
                  <div
                    key={item.uniqueId}
                    className="flex-none pl-(--slide-gap) w-[85vw] sm:w-[340px] md:w-[380px] lg:w-[340px]"
                  >
                    <MenuItemCard item={item} isActive={isActive} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Carousel controller */}
        <div className="flex justify-center mt-6 sm:mt-10 px-4">
          <div className="inline-flex items-center bg-secondary rounded-lg p-1 shadow-2xl">
            {/* Prev Button */}
            <Button
              size="icon-sm"
              variant="ghost"
              onClick={onPrev}
              className="bg-white hover:bg-white/90 text-black rounded-sm h-8 w-8 p-0 mr-2"
            >
              <ChevronLeft className="size-4" />
            </Button>

            {/* Dots */}
            <div className="flex items-center gap-1.5 mx-1">
              {baseItems.map((_, index) => (
                <DotButton
                  key={index}
                  selected={index === selectedIndex % baseItems.length}
                  onClick={() => {
                    // Find the closest instance of this index
                    if (!emblaApi) return
                    const targetIndex = index + baseItems.length // Target the middle set
                    emblaApi.scrollTo(targetIndex)
                  }}
                />
              ))}
            </div>

            {/* Next Button */}
            <Button
              size="icon-sm"
              variant="ghost"
              onClick={onNext}
              className="bg-white hover:bg-white/90 text-black rounded-sm h-8 w-8 p-0 ml-2"
            >
              <ChevronRight className="size-4" />
            </Button>

            {/* Spacer */}
            <div className="w-6 hidden sm:block" />

            {/* View All Button */}
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:flex bg-white hover:bg-white/90 text-black rounded-sm h-8 px-3 gap-1 text-xs font-bold"
            >
              View All
              <ChevronRight className="size-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { MenuCarousel }
