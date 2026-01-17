import { Logo } from '@/components/logo'
import { NavbarWithMenu, NavbarMenuSection } from '@/components/ui/navbar-menu'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  Store01Icon,
  DeliveryTruck01Icon,
  Time01Icon,
  RestaurantTableIcon,
  CoffeeBeansIcon,
  DrinkIcon,
  BookOpen01Icon,
  ChefHatIcon,
  StarIcon,
} from '@hugeicons/core-free-icons'
import { Button } from '@/components/ui/button'

const sections: NavbarMenuSection[] = [
  {
    id: 'locations',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4238.408711693214!2d31.042886083412025!3d-17.82704083278533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a5d8b01c384f%3A0xf7827f9045b50114!2s13th%20floor%20Karigamombe%20building%2C%20East%20wing!5e1!3m2!1sen!2szw!4v1768677283348!5m2!1sen!2szw',
    mapLink:
      'https://www.google.com/maps/place/13th+floor+Karigamombe+building,+East+wing/@-17.82704083278533,31.042886083412025,17z/data=!3m1!4b1!4m6!3m5!1s0x1931a5d8b01c384f:0xf7827f9045b50114!8m2!3d-17.82704083278533!4d31.042886083412025!16s%2Fg%2F11j8z3n5qh',
    links: [],
  },
  {
    id: 'menu',
    directLink: '/menu',
    gridLayout: 'grid grid-cols-2 grid-rows-2 gap-4',
    links: [
      {
        label: 'Featured Dishes',
        href: '/menu',
        description: "Chef's recommendations",
        rowSpan: 2,
        icon: <HugeiconsIcon icon={RestaurantTableIcon} size={20} />,
      },
      {
        label: 'Seasonal Specials',
        href: '/menu',
        description: 'Limited time offerings',
        icon: <HugeiconsIcon icon={CoffeeBeansIcon} size={20} />,
      },
      {
        label: 'Drinks',
        href: '/menu',
        description: 'Beverages and cocktails',
        icon: <HugeiconsIcon icon={DrinkIcon} size={20} />,
      },
    ],
  },
  {
    id: 'about',
    directLink: '/#about',
    gridLayout: 'grid grid-cols-3 gap-4',
    links: [
      {
        label: 'Our Story',
        href: '/about',
        description: 'Learn about our journey',
        icon: <HugeiconsIcon icon={BookOpen01Icon} size={20} />,
      },
      {
        label: 'Chef Team',
        href: '/chefs',
        description: 'Meet our culinary experts',
        icon: <HugeiconsIcon icon={ChefHatIcon} size={20} />,
      },
      {
        label: 'Reviews',
        href: '/reviews',
        description: 'What people are saying',
        icon: <HugeiconsIcon icon={StarIcon} size={20} />,
      },
    ],
  },
]

interface HeaderProps {
  className?: string
}

export function Header({ className }: HeaderProps) {
  return (
    <NavbarWithMenu
      sections={sections}
      logo={<Logo className="text-3xl text-secondary-foreground" />}
      ctaButton={
        <a href="/contact">
          <Button variant="default" size="default">
            Contact
          </Button>
        </a>
      }
      className={className}
    />
  )
}
