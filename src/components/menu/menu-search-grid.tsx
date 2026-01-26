import { cn } from '@/lib/utils'
import { MenuSearchCard } from './menu-search-card'
import type { MenuItem } from '@/lib/data'
import { useMemo } from 'react'
import { motion, AnimatePresence } from 'motion/react'

type MenuSearchGridProps = {
  items: MenuItem[]
  visibleKeys: string[]
  className?: string
}

function MenuSearchGrid({
  items,
  visibleKeys,
  className,
}: MenuSearchGridProps) {
  // Filter visible items based on keys
  const visibleItems = useMemo(() => {
    if (visibleKeys.includes('all')) {
      return items
    }
    return items.filter((item) => visibleKeys.includes(item.id))
  }, [items, visibleKeys])

  const hasResults = visibleItems.length > 0

  return (
    <div className={cn('flex h-full flex-col', className)}>
      <div className="menu-scroll min-h-0 flex-1 overflow-y-scroll overflow-x-hidden pr-2">
        {/* Items Grid */}
        {hasResults ? (
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            layout
          >
            <AnimatePresence mode="popLayout">
              {visibleItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.2 },
                    layout: { duration: 0.3, type: 'spring', bounce: 0.2 }
                  }}
                  className="w-full"
                >
                  <MenuSearchCard item={item} colorIndex={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-muted-foreground font-display text-xl">
              No items found matching your search
            </p>
            <p className="text-muted-foreground/70 text-base mt-3">
              Try adjusting your filters or search terms
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export { MenuSearchGrid }


