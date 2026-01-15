/**
 * MarqueeDivider Component
 *
 * A horizontal marquee divider with scrolling text separated by colored star icons.
 * Perfect for section dividers on landing pages.
 *
 * @example
 * ```tsx
 * import MarqueeDivider from '@/components/ui/marquee-divider'
 *
 * <MarqueeDivider
 *   items={['SNACKS', 'DESSERTS', 'DAIRY', 'SAMOSAS']}
 *   speed="normal"
 *   backgroundColor="#d4a574"
 * />
 * ```
 */

import { StarSeparator } from '@/components/icons'
import { ReactElement } from 'react'

const SPLASH_COLORS = ['#E8A08A', '#B1D353', '#C9B08E', '#A2B29F'] as const

type MarqueeDividerProps = {
  items: string[]
  className?: string
  speed?: 'slow' | 'normal' | 'fast'
  backgroundColor?: string
  colors?: string[]
}

export default function MarqueeDivider({
  items,
  className = '',
  speed = 'normal',
  backgroundColor = '#c3a3d6',
  colors,
}: MarqueeDividerProps) {
  const speedClass = {
    slow: '[--marquee-duration:40s]',
    normal: '[--marquee-duration:20s]',
    fast: '[--marquee-duration:10s]',
  }[speed]

  const starColors = colors || SPLASH_COLORS

  const renderMarqueeContent = () => {
    const content: ReactElement[] = []
    items.forEach((item, index) => {
      const colorIndex = index % starColors.length
      const starColor = starColors[colorIndex]

      content.push(
        <span
          key={`text-${index}`}
          className="font-display text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide text-foreground"
        >
          {item}
        </span>,
      )

      content.push(
        <span key={`star-${index}`} className="inline-flex items-center">
          <StarSeparator
            color={starColor}
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
          />
        </span>,
      )
    })
    return content
  }

  const marqueeContent = renderMarqueeContent()

  return (
    <div
      className={`relative w-full overflow-hidden select-none pointer-events-none ${speedClass} ${className}`}
      style={{ backgroundColor }}
    >
      <div className="animate-marquee whitespace-nowrap py-4 sm:py-5 flex items-center gap-4 sm:gap-5 md:gap-6">
        {marqueeContent}
        {marqueeContent}
      </div>
    </div>
  )
}

export { SPLASH_COLORS }
