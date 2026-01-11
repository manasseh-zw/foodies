export type MenuItem = {
  id: string
  name: string
  price: string
  image: string
  tags?: string[]
}

export type MenuCategory = {
  id: string
  label: string
  emoji: string
  items: MenuItem[]
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'burgers',
    label: 'Burgers & Wraps',
    emoji: '🍔',
    items: [
      {
        id: 'beef-burger',
        name: 'Beef Burger',
        price: '$3.00',
        image: '/assets/menu/beef-burger.png',
        tags: ['Popular'],
      },
      {
        id: 'chicken-burger',
        name: 'Chicken Burger',
        price: '$2.50',
        image: '/assets/menu/chicken-burger.png',
      },
      {
        id: 'double-beef-cheese',
        name: 'Double Beef Cheese Burger',
        price: '$4.00',
        image: '/assets/menu/double-beef-cheese.png',
        tags: ['Best Seller'],
      },
      {
        id: 'spicy-wrap',
        name: 'Spicy Wrap',
        price: '$3.00',
        image: '/assets/menu/spicy-wrap.png',
        tags: ['Spicy'],
      },
      {
        id: 'hawaiian-wrap',
        name: 'Hawaiian Wrap',
        price: '$3.50',
        image: '/assets/menu/hawaiian-wrap.png',
      },
    ],
  },
  {
    id: 'chicken',
    label: 'Chicken & Sides',
    emoji: '🍗',
    items: [
      {
        id: 'quarter-chicken',
        name: 'Quarter Chicken & Chips',
        price: '$4.00',
        image: '/assets/menu/quarter-chicken.png',
        tags: ['Popular'],
      },
      {
        id: 'full-chicken-meal',
        name: 'Full Chicken Meal',
        price: '$14.00',
        image: '/assets/menu/full-chicken.png',
        tags: ['Family Size'],
      },
      {
        id: 'two-pieces-chips',
        name: '2 Pieces & Chips',
        price: '$5.00',
        image: '/assets/menu/two-pieces.png',
      },
      {
        id: 'coleslaw-salad',
        name: 'Coleslaw Salad',
        price: '$1.00',
        image: '/assets/menu/coleslaw.png',
        tags: ['Healthy'],
      },
      {
        id: 'italian-salad',
        name: 'Italian Salad',
        price: '$2.00',
        image: '/assets/menu/italian-salad.png',
        tags: ['Healthy'],
      },
    ],
  },
  {
    id: 'pizza',
    label: 'Pizza',
    emoji: '🍕',
    items: [
      {
        id: 'bbq-steak-pizza',
        name: 'BBQ Steak Pizza',
        price: '$4 - $9',
        image: '/assets/menu/bbq-steak-pizza.png',
        tags: ['Popular'],
      },
      {
        id: 'hawaiian-pizza',
        name: 'Hawaiian Pizza',
        price: '$4 - $9',
        image: '/assets/menu/hawaiian-pizza.png',
      },
      {
        id: 'meat-deluxe',
        name: 'Meat Deluxe',
        price: '$6 - $12',
        image: '/assets/menu/meat-deluxe.png',
        tags: ['Deluxe'],
      },
      {
        id: 'foodies-supreme',
        name: 'Foodies Supreme',
        price: '$5 - $10',
        image: '/assets/menu/foodies-supreme.png',
        tags: ['House Special'],
      },
      {
        id: 'margherita',
        name: 'Margherita',
        price: '$4 - $9',
        image: '/assets/menu/margherita.png',
        tags: ['Vegetarian'],
      },
    ],
  },
  {
    id: 'combos',
    label: 'Meal Combos',
    emoji: '🍟',
    items: [
      {
        id: 'beef-meal',
        name: 'Beef Burger & Chips',
        price: '$4.00',
        image: '/assets/menu/beef-meal.png',
        tags: ['Value'],
      },
      {
        id: 'chicken-meal',
        name: 'Chicken Burger & Chips',
        price: '$4.00',
        image: '/assets/menu/chicken-meal.png',
        tags: ['Value'],
      },
      {
        id: 'double-chicken-cheese',
        name: 'Double Chicken Cheese Burger',
        price: '$3.50',
        image: '/assets/menu/double-chicken-cheese.png',
      },
      {
        id: 'wrap-combo',
        name: 'Wrap & Drink Combo',
        price: '$5.00',
        image: '/assets/menu/wrap-combo.png',
        tags: ['Deal'],
      },
      {
        id: 'family-feast',
        name: 'Family Feast',
        price: '$25.00',
        image: '/assets/menu/family-feast.png',
        tags: ['Family Size'],
      },
    ],
  },
]
