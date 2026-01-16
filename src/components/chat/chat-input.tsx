'use client'

import {
  PromptInput,
  PromptInputAction,
  PromptInputActions,
  PromptInputTextarea,
} from '@/components/ui/prompt-input'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { HugeiconsIcon } from '@hugeicons/react'
import { Loading03Icon, SentIcon } from '@hugeicons/core-free-icons'
import { useState } from 'react'

type PromptInputBasicProps = {
  className?: string
  placeholder?: string
  value?: string
  isLoading?: boolean
  onValueChange?: (value: string) => void
  onSubmit?: () => void
  disabled?: boolean
}

export function PromptInputBasic({
  className,
  placeholder = 'Ask me anything...',
  value,
  isLoading,
  onValueChange,
  onSubmit,
  disabled = false,
}: PromptInputBasicProps) {
  const [internalValue, setInternalValue] = useState('')
  const [internalLoading, setInternalLoading] = useState(false)

  const inputValue = value ?? internalValue
  const loadingValue = isLoading ?? internalLoading

  const handleSubmit = () => {
    if (disabled || loadingValue) return
    if (onSubmit) {
      onSubmit()
      return
    }
    setInternalLoading(true)
    setTimeout(() => {
      setInternalLoading(false)
      setInternalValue('')
    }, 2000)
  }

  const handleValueChange = (nextValue: string) => {
    onValueChange?.(nextValue)
    if (!onValueChange) {
      setInternalValue(nextValue)
    }
  }

  return (
    <PromptInput
      value={inputValue}
      onValueChange={handleValueChange}
      isLoading={loadingValue}
      onSubmit={handleSubmit}
      disabled={disabled}
      className={cn('w-full max-w-(--breakpoint-md)', className)}
    >
      <PromptInputTextarea
        placeholder={placeholder}
        disableAutosize
        className="max-h-24 min-h-[36px] overflow-y-auto"
      />
      <PromptInputActions className="justify-end pt-2">
        <PromptInputAction
          tooltip={loadingValue ? 'Stop generation' : 'Send message'}
        >
          <Button
            variant="default"
            size="icon"
            className="h-8 w-8 rounded-full"
            onClick={handleSubmit}
            disabled={disabled}
          >
            {loadingValue ? (
              <HugeiconsIcon
                icon={Loading03Icon}
                size={18}
                className="animate-spin"
              />
            ) : (
              <HugeiconsIcon icon={SentIcon} size={18} />
            )}
          </Button>
        </PromptInputAction>
      </PromptInputActions>
    </PromptInput>
  )
}
