'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { MenuSearchSidebar } from './menu-search-sidebar'
import { MenuSearchGrid } from './menu-search-grid'
import { menuCategories, getAllMenuItems } from '@/lib/data'

type MenuSearchProps = {
  className?: string
}

function MenuSearch({ className }: MenuSearchProps) {
  const [searchQuery, setSearchQuery] = React.useState('')
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>(
    [],
  )

  const allItems = React.useMemo(() => getAllMenuItems(), [])

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
        selectedCategories.includes(item.categoryId)

      return matchesSearch && matchesCategory
    })
  }, [allItems, searchQuery, selectedCategories])

  // Calculate visible keys for animation
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
  }

  const handleClearFilters = () => {
    setSelectedCategories([])
  }

  return (
    <div
      className={cn(
        'flex h-[calc(100svh-8rem)] min-h-[500px] flex-col gap-2 overflow-hidden lg:flex-row lg:h-[850px] lg:gap-8',
        className,
      )}
    >
      {/* Sidebar */}
      <div className="w-full shrink-0 lg:w-64">
        <MenuSearchSidebar
          categories={menuCategories}
          searchQuery={searchQuery}
          selectedCategories={selectedCategories}
          onSearchChange={setSearchQuery}
          onCategoryToggle={handleCategoryToggle}
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
        />
      </div>
    </div>
  )
}

export { MenuSearch }

