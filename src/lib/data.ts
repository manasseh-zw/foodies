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
        description: 'Tender, flame-grilled full chicken seasoned with our signature spice blend. Juicy on the inside with a perfectly charred skin.',
        price: 12.0,
        image: '/assets/menu/chicken-side/chicken-full.webp',
        tags: ['Family Size'],
        categoryId: 'chicken-side',
      },
      {
        id: 'full-chicken-meal',
        name: 'Full Chicken Meal',
        description: 'Our famous flame-grilled full chicken served with large chips, fresh coleslaw, and soft rolls. The ultimate family feast.',
        price: 14.0,
        image: '/assets/menu/chicken-side/chicken-meal.webp',
        tags: ['Family Size', 'Meal'],
        categoryId: 'chicken-side',
      },
      {
        id: 'quarter-chicken-chips',
        name: '1/4 Chicken & Chips',
        description: 'A perfectly grilled 1/4 chicken served with a generous portion of our golden, crispy chips.',
        price: 4.0,
        image: '/assets/menu/chicken-side/chicken-chips.webp',
        tags: ['Popular'],
        categoryId: 'chicken-side',
      },
      {
        id: '1-piece-chips',
        name: '1 Piece & Chips',
        description: 'One piece of our crunchy, golden fried chicken paired with a side of crispy fries. Simple and satisfying.',
        price: 3.0,
        image: '/assets/menu/chicken-side/fried-chicken-plate.webp',
        categoryId: 'chicken-side',
      },
      {
        id: '2-pieces-chips',
        name: '2 Pieces & Chips',
        description: 'Two pieces of our signature fried chicken, crispy on the outside and juicy inside, served with golden chips.',
        price: 4.0,
        image: '/assets/menu/chicken-side/chicken-chips.webp',
        tags: ['Popular'],
        categoryId: 'chicken-side',
      },
      {
        id: '3-pieces-chips',
        name: '3 Pieces & Chips',
        description: 'Three succulent pieces of fried chicken seasoned to perfection, served with a large portion of chips.',
        price: 6.0,
        image: '/assets/menu/chicken-side/chicken-chips.webp',
        categoryId: 'chicken-side',
      },
      {
        id: 'chicken-piece',
        name: 'Chicken Piece',
        description: 'A single piece of our delicious, crispy-coated fried chicken. Great as a quick snack!',
        price: 2.0,
        image: '/assets/menu/chicken-side/fried-chicken-plate.webp',
        categoryId: 'chicken-side',
      },
      {
        id: '8pc-bucket',
        name: '8 Piece Bucket',
        description: 'A sharing bucket filled with 8 pieces of our legendary fried chicken. Perfect for groups and gatherings.',
        price: 11.0,
        image: '/assets/menu/chicken-side/chicken-bucket.webp',
        tags: ['Family Size'],
        categoryId: 'chicken-side',
      },
      // Salads
      {
        id: 'coleslaw-salad',
        name: 'Coleslaw Salad',
        description: 'Fresh, crunchy cabbage and carrots tossed in a rich, creamy dressing. A classic side that pairs with everything.',
        price: 1.0,
        image: '/assets/menu/chicken-side/salad-coleslaw.webp',
        tags: ['Healthy'],
        categoryId: 'chicken-side',
      },
      {
        id: 'italian-salad',
        name: 'Italian Salad',
        description: 'A light and refreshing mix of seasonal greens, tomatoes, cucumbers, and olives with a zesty Italian vinaigrette.',
        price: 2.0,
        image: '/assets/menu/chicken-side/salad-italian.webp',
        tags: ['Healthy'],
        categoryId: 'chicken-side',
      },
      {
        id: 'chicken-salad',
        name: 'Chicken Salad',
        description: 'Tender grilled chicken strips on a bed of fresh greens, drizzled with a creamy herb dressing.',
        price: 3.0,
        image: '/assets/menu/chicken-side/salad-chicken.webp',
        tags: ['Healthy', 'Popular'],
        categoryId: 'chicken-side',
      },
      // Fries
      {
        id: 'large-chips',
        name: 'Large Chips',
        description: 'A large portion of our signature hand-cut fries, fried until golden and seasoned with a touch of salt.',
        price: 1.5,
        image: '/assets/menu/chicken-side/fries-plain.webp',
        categoryId: 'chicken-side',
      },
      {
        id: 'loaded-fries',
        name: 'Loaded Fries',
        description: 'Golden fries smothered in melted cheese, crispy bacon bits, and topped with zesty jalapeños.',
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
        description: 'A juicy flame-grilled beef patty topped with fresh lettuce, tomatoes, onions, and our secret burger sauce on a toasted bun.',
        price: 3.0,
        image: '/assets/menu/chicken-side/burger-beef.webp',
        tags: ['Popular'],
        categoryId: 'burgers',
      },
      {
        id: 'chicken-burger',
        name: 'Chicken Burger',
        description: 'Succulent breaded chicken breast, golden-fried and served with creamy mayo and fresh lettuce in a soft bun.',
        price: 2.5,
        image: '/assets/menu/chicken-side/burger-chicken.webp',
        categoryId: 'burgers',
      },
      {
        id: 'beef-burger-chips',
        name: 'Beef Burger & Chips',
        description: 'Our classic beef burger served with a side of golden-brown crispy chips for the complete meal experience.',
        price: 4.0,
        image: '/assets/menu/chicken-side/burger-fries.webp',
        tags: ['Meal'],
        categoryId: 'burgers',
      },
      {
        id: 'chicken-burger-chips',
        name: 'Chicken Burger & Chips',
        description: 'The favorite chicken burger paired perfectly with our famous crispy chips.',
        price: 4.0,
        image: '/assets/menu/chicken-side/burger-fries.webp',
        tags: ['Meal'],
        categoryId: 'burgers',
      },
      {
        id: 'double-beef-burger',
        name: 'Double Beef Burger',
        description: 'For the big appetite – two juicy beef patties layered with fresh toppings for double the flavor.',
        price: 4.0,
        image: '/assets/menu/chicken-side/burger-double-beef.webp',
        tags: ['Best Seller'],
        categoryId: 'burgers',
      },
      {
        id: 'double-chicken-burger',
        name: 'Double Chicken Burger',
        description: 'Two crispy chicken fillets stacked high with fresh lettuce and mayo in a soft toasted bun.',
        price: 4.0,
        image: '/assets/menu/chicken-side/burger-double-chicken.webp',
        categoryId: 'burgers',
      },
      {
        id: 'double-beef-cheese-burger',
        name: 'Double Beef Cheese Burger',
        description: 'Double beef, double satisfaction. Two juicy patties topped with melted cheddar cheese for a rich, savory taste.',
        price: 4.5,
        image: '/assets/menu/chicken-side/burger-double-beef.webp',
        tags: ['Best Seller'],
        categoryId: 'burgers',
      },
      {
        id: 'double-chicken-cheese-burger',
        name: 'Double Chicken Cheese Burger',
        description: 'Two crispy chicken fillets with melted cheese, creating a perfect balance of crunch and creaminess.',
        price: 4.5,
        image: '/assets/menu/chicken-side/burger-double-chicken.webp',
        categoryId: 'burgers',
      },
      // Wraps
      {
        id: 'plain-wrap',
        name: 'Plain Wrap',
        description: 'A soft tortilla wrap filled with tender chicken strips, fresh garden greens, and a touch of creamy dressing.',
        price: 3.0,
        image: '/assets/menu/chicken-side/wrap-chicken-spicy.webp',
        categoryId: 'burgers',
      },
      {
        id: 'spicy-wrap',
        name: 'Spicy Wrap',
        description: 'Ignite your taste buds with spicy chicken strips, jalapeños, and a zesty peri-peri sauce tucked in a soft wrap.',
        price: 3.0,
        image: '/assets/menu/chicken-side/wrap-chicken-spicy.webp',
        tags: ['Spicy'],
        categoryId: 'burgers',
      },
      {
        id: 'hawaiian-wrap',
        name: 'Hawaiian Wrap',
        description: 'A tropical twist – tender chicken, sweet pineapple chunks, and fresh lettuce with a tangy island sauce.',
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
        description: 'Tender steak strips, red onions, and bell peppers on a smoky BBQ sauce base, smothered in mozzarella.',
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
        description: 'A timeless classic featuring sweet pineapple chunks and savory ham over a rich tomato and cheese base.',
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
        description: 'Succulent grilled chicken and earthy sliced mushrooms on a bed of melted mozzarella and tomato sauce.',
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
        description: 'A vibrant mix of grilled chicken, sweet pineapple, and colorful bell peppers for a taste of the tropics.',
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
        description: 'Zesty sweet chilli chicken paired with bell peppers and onions for a perfect sweet and spicy balance.',
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
        description: 'A local favorite featuring savory boerewors chunks, onions, and a touch of traditional spice.',
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
        description: 'Spicy peri-peri chicken, onions, and jalapeños for those who love a bold and fiery kick.',
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
        description: "The ultimate meat-lover's dream – loaded with pepperoni, ham, beef, and bacon on a cheese-packed base.",
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
        description: 'Our signature pizza topped with everything you love – meats, vegetables, and extra cheese for the ultimate experience.',
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
        description: 'All the flavors of a beef burger – ground beef, pickles, and onions, drizzled with our signature burger sauce.',
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
        description: 'A delicious variation with tender chicken and sweet pineapple on a mozzarella-loaded base.',
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
        description: 'Simple yet elegant – a classic tomato base topped with plenty of melted mozzarella and fresh basil.',
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
        description: 'A colorful garden on a pizza – bell peppers, onions, mushrooms, olives, and sweetcorn for a fresh, healthy bite.',
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
        description: 'A classic, smooth black coffee made with freshly ground premium beans and hot water.',
        price: 2.0,
        image: '/assets/menu/hot-beverages/coffee-black.webp',
        categoryId: 'hot-beverages',
      },
      {
        id: 'cappuccino',
        name: 'Cappuccino',
        description: 'Rich espresso topped with a thick layer of velvety steamed milk foam and a dusting of cocoa.',
        price: 3.0,
        image: '/assets/menu/hot-beverages/coffee-cappuccino.webp',
        tags: ['Popular'],
        categoryId: 'hot-beverages',
      },
      {
        id: 'espresso',
        name: 'Espresso',
        description: 'A bold and intense shot of pure coffee essence for the ultimate caffeine boost.',
        price: 1.0,
        image: '/assets/menu/hot-beverages/coffee-black.webp',
        categoryId: 'hot-beverages',
      },
      {
        id: 'hot-chocolate',
        name: 'Hot Chocolate',
        description: 'Rich, velvety cocoa blended with creamy steamed milk for a comforting, chocolatey treat.',
        price: 3.0,
        image: '/assets/menu/hot-beverages/coffee-chocolate.webp',
        categoryId: 'hot-beverages',
      },
      {
        id: 'latte',
        name: 'Latte',
        description: 'Smooth espresso combined with plenty of silky steamed milk for a mellow and creamy coffee experience.',
        price: 3.0,
        image: '/assets/menu/hot-beverages/coffee-cappuccino.webp',
        categoryId: 'hot-beverages',
      },
      {
        id: 'mocha',
        name: 'Mocha',
        description: 'The perfect marriage of rich chocolate and bold espresso, topped with light milk foam.',
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
        description: 'A refreshing burst of blueberry flavor with fun, chewy boba pearls for a delightful popping sensation.',
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
        description: 'A vibrant, layered blend of citrus and tropical fruits that looks like a beautiful summer sunset.',
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
        description: 'A dance of sweet, sun-ripened mangoes and tropical juices, topped with refreshing fruit bits.',
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
        description: 'Tangy and exotic passion fruit extract blended into a cool, refreshing drink with sweet boba pearls.',
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
        description: 'A cool and refreshing frozen blend infused with bubbly peppermint chocolate for a minty-sweet treat.',
        price: 2.0,
        image: '/assets/menu/frezos/freezo-peppermint.webp',
        categoryId: 'frezos',
      },
      {
        id: 'choc-decadance',
        name: 'Choc Decadance',
        description: "The ultimate chocolate lover's indulgence – a thick, creamy frozen chocolate blend topped with shavings.",
        price: 2.0,
        image: '/assets/menu/frezos/boba-chocolate.webp',
        categoryId: 'frezos',
      },
      {
        id: 'iced-coffee',
        name: 'Iced Coffee',
        description: 'Our premium coffee blend, sweetened and served over crushed ice for a refreshing cold kick.',
        price: 2.0,
        image: '/assets/menu/frezos/coffee-iced.webp',
        tags: ['Popular'],
        categoryId: 'frezos',
      },
      {
        id: 'iced-cappuccino',
        name: 'Iced Cappuccino',
        description: 'A chilled version of our classic cappuccino, frothy and refreshing with a touch of sweetness.',
        price: 2.0,
        image: '/assets/menu/frezos/coffee-iced.webp',
        categoryId: 'frezos',
      },
      {
        id: 'mango-frezo',
        name: 'Mango Frezo',
        description: 'Pure tropical bliss – a thick and icy mango blend that tastes like a vacation in a glass.',
        price: 2.0,
        image: '/assets/menu/frezos/freezo-mango.webp',
        categoryId: 'frezos',
      },
      {
        id: 'passion-fruit-frezo',
        name: 'Passion Fruit Frezo',
        description: 'An icy, tangy treat made with exotic passion fruit for a refreshing and zesty cool-down.',
        price: 2.0,
        image: '/assets/menu/frezos/freezo-mango.webp',
        categoryId: 'frezos',
      },
      {
        id: 'strawberry-frezo',
        name: 'Strawberry Frezo',
        description: 'A sweet and creamy frozen strawberry delight, bursting with the flavor of fresh summer berries.',
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
