"use client"

import { Search01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/animate-ui/button'
import type { MenuCategory } from './menu-data'

type MenuSearchSidebarProps = {
  categories: MenuCategory[]
  searchQuery: string
  selectedCategories: string[]
  onSearchChange: (query: string) => void
  onCategoryToggle: (categoryId: string) => void
  onSearch: () => void
  onClearAll: () => void
  className?: string
}

function MenuSearchSidebar({
  categories,
  searchQuery,
  selectedCategories,
  onSearchChange,
  onCategoryToggle,
  onSearch,
  onClearAll,
  className,
}: MenuSearchSidebarProps) {
  return (
    <aside className={cn(
      'flex flex-col gap-5',
      className
    )}>
      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full bg-card border border-border rounded-xl px-4 py-3 pr-11 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-base"
        />
        <HugeiconsIcon 
          icon={Search01Icon} 
          className="absolute right-3.5 top-1/2 -translate-y-1/2 size-5 text-muted-foreground"
        />
      </div>

      {/* Categories Section - indented to align with search input content */}
      <div className="px-1">
        <h3 className="font-display font-bold text-foreground text-lg mb-3">Categories</h3>
        <div className="space-y-2.5">
          {categories.map((category) => (
            <label
              key={category.id}
              className="flex items-center gap-3 cursor-pointer group py-0.5"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category.id)}
                onChange={() => onCategoryToggle(category.id)}
                className="size-4 rounded border-border text-primary focus:ring-primary/30 accent-primary"
              />
              <span className="text-foreground text-base group-hover:text-primary transition-colors">
                {category.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 mt-3">
        <Button
          onClick={onSearch}
          className="flex-1 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-display py-2.5"
        >
          Search
        </Button>
        <Button
          onClick={onClearAll}
          variant="outline"
          className="flex-1 font-display py-2.5"
        >
          Clear all
        </Button>
      </div>
    </aside>
  )
}

export { MenuSearchSidebar }
