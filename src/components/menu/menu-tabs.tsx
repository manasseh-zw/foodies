import { cn } from '@/lib/utils'
import type { MenuCategory } from './menu-data'

type MenuTabsProps = {
  categories: MenuCategory[]
  activeCategory: string
  onCategoryChange: (categoryId: string) => void
  className?: string
}

function MenuTabs({
  categories,
  activeCategory,
  onCategoryChange,
  className,
}: MenuTabsProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-center gap-1 sm:gap-2 flex-wrap',
        className,
      )}
    >
      {categories.map((category) => {
        const isActive = category.id === activeCategory
        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={cn(
              'relative flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-sm font-display text-sm sm:text-base transition-all duration-200',
              isActive
                ? 'bg-secondary text-secondary-foreground'
                : 'text-accent-foreground/80 hover:text-accent-foreground hover:outline-2 hover:outline-secondary',
            )}
          >
            <span className="text-base">{category.emoji}</span>
            <span className="hidden sm:inline">{category.label}</span>
          </button>
        )
      })}
    </div>
  )
}

export { MenuTabs }
