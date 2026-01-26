/**
 * Menu Data - Single Source of Truth
 *
 * This file contains all menu items for Foodies restaurant.
 * Items are organized by category and support variants (e.g., pizza sizes).
 *
 * Usage:
 * - Import `menuCategories` for the full menu structure
 * - Import `getMenuItemsByCategory` to filter by category ID
 * - Import `getAllMenuItems` to get a flat list of all items
 */

// ============================================================================
// Types
// ============================================================================

/**
 * Size variants for items like pizzas and mocktails
 */
export type SizeVariant = 'regular' | 'medium' | 'large' | '350ml' | '500ml'

/**
 * Represents a price variant for items with different sizes
 */
export type Variant = {
  size: SizeVariant
  label: string
  price: number
}

/**
 * Base menu item - can be a standalone item or have variants
 */
export type MenuItem = {
  id: string
  name: string
  /** Description of the item (optional) */
  description?: string
  /** Base price for items without variants, or starting price for display */
  price: number
  /** Image path relative to public folder */
  image: string
  /** Tags for filtering and display (e.g., "Popular", "Spicy", "Vegetarian") */
  tags?: string[]
  /** Whether this item has size variants */
  hasVariants?: boolean
  /** Size variants with their prices */
  variants?: Variant[]
  /** Category ID this item belongs to */
  categoryId: string
}

/**
 * Menu category containing related items
 */
export type MenuCategory = {
  id: string
  label: string
  /** Icon component (will be mapped separately in components) */
  iconName?: 'burger' | 'drumstick' | 'pizza' | 'fries' | 'coffee' | 'cocktail' | 'ice-cream'
  items: MenuItem[]
}

// ============================================================================
// Menu Categories & Items
// ============================================================================

export const menuCategories: MenuCategory[] = [
  // --------------------------------------------------------------------------
  // Chicken & Sides
  // --------------------------------------------------------------------------
  {
    id: 'chicken-side',
    label: 'Chicken & Sides',
    iconName: 'drumstick',
    items: [
      {
        id: 'full-chicken',
        name: 'Full Chicken',
        price: 12.0,
        image: '/assets/menu/chicken-side/chicken-full.webp',
        tags: ['Family Size'],
        categoryId: 'chicken-side',
      },
      {
        id: 'full-chicken-meal',
        name: 'Full Chicken Meal',
        description: 'Full chicken with sides',
        price: 14.0,
        image: '/assets/menu/chicken-side/chicken-meal.webp',
        tags: ['Family Size', 'Meal'],
        categoryId: 'chicken-side',
      },
      {
        id: 'quarter-chicken-chips',
        name: '1/4 Chicken & Chips',
        price: 4.0,
        image: '/assets/menu/chicken-side/chicken-chips.webp',
        tags: ['Popular'],
        categoryId: 'chicken-side',
      },
      {
        id: '1-piece-chips',
        name: '1 Piece & Chips',
        price: 3.0,
        image: '/assets/menu/chicken-side/fried-chicken-plate.webp',
        categoryId: 'chicken-side',
      },
      {
        id: '2-pieces-chips',
        name: '2 Pieces & Chips',
        price: 4.0,
        image: '/assets/menu/chicken-side/chicken-chips.webp',
        tags: ['Popular'],
        categoryId: 'chicken-side',
      },
      {
        id: '3-pieces-chips',
        name: '3 Pieces & Chips',
        price: 6.0,
        image: '/assets/menu/chicken-side/chicken-chips.webp',
        categoryId: 'chicken-side',
      },
      {
        id: 'chicken-piece',
        name: 'Chicken Piece',
        price: 2.0,
        image: '/assets/menu/chicken-side/fried-chicken-plate.webp',
        categoryId: 'chicken-side',
      },
      {
        id: '8pc-bucket',
        name: '8 Piece Bucket',
        price: 11.0,
        image: '/assets/menu/chicken-side/chicken-bucket.webp',
        tags: ['Family Size'],
        categoryId: 'chicken-side',
      },
      // Salads
      {
        id: 'coleslaw-salad',
        name: 'Coleslaw Salad',
        price: 1.0,
        image: '/assets/menu/chicken-side/salad-coleslaw.webp',
        tags: ['Healthy'],
        categoryId: 'chicken-side',
      },
      {
        id: 'italian-salad',
        name: 'Italian Salad',
        price: 2.0,
        image: '/assets/menu/chicken-side/salad-italian.webp',
        tags: ['Healthy'],
        categoryId: 'chicken-side',
      },
      {
        id: 'chicken-salad',
        name: 'Chicken Salad',
        price: 3.0,
        image: '/assets/menu/chicken-side/salad-chicken.webp',
        tags: ['Healthy', 'Popular'],
        categoryId: 'chicken-side',
      },
      // Fries
      {
        id: 'large-chips',
        name: 'Large Chips',
        price: 1.5,
        image: '/assets/menu/chicken-side/fries-plain.webp',
        categoryId: 'chicken-side',
      },
      {
        id: 'loaded-fries',
        name: 'Loaded Fries',
        price: 2.0,
        image: '/assets/menu/chicken-side/fries-loaded.webp',
        tags: ['Popular'],
        categoryId: 'chicken-side',
      },
    ],
  },

  // --------------------------------------------------------------------------
  // Burgers & Wraps
  // --------------------------------------------------------------------------
  {
    id: 'burgers',
    label: 'Burgers & Wraps',
    iconName: 'burger',
    items: [
      {
        id: 'beef-burger',
        name: 'Beef Burger',
        price: 3.0,
        image: '/assets/menu/chicken-side/burger-beef.webp',
        tags: ['Popular'],
        categoryId: 'burgers',
      },
      {
        id: 'chicken-burger',
        name: 'Chicken Burger',
        price: 2.5,
        image: '/assets/menu/chicken-side/burger-chicken.webp',
        categoryId: 'burgers',
      },
      {
        id: 'beef-burger-chips',
        name: 'Beef Burger & Chips',
        price: 4.0,
        image: '/assets/menu/chicken-side/burger-fries.webp',
        tags: ['Meal'],
        categoryId: 'burgers',
      },
      {
        id: 'chicken-burger-chips',
        name: 'Chicken Burger & Chips',
        price: 4.0,
        image: '/assets/menu/chicken-side/burger-fries.webp',
        tags: ['Meal'],
        categoryId: 'burgers',
      },
      {
        id: 'double-beef-burger',
        name: 'Double Beef Burger',
        price: 4.0,
        image: '/assets/menu/chicken-side/burger-double-beef.webp',
        tags: ['Best Seller'],
        categoryId: 'burgers',
      },
      {
        id: 'double-chicken-burger',
        name: 'Double Chicken Burger',
        price: 4.0,
        image: '/assets/menu/chicken-side/burger-double-chicken.webp',
        categoryId: 'burgers',
      },
      {
        id: 'double-beef-cheese-burger',
        name: 'Double Beef Cheese Burger',
        price: 4.5,
        image: '/assets/menu/chicken-side/burger-double-beef.webp',
        tags: ['Best Seller'],
        categoryId: 'burgers',
      },
      {
        id: 'double-chicken-cheese-burger',
        name: 'Double Chicken Cheese Burger',
        price: 4.5,
        image: '/assets/menu/chicken-side/burger-double-chicken.webp',
        categoryId: 'burgers',
      },
      // Wraps
      {
        id: 'plain-wrap',
        name: 'Plain Wrap',
        price: 3.0,
        image: '/assets/menu/chicken-side/wrap-chicken-spicy.webp',
        categoryId: 'burgers',
      },
      {
        id: 'spicy-wrap',
        name: 'Spicy Wrap',
        price: 3.0,
        image: '/assets/menu/chicken-side/wrap-chicken-spicy.webp',
        tags: ['Spicy'],
        categoryId: 'burgers',
      },
      {
        id: 'hawaiian-wrap',
        name: 'Hawaiian Wrap',
        price: 3.5,
        image: '/assets/menu/chicken-side/wrap-hawaiian.webp',
        tags: ['Popular'],
        categoryId: 'burgers',
      },
    ],
  },

  // --------------------------------------------------------------------------
  // Pizza (with variants)
  // --------------------------------------------------------------------------
  {
    id: 'pizza',
    label: 'Pizza',
    iconName: 'pizza',
    items: [
      {
        id: 'bbq-steak-pizza',
        name: 'BBQ Steak Pizza',
        price: 4.0,
        image: '/assets/menu/pizza/pizza-bbq-steak.webp',
        tags: ['Popular'],
        hasVariants: true,
        variants: [
          { size: 'regular', label: 'R', price: 4.0 },
          { size: 'medium', label: 'M', price: 6.0 },
          { size: 'large', label: 'L', price: 9.0 },
        ],
        categoryId: 'pizza',
      },
      {
        id: 'hawaiian-pizza',
        name: 'Hawaiian Pizza',
        price: 4.0,
        image: '/assets/menu/pizza/pizza-hawaiian.webp',
        hasVariants: true,
        variants: [
          { size: 'regular', label: 'R', price: 4.0 },
          { size: 'medium', label: 'M', price: 6.0 },
          { size: 'large', label: 'L', price: 9.0 },
        ],
        categoryId: 'pizza',
      },
      {
        id: 'chicken-mushroom-pizza',
        name: 'Chicken Mushroom Pizza',
        price: 4.0,
        image: '/assets/menu/pizza/pizza-mushroom.webp',
        hasVariants: true,
        variants: [
          { size: 'regular', label: 'R', price: 4.0 },
          { size: 'medium', label: 'M', price: 6.0 },
          { size: 'large', label: 'L', price: 9.0 },
        ],
        categoryId: 'pizza',
      },
      {
        id: 'tropical-chicken-pizza',
        name: 'Tropical Chicken Pizza',
        price: 4.0,
        image: '/assets/menu/pizza/pizza-chicken.webp',
        hasVariants: true,
        variants: [
          { size: 'regular', label: 'R', price: 4.0 },
          { size: 'medium', label: 'M', price: 6.0 },
          { size: 'large', label: 'L', price: 9.0 },
        ],
        categoryId: 'pizza',
      },
      {
        id: 'sweet-chilli-pizza',
        name: 'Sweet Chilli Pizza',
        price: 4.0,
        image: '/assets/menu/pizza/pizza-chicken.webp',
        tags: ['Spicy'],
        hasVariants: true,
        variants: [
          { size: 'regular', label: 'R', price: 4.0 },
          { size: 'medium', label: 'M', price: 6.0 },
          { size: 'large', label: 'L', price: 9.0 },
        ],
        categoryId: 'pizza',
      },
      {
        id: 'boerewors-pizza',
        name: 'Boerewors Pizza',
        price: 4.0,
        image: '/assets/menu/pizza/pizza-bbq-steak.webp',
        hasVariants: true,
        variants: [
          { size: 'regular', label: 'R', price: 4.0 },
          { size: 'medium', label: 'M', price: 6.0 },
          { size: 'large', label: 'L', price: 9.0 },
        ],
        categoryId: 'pizza',
      },
      {
        id: 'peri-chicken-pizza',
        name: 'Peri Chicken Pizza',
        price: 4.0,
        image: '/assets/menu/pizza/pizza-chicken.webp',
        tags: ['Spicy'],
        hasVariants: true,
        variants: [
          { size: 'regular', label: 'R', price: 4.0 },
          { size: 'medium', label: 'M', price: 6.0 },
          { size: 'large', label: 'L', price: 9.0 },
        ],
        categoryId: 'pizza',
      },
      {
        id: 'meat-deluxe-pizza',
        name: 'Meat Deluxe Pizza',
        price: 6.0,
        image: '/assets/menu/pizza/pizza-bbq-steak.webp',
        tags: ['Deluxe'],
        hasVariants: true,
        variants: [
          { size: 'regular', label: 'R', price: 6.0 },
          { size: 'medium', label: 'M', price: 8.5 },
          { size: 'large', label: 'L', price: 11.0 },
        ],
        categoryId: 'pizza',
      },
      {
        id: 'foodies-supreme-pizza',
        name: 'Foodies Supreme Pizza',
        price: 8.0,
        image: '/assets/menu/pizza/pizza-supreme.webp',
        tags: ['House Special', 'Popular'],
        hasVariants: true,
        variants: [
          { size: 'regular', label: 'R', price: 8.0 },
          { size: 'medium', label: 'M', price: 11.0 },
          { size: 'large', label: 'L', price: 14.0 },
        ],
        categoryId: 'pizza',
      },
      {
        id: 'cheese-burger-pizza',
        name: 'Cheese Burger Pizza',
        price: 4.0,
        image: '/assets/menu/pizza/pizza-bbq-steak.webp',
        hasVariants: true,
        variants: [
          { size: 'regular', label: 'R', price: 4.0 },
          { size: 'medium', label: 'M', price: 8.0 },
          { size: 'large', label: 'L', price: 10.0 },
        ],
        categoryId: 'pizza',
      },
      {
        id: 'chicken-hawaiian-pizza',
        name: 'Chicken Hawaiian Pizza',
        price: 5.0,
        image: '/assets/menu/pizza/pizza-hawaiian.webp',
        hasVariants: true,
        variants: [
          { size: 'regular', label: 'R', price: 5.0 },
          { size: 'medium', label: 'M', price: 8.0 },
          { size: 'large', label: 'L', price: 10.0 },
        ],
        categoryId: 'pizza',
      },
      {
        id: 'margherita-pizza',
        name: 'Margherita Pizza',
        price: 4.0,
        image: '/assets/menu/pizza/pizza-margherita.webp',
        tags: ['Vegetarian'],
        hasVariants: true,
        variants: [
          { size: 'regular', label: 'R', price: 4.0 },
          { size: 'medium', label: 'M', price: 6.0 },
          { size: 'large', label: 'L', price: 9.0 },
        ],
        categoryId: 'pizza',
      },
      {
        id: 'veggie-feast-pizza',
        name: 'Veggie Feast Pizza',
        price: 4.0,
        image: '/assets/menu/pizza/pizza-veggie.webp',
        tags: ['Vegetarian'],
        hasVariants: true,
        variants: [
          { size: 'regular', label: 'R', price: 4.0 },
          { size: 'medium', label: 'M', price: 6.0 },
          { size: 'large', label: 'L', price: 9.0 },
        ],
        categoryId: 'pizza',
      },
    ],
  },

  // --------------------------------------------------------------------------
  // Hot Beverages
  // --------------------------------------------------------------------------
  {
    id: 'hot-beverages',
    label: 'Hot Beverages',
    iconName: 'coffee',
    items: [
      {
        id: 'americano',
        name: 'Americano Coffee',
        price: 2.0,
        image: '/assets/menu/hot-beverages/coffee-black.webp',
        categoryId: 'hot-beverages',
      },
      {
        id: 'cappuccino',
        name: 'Cappuccino',
        price: 3.0,
        image: '/assets/menu/hot-beverages/coffee-cappuccino.webp',
        tags: ['Popular'],
        categoryId: 'hot-beverages',
      },
      {
        id: 'espresso',
        name: 'Espresso',
        price: 1.0,
        image: '/assets/menu/hot-beverages/coffee-black.webp',
        categoryId: 'hot-beverages',
      },
      {
        id: 'hot-chocolate',
        name: 'Hot Chocolate',
        price: 3.0,
        image: '/assets/menu/hot-beverages/coffee-chocolate.webp',
        categoryId: 'hot-beverages',
      },
      {
        id: 'latte',
        name: 'Latte',
        price: 3.0,
        image: '/assets/menu/hot-beverages/coffee-cappuccino.webp',
        categoryId: 'hot-beverages',
      },
      {
        id: 'mocha',
        name: 'Mocha',
        price: 4.0,
        image: '/assets/menu/hot-beverages/coffee-chocolate.webp',
        tags: ['Popular'],
        categoryId: 'hot-beverages',
      },
    ],
  },

  // --------------------------------------------------------------------------
  // Mocktails (with volume variants)
  // --------------------------------------------------------------------------
  {
    id: 'mocktails',
    label: 'Mocktails',
    iconName: 'cocktail',
    items: [
      {
        id: 'blueberry-boba',
        name: 'Blueberry Boba',
        price: 2.0,
        image: '/assets/menu/mocktails/boba-blueberry.webp',
        tags: ['Popular'],
        hasVariants: true,
        variants: [
          { size: '350ml', label: '350ml', price: 2.0 },
          { size: '500ml', label: '500ml', price: 3.0 },
        ],
        categoryId: 'mocktails',
      },
      {
        id: 'sunset-fusion',
        name: 'Sunset Fusion',
        price: 2.0,
        image: '/assets/menu/mocktails/boba-sunset-fusion.webp',
        hasVariants: true,
        variants: [
          { size: '350ml', label: '350ml', price: 2.0 },
          { size: '500ml', label: '500ml', price: 3.0 },
        ],
        categoryId: 'mocktails',
      },
      {
        id: 'mango-tango',
        name: 'Mango Tango',
        price: 2.0,
        image: '/assets/menu/mocktails/boba-yellow.webp',
        hasVariants: true,
        variants: [
          { size: '350ml', label: '350ml', price: 2.0 },
          { size: '500ml', label: '500ml', price: 3.0 },
        ],
        categoryId: 'mocktails',
      },
      {
        id: 'passion-fruit-boba',
        name: 'Passion Fruit Boba',
        price: 2.0,
        image: '/assets/menu/mocktails/boba-yellow.webp',
        hasVariants: true,
        variants: [
          { size: '350ml', label: '350ml', price: 2.0 },
          { size: '500ml', label: '500ml', price: 3.0 },
        ],
        categoryId: 'mocktails',
      },
    ],
  },

  // --------------------------------------------------------------------------
  // Frezos
  // --------------------------------------------------------------------------
  {
    id: 'frezos',
    label: 'Frezos',
    iconName: 'ice-cream',
    items: [
      {
        id: 'aero-peppermint',
        name: 'Aero Peppermint',
        price: 2.0,
        image: '/assets/menu/frezos/freezo-peppermint.webp',
        categoryId: 'frezos',
      },
      {
        id: 'choc-decadance',
        name: 'Choc Decadance',
        price: 2.0,
        image: '/assets/menu/frezos/boba-chocolate.webp',
        categoryId: 'frezos',
      },
      {
        id: 'iced-coffee',
        name: 'Iced Coffee',
        price: 2.0,
        image: '/assets/menu/frezos/coffee-iced.webp',
        tags: ['Popular'],
        categoryId: 'frezos',
      },
      {
        id: 'iced-cappuccino',
        name: 'Iced Cappuccino',
        price: 2.0,
        image: '/assets/menu/frezos/coffee-iced.webp',
        categoryId: 'frezos',
      },
      {
        id: 'mango-frezo',
        name: 'Mango Frezo',
        price: 2.0,
        image: '/assets/menu/frezos/freezo-mango.webp',
        categoryId: 'frezos',
      },
      {
        id: 'passion-fruit-frezo',
        name: 'Passion Fruit Frezo',
        price: 2.0,
        image: '/assets/menu/frezos/freezo-mango.webp',
        categoryId: 'frezos',
      },
      {
        id: 'strawberry-frezo',
        name: 'Strawberry Frezo',
        price: 2.0,
        image: '/assets/menu/frezos/freezo-strawberry.webp',
        tags: ['Popular'],
        categoryId: 'frezos',
      },
    ],
  },
]

// ============================================================================
// Add-ons (Sauces & Extras)
// ============================================================================

export type AddOn = {
  id: string
  name: string
  price: number
  image: string
}

export const addOns: AddOn[] = [
  {
    id: 'sweet-chilli-sauce',
    name: 'Sweet Chilli Sauce',
    price: 0.5,
    image: '/assets/menu/chicken-side/sauce-chilli.webp',
  },
  {
    id: 'mayo-sauce',
    name: 'Mayo Sauce',
    price: 0.5,
    image: '/assets/menu/chicken-side/sauce-mayo.webp',
  },
  {
    id: 'bbq-sauce',
    name: 'BBQ Sauce',
    price: 0.5,
    image: '/assets/menu/chicken-side/sauce-bbq.webp',
  },
  {
    id: 'chilli-sauce',
    name: 'Chilli Sauce',
    price: 0.5,
    image: '/assets/menu/chicken-side/sauce-chilli.webp',
  },
  {
    id: 'extra-cheese',
    name: 'Extra Cheese',
    price: 0.5,
    image: '/assets/menu/chicken-side/cheese-slice.webp',
  },
  {
    id: 'extra-egg',
    name: 'Extra Egg',
    price: 0.25,
    image: '/assets/menu/chicken-side/egg-fried.webp',
  },
]

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Get all menu items as a flat array
 */
export function getAllMenuItems(): MenuItem[] {
  return menuCategories.flatMap((category) => category.items)
}

/**
 * Get menu items by category ID
 */
export function getMenuItemsByCategory(categoryId: string): MenuItem[] {
  const category = menuCategories.find((c) => c.id === categoryId)
  return category?.items ?? []
}

/**
 * Get a single menu item by ID
 */
export function getMenuItemById(itemId: string): MenuItem | undefined {
  return getAllMenuItems().find((item) => item.id === itemId)
}

/**
 * Get menu categories for landing page carousel
 * Returns only: Chicken & Sides, Pizza, and Burgers
 */
export function getCarouselCategories(): MenuCategory[] {
  const carouselCategoryIds = ['chicken-side', 'pizza', 'burgers']
  return menuCategories.filter((category) =>
    carouselCategoryIds.includes(category.id)
  )
}

/**
 * Get the display price for a menu item
 * For items with variants, shows the range (e.g., "$4 - $9")
 * For regular items, shows the single price (e.g., "$4.00")
 */
export function getDisplayPrice(item: MenuItem): string {
  if (item.hasVariants && item.variants && item.variants.length > 0) {
    const prices = item.variants.map((v) => v.price)
    const min = Math.min(...prices)
    const max = Math.max(...prices)
    if (min === max) {
      return `$${min.toFixed(2)}`
    }
    return `$${min.toFixed(0)} - $${max.toFixed(0)}`
  }
  return `$${item.price.toFixed(2)}`
}

/**
 * Get variant labels for display (e.g., "R | M | L")
 */
export function getVariantLabels(item: MenuItem): string | null {
  if (!item.hasVariants || !item.variants || item.variants.length === 0) {
    return null
  }
  return item.variants.map((v) => v.label).join(' | ')
}

/**
 * Format price as currency string
 */
export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`
}
