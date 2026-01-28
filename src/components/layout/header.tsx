import { Logo } from '@/components/logo'
import { Navbar, NavLink } from '@/components/ui/navbar-menu'
import { Button } from '@/components/ui/button'

const navLinks: NavLink[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'menu', label: 'Menu', href: '/menu' },
  { id: 'locations', label: 'Locations', href: '/locations' },
]

interface HeaderProps {
  className?: string
}

export function Header({ className }: HeaderProps) {
  return (
    <Navbar
      links={navLinks}
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
