'use client'

import { useState, useRef, useEffect, forwardRef } from 'react'
import { cn } from '@/lib/utils'

type LoadingStrategy = 'eager' | 'lazy'
type FetchPriority = 'high' | 'low' | 'auto'
type Decoding = 'sync' | 'async' | 'auto'

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /**
   * The image source URL
   */
  src: string
  /**
   * Alt text for accessibility
   */
  alt: string
  /**
   * Loading strategy - 'eager' for above-the-fold images, 'lazy' for below-the-fold
   * @default 'lazy'
   */
  loading?: LoadingStrategy
  /**
   * Fetch priority for the image resource
   * Use 'high' for LCP (Largest Contentful Paint) images like hero images
   * @default 'auto'
   */
  fetchPriority?: FetchPriority
  /**
   * Image decoding strategy
   * @default 'async'
   */
  decoding?: Decoding
  /**
   * Whether to show a blur placeholder while loading
   * @default true
   */
  showPlaceholder?: boolean
  /**
   * Placeholder color or gradient
   * @default 'bg-muted'
   */
  placeholderClass?: string
  /**
   * Whether to use Intersection Observer for lazy loading (better than native lazy)
   * @default false - uses native lazy loading
   */
  useIntersectionObserver?: boolean
  /**
   * Root margin for Intersection Observer (when to start loading before entering viewport)
   * @default '200px'
   */
  rootMargin?: string
  /**
   * Width for intrinsic sizing (helps prevent layout shift)
   */
  width?: number | string
  /**
   * Height for intrinsic sizing (helps prevent layout shift)
   */
  height?: number | string
  /**
   * Aspect ratio class for container (alternative to width/height)
   */
  aspectRatio?: string
  /**
   * Additional container className
   */
  containerClassName?: string
}

/**
 * OptimizedImage - A performance-optimized image component for TanStack Start
 * 
 * Features:
 * - Native lazy loading with fetchPriority support
 * - Optional Intersection Observer for earlier/controlled loading
 * - Blur placeholder to prevent layout shift
 * - Decoding optimization
 * - LCP optimization support with fetchPriority="high"
 * 
 * Usage:
 * 
 * Hero images (LCP critical):
 * <OptimizedImage src="..." alt="..." loading="eager" fetchPriority="high" />
 * 
 * Below-the-fold images:
 * <OptimizedImage src="..." alt="..." loading="lazy" />
 * 
 * With Intersection Observer for early loading:
 * <OptimizedImage src="..." alt="..." useIntersectionObserver rootMargin="400px" />
 */
const OptimizedImage = forwardRef<HTMLImageElement, OptimizedImageProps>(
  (
    {
      src,
      alt,
      loading = 'lazy',
      fetchPriority = 'auto',
      decoding = 'async',
      showPlaceholder = true,
      placeholderClass = 'bg-muted',
      useIntersectionObserver = false,
      rootMargin = '200px',
      width,
      height,
      aspectRatio,
      containerClassName,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [isVisible, setIsVisible] = useState(!useIntersectionObserver)
    const [hasError, setHasError] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    // Intersection Observer for controlled lazy loading
    useEffect(() => {
      if (!useIntersectionObserver) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true)
              observer.disconnect()
            }
          })
        },
        {
          rootMargin,
          threshold: 0,
        }
      )

      if (containerRef.current) {
        observer.observe(containerRef.current)
      }

      return () => observer.disconnect()
    }, [useIntersectionObserver, rootMargin])

    const handleLoad = () => {
      setIsLoaded(true)
    }

    const handleError = () => {
      setHasError(true)
      setIsLoaded(true)
    }

    // For eager loading, we don't need the intersection observer
    const shouldRenderImage = loading === 'eager' || isVisible

    // Container style for aspect ratio sizing
    const containerStyle: React.CSSProperties = {}
    if (aspectRatio) {
      containerStyle.aspectRatio = aspectRatio
    }

    return (
      <div
        ref={containerRef}
        className={cn(
          'relative overflow-hidden',
          containerClassName
        )}
        style={containerStyle}
      >
        {/* Placeholder */}
        {showPlaceholder && !isLoaded && (
          <div
            className={cn(
              'absolute inset-0 animate-pulse transition-opacity duration-300',
              placeholderClass,
              isLoaded && 'opacity-0'
            )}
            aria-hidden="true"
          />
        )}

        {/* Error state */}
        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground text-sm">
            Failed to load
          </div>
        )}

        {/* Image */}
        {shouldRenderImage && !hasError && (
          <img
            ref={ref}
            src={src}
            alt={alt}
            loading={loading}
            // @ts-expect-error - fetchPriority is a valid HTML attribute but not typed in React yet
            fetchpriority={fetchPriority}
            decoding={decoding}
            width={width}
            height={height}
            onLoad={handleLoad}
            onError={handleError}
            className={cn(
              'transition-opacity duration-300',
              !isLoaded && 'opacity-0',
              isLoaded && 'opacity-100',
              className
            )}
            style={style}
            {...props}
          />
        )}
      </div>
    )
  }
)

OptimizedImage.displayName = 'OptimizedImage'

export { OptimizedImage }
export type { OptimizedImageProps, LoadingStrategy, FetchPriority }
