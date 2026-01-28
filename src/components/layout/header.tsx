import { Logo } from '@/components/logo'
import { NavbarWithMenu, NavbarMenuSection } from '@/components/ui/navbar-menu'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  RestaurantTableIcon,
  CoffeeBeansIcon,
  DrinkIcon,
} from '@hugeicons/core-free-icons'
import { Button } from '@/components/ui/button'

const sections: NavbarMenuSection[] = [
  {
    id: 'home',
    directLink: '/',
    links: [],
  },
  {
    id: 'locations',
    directLink: '/locations',
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
]

interface HeaderProps {
  className?: string
}

export function Header({ className }: HeaderProps) {
  return (
    <NavbarWithMenu
      sections={sections}
      logo={
        <a href="/">
          <Logo className="text-3xl text-secondary-foreground" />
        </a>
      }
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
