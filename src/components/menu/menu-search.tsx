"use client"

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
  return menuCategories.flatMap(category => category.items)
}

function MenuSearch({ className }: MenuSearchProps) {
  const [searchQuery, setSearchQuery] = React.useState('')
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([])
  const [sortOption, setSortOption] = React.useState<SortOption>('default')
  
  const allItems = React.useMemo(() => getAllItems(), [])
  
  // Filter items based on search query and selected categories
  const filteredItems = React.useMemo(() => {
    return allItems.filter(item => {
      // Search filter
      const matchesSearch = searchQuery.length === 0 || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      
      // Category filter
      const matchesCategory = selectedCategories.length === 0 ||
        menuCategories.some(cat => 
          selectedCategories.includes(cat.id) && 
          cat.items.some(catItem => catItem.id === item.id)
        )
      
      return matchesSearch && matchesCategory
    })
  }, [allItems, searchQuery, selectedCategories])

  // Calculate visible keys for FlipReveal
  const visibleKeys = React.useMemo(() => {
    if (searchQuery === '' && selectedCategories.length === 0) {
      return ['all']
    }
    return filteredItems.map(item => item.id)
  }, [filteredItems, searchQuery, selectedCategories])

  const handleCategoryToggle = (categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
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

  return (
    <div className={cn('flex flex-col lg:flex-row gap-6 lg:gap-8', className)}>
      {/* Sidebar */}
      <div className="w-full lg:w-64 shrink-0">
        <MenuSearchSidebar
          categories={menuCategories}
          searchQuery={searchQuery}
          selectedCategories={selectedCategories}
          onSearchChange={setSearchQuery}
          onCategoryToggle={handleCategoryToggle}
          onSearch={handleSearch}
          onClearAll={handleClearAll}
          className="sticky top-24"
        />
      </div>
      
      {/* Main Content Grid */}
      <div className="flex-1 min-w-0">
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
