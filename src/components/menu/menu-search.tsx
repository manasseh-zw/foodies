'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { MenuSearchSidebar } from './menu-search-sidebar'
import { MenuSearchGrid, type SortOption } from './menu-search-grid'
import { menuCategories, type MenuItem } from './menu-data'

type MenuSearchProps = {
  className?: string
}

// Flatten all menu items from all categories
function getAllItems(): MenuItem[] {
  return menuCategories.flatMap((category) => category.items)
}

function MenuSearch({ className }: MenuSearchProps) {
  const [searchQuery, setSearchQuery] = React.useState('')
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>(
    [],
  )
  const [sortOption, setSortOption] = React.useState<SortOption>('default')

  const allItems = React.useMemo(() => getAllItems(), [])

  // Filter items based on search query and selected categories
  const filteredItems = React.useMemo(() => {
    return allItems.filter((item) => {
      // Search filter
      const matchesSearch =
        searchQuery.length === 0 ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase())

      // Category filter
      const matchesCategory =
        selectedCategories.length === 0 ||
        menuCategories.some(
          (cat) =>
            selectedCategories.includes(cat.id) &&
            cat.items.some((catItem) => catItem.id === item.id),
        )

      return matchesSearch && matchesCategory
    })
  }, [allItems, searchQuery, selectedCategories])

  // Calculate visible keys for FlipReveal
  const visibleKeys = React.useMemo(() => {
    if (searchQuery === '' && selectedCategories.length === 0) {
      return ['all']
    }
    return filteredItems.map((item) => item.id)
  }, [filteredItems, searchQuery, selectedCategories])

  const handleCategoryToggle = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId],
    )
  }

  const handleSearch = () => {
    // Search is real-time, but button can trigger any additional logic
  }

  const handleClearAll = () => {
    setSearchQuery('')
    setSelectedCategories([])
    setSortOption('default')
  }

  const handleClearFilters = () => {
    setSelectedCategories([])
  }

  return (
    <div
      className={cn(
        'flex h-[calc(100svh-6rem)] max-h-[calc(100svh-6rem)] flex-col gap-6 overflow-hidden lg:flex-row lg:gap-8',
        className,
      )}
    >
      {/* Sidebar */}
      <div className="w-full shrink-0 lg:w-64">
        <MenuSearchSidebar
          categories={menuCategories}
          searchQuery={searchQuery}
          selectedCategories={selectedCategories}
          sortOption={sortOption}
          onSearchChange={setSearchQuery}
          onCategoryToggle={handleCategoryToggle}
          onSortChange={setSortOption}
          onSearch={handleSearch}
          onClearAll={handleClearAll}
          onClearFilters={handleClearFilters}
        />
      </div>

      {/* Main Content Grid */}
      <div className="flex min-w-0 flex-1 min-h-0 flex-col">
        <MenuSearchGrid
          items={allItems}
          visibleKeys={visibleKeys}
          sortOption={sortOption}
          onSortChange={setSortOption}
        />
      </div>
    </div>
  )
}

export { MenuSearch }
