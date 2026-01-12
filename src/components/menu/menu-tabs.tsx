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
              'relative flex items-center gap-2 px-3 py-2.5 sm:px-5 sm:py-2.5 rounded-sm font-display text-sm sm:text-base transition-colors duration-300 ease-in-out',
              isActive
                ? 'bg-secondary text-secondary-foreground'
                : 'text-accent-foreground/80 hover:text-accent-foreground hover:outline-2 hover:outline-secondary',
            )}
          >
            {category.icon && (
              <category.icon
                className={cn(
                  'size-5 transition-colors duration-300 ease-in-out',
                  isActive ? 'text-secondary-foreground' : 'text-secondary',
                )}
              />
            )}

            <span className="hidden sm:inline">{category.label}</span>
          </button>
        )
      })}
    </div>
  )
}

export { MenuTabs }
