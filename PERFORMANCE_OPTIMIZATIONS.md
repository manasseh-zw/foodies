# Foodies SEO & Performance Optimization Guide

This document outlines the optimizations applied to the Foodies TanStack Start project and additional recommendations.

## ✅ Optimizations Applied

### 1. **Automatic Code Splitting** (Vite Config)

- Enabled `autoCodeSplitting: true` in the TanStack Router plugin
- Routes are now automatically lazy-loaded, reducing initial bundle size
- Each route loads its own chunk on-demand

### 2. **Hero Image LCP Optimization** (hero-section.tsx)

- Added `loading="eager"` for immediate loading
- Added `fetchpriority="high"` to prioritize over other resources
- Added `decoding="async"` for non-blocking decode
- This ensures the hero image (Largest Contentful Paint element) loads ASAP

### 3. **Lazy Loading for Below-the-Fold Images**

Applied to all images below the hero section:

- **Menu Showcase** (menu-showcase.tsx) - 4 images
- **CTA Section** (cta-section.tsx) - waiter image
- **Menu Search Cards** (menu-search-card.tsx) - all menu item images
- **Testimonials** (already had lazy loading)

### 4. **Critical Resource Preloading** (\_\_root.tsx)

- Added `<link rel="preload">` for the hero image with `fetchpriority="high"`
- Added stylesheet preloading for faster CSS delivery
- Added DNS prefetch/preconnect for Google Fonts

### 5. **SEO Improvements** (\_\_root.tsx)

- Added descriptive meta title: "Foodies - Good Bites, Good Vibes"
- Added meta description for search engines
- Added theme-color meta tag for browser chrome

### 6. **Build Optimizations** (vite.config.ts)

- Target set to `esnext` for modern browser optimization
- CSS code splitting enabled
- Modern ES modules for smaller bundles

### 7. **OptimizedImage Component Created** (components/ui/optimized-image.tsx)

A reusable component for future image optimizations with:

- Native lazy loading support
- Intersection Observer for controlled loading
- Blur placeholder to prevent layout shift
- fetchPriority support for LCP images

### 8. **Removed GSAP & Simplified Menu Animations**

- **Removed GSAP dependency** - saved ~97KB from the bundle
- Replaced complex GSAP Flip animations with simple Framer Motion
- Fixed overflow glitch where items escaped their container during filtering
- Animations now use `AnimatePresence` with `layout` for smooth, contained transitions

### 9. **Improved Scrollbar UX** (styles.css)

- Made scrollbar always visible in menu search container
- Added visible track background so users know it's scrollable
- Improved scrollbar styling with hover states

---

## 📋 Things YOU Need to Do

### High Priority

1. **Optimize the Mermaid Chunk (~2MB)**
   The mermaid library is creating a massive 2MB chunk. Consider:

   ```tsx
   // Dynamically import mermaid only when needed
   const Mermaid = React.lazy(() => import('mermaid'))
   ```

   Or remove it if not actively used on the landing page.

2. **Convert Remaining JPG Images to WebP**
   Some images are still in JPG format:
   - `/assets/review-3.jpg` (47KB)
   - `/assets/review-4.jpg` (20KB)
   - `/assets/waiter.jpg` (121KB)
   - `/assets/menu/menu-showcase1-4.jpg` (110KB-356KB each)

   Convert to WebP for 25-35% size reduction:

   ```bash
   # Using cwebp (install: brew install webp)
   cwebp -q 80 waiter.jpg -o waiter.webp
   ```

3. **Add Width/Height to Images for CLS**
   To prevent Cumulative Layout Shift (CLS), add explicit dimensions:
   ```tsx
   <img src="/assets/burger.webp" width={800} height={600} alt="..." />
   ```

### Medium Priority

4. **Consider Removing Unused Dependencies**
   Review if all these are needed on the landing page:
   - `mermaid` - Only if you use markdown diagrams
   - `openai` - Only if using on client-side
   - `streamdown` - Only for streaming responses

5. **Add Font Display Swap**
   Ensure fonts don't block rendering:

   ```css
   @font-face {
     font-family: 'Fraunces';
     font-display: swap; /* Show fallback immediately */
   }
   ```

6. **Enable Gzip/Brotli Compression**
   When deploying, ensure your server/CDN has compression enabled:
   - Vercel: Automatic
   - Netlify: Automatic
   - Self-hosted: Configure nginx/apache

7. **Add Cache Headers for Static Assets**
   Configure long cache times for `/assets/*`:
   ```
   Cache-Control: public, max-age=31536000, immutable
   ```

### Low Priority

8. **Consider Using a CDN for Images**
   Services like Cloudinary, imgix, or Vercel's Image Optimization can:
   - Serve WebP/AVIF automatically
   - Resize images on-the-fly
   - Add automatic compression

9. **Add Structured Data for SEO**
   Add JSON-LD structured data for rich search results:

   ```tsx
   <script type="application/ld+json">
   {
     "@context": "https://schema.org",
     "@type": "Restaurant",
     "name": "Foodies",
     "description": "Fresh ingredients, bold flavors...",
     "image": "https://yoursite.com/assets/burger.webp"
   }
   </script>
   ```

10. **Monitor Core Web Vitals**
    Set up monitoring using:
    - [PageSpeed Insights](https://pagespeed.web.dev/)
    - [web-vitals npm package](https://www.npmjs.com/package/web-vitals) (already in your devDependencies!)

    ```tsx
    // In your app initialization
    import { onCLS, onINP, onLCP, onFCP, onTTFB } from 'web-vitals'

    onCLS(console.log)
    onLCP(console.log)
    onINP(console.log)
    ```

---

## 📊 Expected Performance Improvements

| Metric                         | Before       | After (Expected)                 |
| ------------------------------ | ------------ | -------------------------------- |
| LCP (Largest Contentful Paint) | Slow         | Fast (hero image prioritized)    |
| Initial Bundle                 | Large        | ~30-50% smaller (code splitting) |
| Below-fold Images              | Block render | Load on scroll                   |
| Time to Interactive            | Delayed      | Faster (lazy routes)             |

---

## 🔍 How to Test

1. **Run Lighthouse Audit**

   ```bash
   # Build and preview
   bun run build
   bun run preview
   ```

   Then open Chrome DevTools > Lighthouse > Run audit

2. **Check Network Waterfall**
   - Open DevTools > Network
   - Reload page
   - Verify hero image loads with high priority
   - Verify other images load lazily on scroll

3. **Test on Slow Connections**
   - DevTools > Network > Slow 3G
   - Verify progressive loading works

---

## 📁 Files Modified

- `vite.config.ts` - Added autoCodeSplitting, build optimizations
- `src/routes/__root.tsx` - Preload hints, SEO meta tags
- `src/sections/hero-section.tsx` - LCP optimization
- `src/sections/menu-showcase.tsx` - Lazy loading
- `src/sections/cta-section.tsx` - Lazy loading
- `src/components/menu/menu-search-card.tsx` - Lazy loading
- `src/components/ui/optimized-image.tsx` - NEW: Reusable optimized image component
