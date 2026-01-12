import * as React from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import Splash from '@/components/assets'
import type { MenuItem } from './menu-data'

// Organic, earthy color palette for splash backgrounds
const SPLASH_COLORS = ['#E8A08A', '#B1D353', '#C9B08E', '#A2B29F'] as const

type MenuItemCardProps = {
  item: MenuItem
  isActive?: boolean
  colorIndex?: number
  className?: string
}

function MenuItemCard({
  item,
  isActive = false,
  colorIndex = 0,
  className,
}: MenuItemCardProps) {
  const [isHovered, setIsHovered] = React.useState(false)
  const splashColor = SPLASH_COLORS[colorIndex % SPLASH_COLORS.length]

  return (
    <motion.div
      className={cn(
        'relative flex flex-col items-center p-1 rounded-xl bg-transparent transition-colors w-full cursor-pointer overflow-visible',
        className,
      )}
      initial={false}
      animate={{
        scale: isActive ? 1 : 0.82,
      }}
      transition={{
        type: 'spring',
        stiffness: 240,
        damping: 24,
        mass: 1,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Splash background - positioned to extend beyond the card */}
      <motion.div
        className="absolute -inset-[15%] z-0 flex items-center justify-center pointer-events-none"
        initial={false}
        animate={{
          rotate: isHovered ? 12 : 0,
          scale: isHovered ? 1.12 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
      >
        <Splash
          color={splashColor}
          className="w-full h-full object-contain"
          style={{
            filter: isHovered ? 'brightness(1.1)' : 'brightness(1)',
            transition: 'filter 0.3s ease',
          }}
        />
      </motion.div>

      {/* Food image */}
      <div className="relative z-10 w-[90%] aspect-square flex items-center justify-center mb-1">
        <motion.img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-contain drop-shadow-lg"
          initial={false}
          animate={{
            y: isActive ? -8 : 0,
            scale: isActive ? 1.1 : 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 20,
          }}
        />
      </div>

      {/* Item name and price */}
      <div className="relative z-10 flex items-center justify-center gap-2 px-2 flex-wrap">
        <h3 className="font-display text-sm sm:text-base md:text-lg font-bold text-center text-card-foreground uppercase tracking-wide leading-tight">
          {item.name}
        </h3>
        <span className="font-display text-xs sm:text-sm md:text-base font-black bg-primary text-primary-foreground px-2 py-0.5 rounded-lg shadow-sm">
          {item.price}
        </span>
      </div>

    </motion.div>
  )
}

export { MenuItemCard }
