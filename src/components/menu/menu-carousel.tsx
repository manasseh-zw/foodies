'use client'

import * as React from 'react'
import { motion, type Transition } from 'motion/react'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaCarouselType } from 'embla-carousel'
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'

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
  label: string
  onClick: () => void
}

function DotButton({ selected = false, label, onClick }: DotButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      layout
      initial={false}
      className="flex cursor-pointer select-none items-center justify-center rounded-lg border-none bg-secondary-foreground/20 text-secondary-foreground text-sm"
      animate={{
        width: selected ? 72 : 10,
        height: selected ? 28 : 10,
        backgroundColor: selected
          ? 'var(--color-primary)'
          : 'rgba(255,255,255,0.2)',
      }}
      transition={transition}
    >
      <motion.span
        layout
        initial={false}
        className="block whitespace-nowrap px-3 py-1 text-primary-foreground"
        animate={{
          opacity: selected ? 1 : 0,
          scale: selected ? 1 : 0,
          filter: selected ? 'blur(0)' : 'blur(4px)',
        }}
        transition={transition}
      >
        {label}
      </motion.span>
    </motion.button>
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

  const {
    selectedIndex,
    scrollSnaps,
    prevDisabled,
    nextDisabled,
    onDotClick,
    onPrev,
    onNext,
  } = useCarouselControls(emblaApi)

  const currentCategory = menuCategories.find((c) => c.id === activeCategory)
  const items = currentCategory?.items ?? []

  React.useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(0, true)
    }
  }, [activeCategory, emblaApi])

  return (
    <div className={cn('w-full', className)}>
      {/* Marquee */}
      <div className="bg-secondary text-secondary-foreground">
        <Marquee items={marqueeItems} />
      </div>

      {/* Main carousel container */}
      <div className="bg-accent py-6 sm:py-8">
        {/* Tabs */}
        <div className="flex justify-center mb-6 px-4">
          <MenuTabs
            categories={menuCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* Carousel content */}
        <div className="relative [--slide-gap:1rem] sm:[--slide-gap:1.5rem]">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y touch-pinch-zoom ml-[calc(var(--slide-gap)*-1)]">
              {items.map((item, index) => {
                const isActive = index === selectedIndex
                return (
                  <div
                    key={item.id}
                    className="flex-none pl-[var(--slide-gap)] w-[260px] sm:w-[280px] md:w-[300px] lg:w-[280px]"
                  >
                    <MenuItemCard item={item} isActive={isActive} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Carousel controller */}
        <div className="flex justify-center mt-8 px-4">
          <div className="inline-flex items-center gap-3 bg-secondary text-secondary-foreground rounded-xl px-4 py-2.5">
            <Button
              size="icon-sm"
              variant="ghost"
              onClick={onPrev}
              disabled={prevDisabled}
              className="text-secondary-foreground hover:bg-secondary-foreground/10 rounded-lg"
            >
              <ChevronLeft className="size-5" />
            </Button>

            <div className="flex items-center gap-2">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  label={`Slide ${index + 1}`}
                  selected={index === selectedIndex}
                  onClick={() => onDotClick(index)}
                />
              ))}
            </div>

            <Button
              size="icon-sm"
              variant="ghost"
              onClick={onNext}
              disabled={nextDisabled}
              className="text-secondary-foreground hover:bg-secondary-foreground/10 rounded-lg"
            >
              <ChevronRight className="size-5" />
            </Button>

            <div className="w-px h-6 bg-secondary-foreground/20" />

            <Button
              variant="ghost"
              size="sm"
              className="text-secondary-foreground hover:bg-secondary-foreground/10 gap-1.5"
            >
              View All
              <Sparkles className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { MenuCarousel }
