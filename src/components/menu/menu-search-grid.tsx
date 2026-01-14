"use client"

import { cn } from '@/lib/utils'
import { FlipReveal, FlipRevealItem } from '@/components/gsap/flip-reveal'
import { MenuSearchCard } from './menu-search-card'
import type { MenuItem } from './menu-data'
import { useMemo } from 'react'

type SortOption = 'default' | 'a-z' | 'popular'

type MenuSearchGridProps = {
  items: MenuItem[]
  visibleKeys: string[]
  sortOption: SortOption
  onSortChange: (option: SortOption) => void
  className?: string
}

const sortOptions: { id: SortOption; label: string }[] = [
  { id: 'default', label: 'Default' },
  { id: 'a-z', label: 'A - Z' },
  { id: 'popular', label: 'Most Popular' },
]

function MenuSearchGrid({
  items,
  visibleKeys,
  sortOption,
  onSortChange,
  className,
}: MenuSearchGridProps) {
  // Sort items based on selected option
  const sortedItems = useMemo(() => {
    const itemsCopy = [...items]
    
    switch (sortOption) {
      case 'a-z':
        return itemsCopy.sort((a, b) => a.name.localeCompare(b.name))
      case 'popular':
        // Items with 'Popular' or 'Best Seller' tags appear first
        return itemsCopy.sort((a, b) => {
          const aPopular = a.tags?.some(t => 
            t.toLowerCase().includes('popular') || t.toLowerCase().includes('seller')
          ) ?? false
          const bPopular = b.tags?.some(t => 
            t.toLowerCase().includes('popular') || t.toLowerCase().includes('seller')
          ) ?? false
          if (aPopular && !bPopular) return -1
          if (!aPopular && bPopular) return 1
          return 0
        })
      default:
        return itemsCopy
    }
  }, [items, sortOption])

  return (
    <div className={cn('flex flex-col', className)}>
      {/* Sort Options */}
      <div className="flex items-center justify-end gap-2 mb-6">
        {sortOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => onSortChange(option.id)}
            className={cn(
              'px-5 py-2.5 rounded-xl font-display text-sm transition-all duration-200',
              sortOption === option.id
                ? 'bg-secondary text-secondary-foreground shadow-md'
                : 'bg-card text-foreground border border-border hover:border-primary/50 hover:shadow-sm'
            )}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* Items Grid - 3 columns with square-ish proportional spacing */}
      {visibleKeys.length > 0 || visibleKeys.includes('all') ? (
        <FlipReveal
          keys={visibleKeys}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          showClass="flex"
          hideClass="hidden"
        >
          {sortedItems.map((item, index) => (
            <FlipRevealItem key={item.id} flipKey={item.id}>
              <div className="w-full">
                <MenuSearchCard 
                  item={item} 
                  colorIndex={index}
                />
              </div>
            </FlipRevealItem>
          ))}
        </FlipReveal>
      ) : (
        <div className="text-center py-20">
          <p className="text-muted-foreground font-display text-xl">
            No items found matching your search
          </p>
          <p className="text-muted-foreground/70 text-base mt-3">
            Try adjusting your filters or search terms
          </p>
        </div>
      )}
    </div>
  )
}

export { MenuSearchGrid }
export type { SortOption }
