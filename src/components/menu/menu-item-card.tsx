import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import type { MenuItem } from './menu-data'

type MenuItemCardProps = {
  item: MenuItem
  isActive?: boolean
  className?: string
}

function MenuItemCard({
  item,
  isActive = false,
  className,
}: MenuItemCardProps) {
  return (
    <motion.div
      className={cn(
        'relative flex flex-col items-center p-4 rounded-xl bg-transparent transition-colors w-full',
        className,
      )}
      initial={false}
      animate={{
        scale: isActive ? 1 : 0.92,
      }}
      transition={{
        type: 'spring',
        stiffness: 240,
        damping: 24,
        mass: 1,
      }}
    >
      {/* Splash background SVG - animates on active */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.svg
          viewBox="0 0 200 200"
          className="w-[80%] h-[80%] text-primary"
          initial={false}
          animate={{
            scale: isActive ? 1 : 0.8,
            opacity: isActive ? 0.15 : 0.08,
            rotate: isActive ? 0 : -10,
          }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 20,
          }}
        >
          <path
            fill="currentColor"
            d="M47.5,-57.2C59.3,-46.8,65.4,-30.3,67.8,-13.5C70.2,3.3,68.9,20.4,61.1,34.1C53.3,47.8,39,58.1,23.1,63.5C7.2,68.9,-10.3,69.4,-25.9,63.8C-41.5,58.2,-55.2,46.5,-63.3,31.5C-71.4,16.5,-73.9,-1.8,-69.1,-18.1C-64.3,-34.4,-52.2,-48.7,-38.1,-58.7C-24,-68.7,-7.9,-74.4,5.6,-71.1C19.1,-67.8,35.7,-67.6,47.5,-57.2Z"
            transform="translate(100 100)"
          />
        </motion.svg>
      </div>

      {/* Food image */}
      <div className="relative z-10 w-full aspect-square flex items-center justify-center mb-2">
        <motion.img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-contain drop-shadow-lg"
          initial={false}
          animate={{
            y: isActive ? -8 : 0,
            scale: isActive ? 1.05 : 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 20,
          }}
        />
      </div>

      {/* Item name */}
      <h3 className="relative z-10 font-display text-base sm:text-lg md:text-xl font-bold text-center text-card-foreground uppercase tracking-wide leading-tight">
        {item.name}
      </h3>

      {/* Tags */}
      {item.tags && item.tags.length > 0 && (
        <div className="relative z-10 flex flex-wrap justify-center gap-1.5 mt-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 text-xs sm:text-sm px-2.5 py-1 rounded-lg bg-primary/20 text-primary-foreground"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Price badge */}
      <motion.div
        className="absolute top-3 right-3 z-20"
        initial={false}
        animate={{
          scale: isActive ? 1.1 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
      >
        <span className="font-display text-xl sm:text-2xl font-bold text-secondary">
          {item.price}
        </span>
      </motion.div>
    </motion.div>
  )
}

export { MenuItemCard }
