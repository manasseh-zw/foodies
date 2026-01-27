'use client'
import * as React from 'react'
import { motion } from 'motion/react'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from '@/components/ui/animated-modal'
import { Button } from '@/components/animate-ui/button'
import {
  type MenuItem,
  type Variant,
  type AddOn,
  addOns,
  formatPrice,
} from '@/lib/data'

// ============================================================================
// Types
// ============================================================================

type ProductModalProps = {
  item: MenuItem
  children: React.ReactNode
  className?: string
}

type VariantSelectorProps = {
  variants: Variant[]
  selectedVariant: Variant | null
  onSelect: (variant: Variant) => void
}

type AddOnSelectorProps = {
  addOns: AddOn[]
  selectedAddOns: AddOn[]
  onToggle: (addOn: AddOn) => void
}

// ============================================================================
// Variant Selector Component
// ============================================================================

function VariantSelector({
  variants,
  selectedVariant,
  onSelect,
}: VariantSelectorProps) {
  return (
    <div className="space-y-2">
      <h4 className="font-display text-xs uppercase tracking-wide text-muted-foreground">
        Choose Size
      </h4>
      <div className="flex flex-wrap gap-2">
        {variants.map((variant) => {
          const isSelected = selectedVariant?.size === variant.size
          return (
            <motion.button
              key={variant.size}
              type="button"
              onClick={() => onSelect(variant)}
              className={cn(
                'relative flex flex-col items-center justify-center px-4 py-2 rounded-xl border-2 transition-all',
                'min-w-[70px] cursor-pointer',
                isSelected
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border bg-card hover:border-primary/50 text-card-foreground'
              )}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="font-display text-sm font-bold uppercase">
                {variant.label}
              </span>
              <span className="text-xs text-muted-foreground">
                {formatPrice(variant.price)}
              </span>
              {isSelected && (
                <motion.div
                  layoutId="variant-check"
                  className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                >
                  <Check className="w-2.5 h-2.5 text-primary-foreground" />
                </motion.div>
              )}
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}

// ============================================================================
// Add-On Selector Component
// ============================================================================

function AddOnSelector({
  addOns,
  selectedAddOns,
  onToggle,
}: AddOnSelectorProps) {
  return (
    <div className="space-y-2">
      <h4 className="font-display text-sm font-bold uppercase tracking-wide text-foreground mb-3">
        Add Extras
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {addOns.map((addOn) => {
          const isSelected = selectedAddOns.some((a) => a.id === addOn.id)
          return (
            <motion.button
              key={addOn.id}
              type="button"
              onClick={() => onToggle(addOn)}
              className={cn(
                'relative flex items-center gap-3 px-3 py-2 rounded-xl border-2 transition-all cursor-pointer text-left overflow-hidden',
                isSelected
                  ? 'border-primary bg-primary/5 text-primary'
                  : 'border-neutral-200 bg-card hover:border-primary/50 text-foreground'
              )}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute top-0 right-0 bg-primary px-1 py-0.5 rounded-bl-lg">
                <span className="text-[10px] font-bold text-black">
                  +{formatPrice(addOn.price)}
                </span>
              </div>
              <img
                src={addOn.image}
                alt={addOn.name}
                className="w-6 h-6 object-contain"
              />
              <div className="flex flex-col items-start flex-1 min-w-0 pr-6">
                <span className="text-xs font-bold leading-tight w-full">
                  {addOn.name}
                </span>
              </div>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}

// ============================================================================
// Price Display Component
// ============================================================================

function PriceDisplay({ total }: { total: number }) {
  return (
    <motion.div
      className="flex items-center gap-2"
      key={total}
      initial={{ scale: 0.95, opacity: 0.7 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      <span className="text-lg font-bold text-foreground">Total:</span>
      <span className="font-display text-2xl font-black text-primary">
        {formatPrice(total)}
      </span>
    </motion.div>
  )
}

// ============================================================================
// Product Modal Content
// ============================================================================

function ProductModalContent({ item }: { item: MenuItem }) {
  const [selectedVariant, setSelectedVariant] = React.useState<Variant | null>(
    item.hasVariants && item.variants ? item.variants[0] : null
  )
  const [selectedAddOns, setSelectedAddOns] = React.useState<AddOn[]>([])

  // Calculate total price
  const basePrice = selectedVariant?.price ?? item.price
  const addOnsPrice = selectedAddOns.reduce((sum, addOn) => sum + addOn.price, 0)
  const totalPrice = basePrice + addOnsPrice

  const handleAddOnToggle = (addOn: AddOn) => {
    setSelectedAddOns((prev) =>
      prev.some((a) => a.id === addOn.id)
        ? prev.filter((a) => a.id !== addOn.id)
        : [...prev, addOn]
    )
  }

  return (
    <>
      <ModalContent className="p-0 overflow-hidden">
        {/* Main Content: Grid 1x1 mobile, 2x1 desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          {/* Image Section */}
          <div className="relative w-full md:h-full bg-linear-to-br from-primary/20 via-accent/20 to-primary/10 flex items-center justify-center p-4 md:p-6">
            <motion.img
              src={item.image}
              alt={item.name}
              className="w-full max-w-[180px] md:max-w-none md:w-full aspect-square object-contain drop-shadow-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            />
            {/* Tags */}
            {item.tags && item.tags.length > 0 && (
              <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[10px] font-bold uppercase bg-secondary text-secondary-foreground rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="flex flex-col p-4 md:p-6 overflow-y-auto max-h-[60vh] md:max-h-full">
            {/* Title & Description */}
            <div className="mb-4">
              <h2 className="font-display text-xl md:text-2xl font-black uppercase tracking-tight text-card-foreground">
                {item.name}
              </h2>
              {item.description && (
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>

            {/* Variants Selector */}
            {item.hasVariants && item.variants && item.variants.length > 0 && (
              <div className="mb-4">
                <VariantSelector
                  variants={item.variants}
                  selectedVariant={selectedVariant}
                  onSelect={setSelectedVariant}
                />
              </div>
            )}

            {/* Add-ons Selector */}
            <div className="mb-4">
              <AddOnSelector
                addOns={addOns}
                selectedAddOns={selectedAddOns}
                onToggle={handleAddOnToggle}
              />
            </div>

            {/* Spacer to push footer down and add bottom padding */}
            <div className="flex-1 min-h-[50px]" />
          </div>
        </div>
      </ModalContent>

      {/* Footer with Price and Buy Button */}
      <ModalFooter className="flex items-center justify-between bg-muted/50 backdrop-blur-sm border-t border-border px-4 md:px-6 py-3">
        <PriceDisplay total={totalPrice} />
        <Button
          disabled
          className="font-display uppercase tracking-wide opacity-60 cursor-not-allowed"
        >
          Buy Soon
        </Button>
      </ModalFooter>
    </>
  )
}

// ============================================================================
// Main Product Modal Component
// ============================================================================

function ProductModal({ item, children, className }: ProductModalProps) {
  return (
    <Modal>
      <ModalTrigger className={cn('p-0 m-0 bg-transparent overflow-visible', className)}>
        {children}
      </ModalTrigger>
      <ModalBody className="md:max-w-4xl md:max-h-[85vh] max-h-[90vh] min-h-0 rounded-2xl overflow-hidden">
        <ProductModalContent item={item} />
      </ModalBody>
    </Modal>
  )
}

export { ProductModal }
