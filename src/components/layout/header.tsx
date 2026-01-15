import { Logo } from "@/components/logo"
import { NavbarWithMenu, NavbarMenuSection } from "@/components/ui/navbar-menu"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Store01Icon,
  DeliveryTruck01Icon,
  Time01Icon,
  GiftCardIcon,
  ShoppingBagIcon,
  SaleTag01Icon,
  RestaurantTableIcon,
  CoffeeBeansIcon,
  DrinkIcon,
  IceCreamIcon,
  BookOpen01Icon,
  ChefHatIcon,
  StarIcon,
} from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"

const sections: NavbarMenuSection[] = [
  {
    id: "locations",
    gridLayout: "grid grid-cols-3 gap-4",
    links: [
      {
        label: "Find Restaurant",
        href: "/locations",
        description: "Locate our nearest restaurant",
        icon: <HugeiconsIcon icon={Store01Icon} size={20} />,
      },
      {
        label: "Delivery Areas",
        href: "/delivery",
        description: "Check if we deliver to you",
        icon: <HugeiconsIcon icon={DeliveryTruck01Icon} size={20} />,
      },
      {
        label: "Store Hours",
        href: "/hours",
        description: "Opening times and holidays",
        icon: <HugeiconsIcon icon={Time01Icon} size={20} />,
      },
    ],
  },
  {
    id: "menu",
    gridLayout: "grid grid-cols-2 grid-rows-2 gap-4",
    links: [
      {
        label: "Featured Dishes",
        href: "/menu/featured",
        description: "Chef's recommendations",
        rowSpan: 2,
        icon: <HugeiconsIcon icon={RestaurantTableIcon} size={20} />,
      },
      {
        label: "Seasonal Specials",
        href: "/menu/seasonal",
        description: "Limited time offerings",
        icon: <HugeiconsIcon icon={CoffeeBeansIcon} size={20} />,
      },
      {
        label: "Drinks",
        href: "/menu/drinks",
        description: "Beverages and cocktails",
        icon: <HugeiconsIcon icon={DrinkIcon} size={20} />,
      },
    ],
  },
  {
    id: "about",
    gridLayout: "grid grid-cols-3 gap-4",
    links: [
      {
        label: "Our Story",
        href: "/about",
        description: "Learn about our journey",
        icon: <HugeiconsIcon icon={BookOpen01Icon} size={20} />,
      },
      {
        label: "Chef Team",
        href: "/chefs",
        description: "Meet our culinary experts",
        icon: <HugeiconsIcon icon={ChefHatIcon} size={20} />,
      },
      {
        label: "Reviews",
        href: "/reviews",
        description: "What people are saying",
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
          <Button variant="default" size="default">Contact</Button>
        </a>
      }
      className={className}
    />
  )
}
