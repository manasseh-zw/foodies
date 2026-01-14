'use client'

import { Search01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/animate-ui/button'
import type { MenuCategory } from './menu-data'
import type { SortOption } from './menu-search-grid'
import {
  FamilyDrawerAnimatedContent,
  FamilyDrawerAnimatedWrapper,
  FamilyDrawerClose,
  FamilyDrawerContent,
  FamilyDrawerOverlay,
  FamilyDrawerPortal,
  FamilyDrawerRoot,
  FamilyDrawerTrigger,
  FamilyDrawerViewContent,
  type ViewsRegistry,
} from '@/components/ui/family-drawer'
import { Drawer } from 'vaul'

const sortOptions: { id: SortOption; label: string }[] = [
  { id: 'default', label: 'Default' },
  { id: 'a-z', label: 'A - Z' },
  { id: 'popular', label: 'Most Popular' },
]

type MobileFiltersViewProps = {
  categories: MenuCategory[]
  selectedCategories: string[]
  sortOption: SortOption
  onCategoryToggle: (categoryId: string) => void
  onSortChange: (option: SortOption) => void
}

type MenuSearchSidebarProps = {
  categories: MenuCategory[]
  searchQuery: string
  selectedCategories: string[]
  sortOption: SortOption
  onSearchChange: (query: string) => void
  onCategoryToggle: (categoryId: string) => void
  onSortChange: (option: SortOption) => void
  onSearch: () => void
  onClearAll: () => void
  onClearFilters: () => void
  className?: string
}

function MenuSearchSidebar({
  categories,
  searchQuery,
  selectedCategories,
  sortOption,
  onSearchChange,
  onCategoryToggle,
  onSortChange,
  onSearch,
  onClearAll,
  onClearFilters,
  className,
}: MenuSearchSidebarProps) {
  const hasActiveFilters = selectedCategories.length > 0

  const views: ViewsRegistry = {
    default: () => (
      <MobileFiltersView
        categories={categories}
        selectedCategories={selectedCategories}
        sortOption={sortOption}
        onCategoryToggle={onCategoryToggle}
        onSortChange={onSortChange}
      />
    ),
  }

  return (
    <aside className={cn('flex flex-col gap-5', className)}>
      {/* Search Input */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
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
        {/* Mobile Filter Button */}
        <div className="lg:hidden">
          {hasActiveFilters ? (
            <button
              type="button"
              onClick={onClearFilters}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors hover:border-primary/60"
              aria-label="Clear filters"
            >
              <CloseIcon className="size-5" />
            </button>
          ) : (
            <FamilyDrawerRoot views={views}>
              <FamilyDrawerTrigger asChild>
                <button
                  type="button"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors hover:border-primary/60"
                  aria-label="Open filters"
                >
                  <FilterIcon className="size-5" />
                </button>
              </FamilyDrawerTrigger>
              <FamilyDrawerPortal>
                <FamilyDrawerOverlay />
                <FamilyDrawerContent>
                  <FamilyDrawerAnimatedWrapper>
                    <FamilyDrawerAnimatedContent>
                      <FamilyDrawerViewContent />
                    </FamilyDrawerAnimatedContent>
                  </FamilyDrawerAnimatedWrapper>
                </FamilyDrawerContent>
              </FamilyDrawerPortal>
            </FamilyDrawerRoot>
          )}
        </div>
      </div>

      {/* Categories Section - Desktop only */}
      <div className="px-1 hidden lg:block">
        <h3 className="font-display font-bold text-foreground text-lg mb-3">
          Categories
        </h3>
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

      {/* Action Buttons - Desktop only */}
      <div className="hidden lg:flex gap-2 mt-3">
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

function MobileFiltersView({
  categories,
  selectedCategories,
  sortOption,
  onCategoryToggle,
  onSortChange,
}: MobileFiltersViewProps) {
  return (
    <div className="relative flex h-full flex-col">

      {/* Sort Options */}
      <div className="mb-6 shrink-0">
        <h3 className="font-display font-bold text-foreground text-base mb-3">
          Sort By
        </h3>
        <div className="flex flex-col gap-2">
          {sortOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onSortChange(option.id)}
              className={cn(
                'w-full px-4 py-3 rounded-xl font-display text-sm text-left transition-all duration-200',
                sortOption === option.id
                  ? 'bg-secondary text-secondary-foreground shadow-md'
                  : 'bg-card text-foreground border border-border hover:border-primary/50 hover:shadow-sm',
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="mb-6 flex-1 min-h-0 overflow-y-auto">
        <h3 className="font-display font-bold text-foreground text-base mb-3">
          Categories
        </h3>
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

      {/* Apply Button - Full width at bottom */}
      <div className="mt-auto shrink-0 pt-4 border-t border-border">
        <Drawer.Close asChild>
          <button
            type="button"
            className="flex h-12 w-full items-center justify-center rounded-full bg-secondary text-secondary-foreground text-[19px] font-semibold transition-transform focus:scale-95 focus-visible:shadow-focus-ring-button active:scale-95"
          >
            Apply Filters
          </button>
        </Drawer.Close>
      </div>
    </div>
  )
}

function FilterIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 6H20M7 12H17M10 18H14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6 6L18 18M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export { MenuSearchSidebar }
