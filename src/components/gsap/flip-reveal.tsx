"use client"

import * as React from 'react'
import { gsap } from 'gsap'
import { Flip } from 'gsap/dist/Flip'

// Register GSAP Flip plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(Flip)
}

type FlipRevealContextType = {
  registerItem: (key: string, element: HTMLElement | null) => void
  visibleKeys: string[]
}

const FlipRevealContext = React.createContext<FlipRevealContextType | null>(null)

type FlipRevealProps = {
  children: React.ReactNode
  keys: string[]
  className?: string
  showClass?: string
  hideClass?: string
}

/**
 * FlipReveal - Wrapper component that animates children with GSAP Flip
 * when their visibility changes based on filter keys.
 * Provides smooth, layout-aware animations when filtering items.
 */
function FlipReveal({
  children,
  keys,
  className,
  showClass = 'block',
  hideClass = 'hidden',
}: FlipRevealProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const itemsRef = React.useRef<Map<string, HTMLElement>>(new Map())
  const prevKeysRef = React.useRef<string[]>(keys)
  const isFirstRender = React.useRef(true)

  const registerItem = React.useCallback((key: string, element: HTMLElement | null) => {
    if (element) {
      itemsRef.current.set(key, element)
    } else {
      itemsRef.current.delete(key)
    }
  }, [])

  const contextValue = React.useMemo(() => ({
    registerItem,
    visibleKeys: keys,
  }), [registerItem, keys])

  React.useEffect(() => {
    // Skip animation on first render
    if (isFirstRender.current) {
      isFirstRender.current = false
      // Set initial visibility without animation
      itemsRef.current.forEach((element, key) => {
        const isVisible = keys.includes(key) || keys.includes('all')
        element.classList.remove(showClass, hideClass)
        element.classList.add(isVisible ? showClass : hideClass)
      })
      prevKeysRef.current = keys
      return
    }

    // Skip if keys haven't changed
    if (JSON.stringify(prevKeysRef.current) === JSON.stringify(keys)) {
      return
    }

    const container = containerRef.current
    if (!container) return

    // Get all flip items
    const flipItems = container.querySelectorAll('[data-flip-id]')
    
    // Get current state before changes
    const state = Flip.getState(flipItems)

    // Update visibility classes
    itemsRef.current.forEach((element, key) => {
      const isVisible = keys.includes(key) || keys.includes('all')
      element.classList.remove(showClass, hideClass)
      element.classList.add(isVisible ? showClass : hideClass)
    })

    // Animate from previous state to new state with smooth transitions
    Flip.from(state, {
      duration: 0.6,
      ease: 'power3.out',
      stagger: 0.03,
      absolute: true,
      scale: true,
      onEnter: (elements) => {
        gsap.fromTo(elements, 
          { opacity: 0, scale: 0.85, y: 20 },
          { 
            opacity: 1, 
            scale: 1, 
            y: 0,
            duration: 0.5,
            ease: 'back.out(1.2)'
          }
        )
      },
      onLeave: (elements) => {
        return gsap.to(elements, { 
          opacity: 0, 
          scale: 0.85,
          y: -10,
          duration: 0.35,
          ease: 'power2.in'
        })
      },
    })

    prevKeysRef.current = keys
  }, [keys, showClass, hideClass])

  return (
    <FlipRevealContext.Provider value={contextValue}>
      <div ref={containerRef} className={className}>
        {children}
      </div>
    </FlipRevealContext.Provider>
  )
}

type FlipRevealItemProps = {
  children: React.ReactNode
  flipKey: string
}

/**
 * FlipRevealItem - Individual item that participates in Flip animations
 */
function FlipRevealItem({ children, flipKey }: FlipRevealItemProps) {
  const context = React.useContext(FlipRevealContext)
  const elementRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (context) {
      context.registerItem(flipKey, elementRef.current)
    }
    return () => {
      if (context) {
        context.registerItem(flipKey, null)
      }
    }
  }, [context, flipKey])

  const isVisible = context?.visibleKeys.includes(flipKey) || context?.visibleKeys.includes('all')

  return (
    <div
      ref={elementRef}
      data-flip-id={flipKey}
      className={isVisible ? 'flex' : 'hidden'}
    >
      {children}
    </div>
  )
}

export { FlipReveal, FlipRevealItem }
