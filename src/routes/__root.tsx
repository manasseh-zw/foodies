import { HeadContent, Scripts, createRootRoute, Outlet } from '@tanstack/react-router'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Foodies - Good Bites, Good Vibes',
      },
      {
        name: 'description',
        content: 'Fresh ingredients, bold flavors, and unforgettable dining experiences delivered right to your door. Order burgers, pizza, chicken, and more!',
      },
      {
        name: 'apple-mobile-web-app-title',
        content: 'Foodies',
      },
      // Performance hints
      {
        name: 'theme-color',
        content: '#F97316', // Primary color for browser chrome
      },
    ],
    links: [
      // Preload critical LCP image for faster hero rendering
      {
        rel: 'preload',
        as: 'image',
        href: '/assets/burger&fries&callout.webp',
        fetchPriority: 'high',
      },
      // Preload critical fonts
      {
        rel: 'preload',
        as: 'style',
        href: appCss,
      },
      {
        rel: 'stylesheet',
        href: appCss,
      },
      // DNS prefetch for external resources (if any CDNs are used)
      {
        rel: 'dns-prefetch',
        href: '//fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      // Favicons
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-96x96.png',
        sizes: '96x96',
      },
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/favicon.svg',
      },
      {
        rel: 'shortcut icon',
        href: '/favicon.ico',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
    ],
  }),
  shellComponent: RootDocument,
  component: RootLayout,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}

/**
 * RootLayout - Shared layout for all pages
 * Page content renders here via Outlet
 */
function RootLayout() {
  return <Outlet />
}


