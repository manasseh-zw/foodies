"use client"

import { motion } from 'motion/react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import Splash from '@/components/assets'
import {
  type MenuItem,
  getDisplayPrice,
  getVariantLabels,
} from '@/lib/data'

// Organic, earthy color palette for splash backgrounds
const SPLASH_COLORS = ['#E8A08A', '#B1D353', '#C9B08E', '#A2B29F'] as const

type MenuSearchCardProps = {
  item: MenuItem
  colorIndex?: number
  className?: string
}

/**
 * MenuSearchCard - A larger menu item card specifically designed for the search grid.
 * Features larger images, better spacing, and smooth hover animations.
 */
function MenuSearchCard({
  item,
  colorIndex = 0,
  className,
}: MenuSearchCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const splashColor = SPLASH_COLORS[colorIndex % SPLASH_COLORS.length]
  const variantLabels = getVariantLabels(item)

  return (
    <motion.div
      className={cn(
        'relative flex flex-col items-center rounded-2xl bg-transparent transition-colors w-full cursor-pointer overflow-visible',
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
    >
      {/* Container for splash and image - keeps them aligned */}
      <div className="relative w-full aspect-square flex items-center justify-center">
        {/* Splash background - centered and aligned with image */}
        <motion.div
          className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
          initial={false}
          animate={{
            rotate: isHovered ? 8 : 0,
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20,
          }}
        >
          <Splash
            color={splashColor}
            className="w-[115%] h-[115%] object-contain"
            style={{
              filter: isHovered ? 'brightness(1.1)' : 'brightness(1)',
              transition: 'filter 0.3s ease',
            }}
          />
        </motion.div>

        {/* Food image - centered within the same container */}
        <motion.img
          src={item.image}
          alt={item.name}
          className="relative z-10 w-[75%] h-[75%] object-contain drop-shadow-xl"
          initial={false}
          animate={{
            y: isHovered ? -8 : 0,
            scale: isHovered ? 1.06 : 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 250,
            damping: 18,
          }}
        />
      </div>

      {/* Item name, variants, and price - outside the splash area */}
      <div className="relative z-10 flex flex-col items-center gap-2 -mt-1 text-center">
        <h3 className="font-display text-sm sm:text-base md:text-lg font-bold text-card-foreground uppercase tracking-wide leading-tight">
          {item.name}
          {variantLabels && (
            <span className="text-muted-foreground font-medium text-[0.7em] ml-1.5">
              ({variantLabels})
            </span>
          )}
        </h3>
        <span className="font-display text-xs sm:text-sm font-black bg-primary text-primary-foreground px-3 py-1 rounded-lg shadow-md">
          {getDisplayPrice(item)}
        </span>
      </div>
    </motion.div>
  )
}

export { MenuSearchCard }
