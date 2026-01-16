'use client'

import { useEffect, useState } from 'react'
import Avatar from 'boring-avatars'
import { HugeiconsIcon } from '@hugeicons/react'
import { Comment01Icon } from '@hugeicons/core-free-icons'
import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'

import ConversationDemo from '@/components/chat/chat-example'
import { PromptInputBasic } from '@/components/chat/chat-input'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import NeumorphButton from '@/components/ui/neumorph-button'

const assistantColors = ['#cdeccc', '#ffc52a', '#ffc629', '#f23460', '#231f20']

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const isMobile = window.matchMedia('(max-width: 767px)').matches
    if (!isMobile) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  return (
    <div className="fixed bottom-8 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {isOpen && (
        <Card className="bg-card/95 hidden w-[340px] overflow-hidden shadow-2xl backdrop-blur md:block sm:w-[380px] md:w-[420px]">
          <CardHeader className="border-border flex flex-row items-center gap-3 border-b px-3 py-2">
            <div className="flex size-10 items-center justify-center rounded-full bg-transparent">
              <Avatar
                name="Foodies Assistant"
                colors={assistantColors}
                variant="beam"
                size={40}
              />
            </div>
            <div className="flex-1">
              <CardTitle className="text-sm">Foodies Assistant</CardTitle>
              <p className="text-muted-foreground text-xs">
                Fast answers to menu questions.
              </p>
            </div>
            <Button
              aria-label="Close chat"
              onClick={() => setIsOpen(false)}
              size="icon-sm"
              variant="ghost"
            >
              <X className="size-4" />
            </Button>
          </CardHeader>
          <CardContent className="h-[360px] px-0 py-0 sm:h-[50vh]">
            <ConversationDemo className="h-full" />
          </CardContent>
          <CardFooter className="border-border bg-background/80 px-3 py-3">
            <PromptInputBasic
              className="max-w-none"
              placeholder="Ask about menu, hours, or delivery..."
            />
          </CardFooter>
        </Card>
      )}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-60 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/30"
              aria-label="Close chat"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="absolute inset-2"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <Card className="bg-card/95 flex h-full flex-col overflow-hidden rounded-[34px] shadow-2xl backdrop-blur">
                <CardHeader className="border-border flex flex-row items-center gap-3 border-b px-3 py-2">
                  <div className="flex size-10 items-center justify-center rounded-full bg-transparent">
                    <Avatar
                      name="Foodies Assistant"
                      colors={assistantColors}
                      variant="beam"
                      size={40}
                    />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-sm">Foodies Assistant</CardTitle>
                    <p className="text-muted-foreground text-xs">
                      Fast answers to menu questions.
                    </p>
                  </div>
                  <Button
                    aria-label="Close chat"
                    onClick={() => setIsOpen(false)}
                    size="icon-sm"
                    variant="ghost"
                  >
                    <X className="size-4" />
                  </Button>
                </CardHeader>
                <CardContent className="flex-1 min-h-0 px-0 py-0">
                  <ConversationDemo className="h-full" />
                </CardContent>
                <CardFooter className="border-border bg-background/80 px-3 py-3">
                  <PromptInputBasic
                    className="max-w-none"
                    placeholder="Ask about menu, hours, or delivery..."
                  />
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <NeumorphButton
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Chat open' : 'Open chat'}
        className="bg-secondary aspect-square h-10 w-11 min-w-0 rounded-full p-0 sm:h-12 sm:w-12"
        intent="default"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <HugeiconsIcon icon={Comment01Icon} size={22} className="sm:hidden" />
        <HugeiconsIcon
          icon={Comment01Icon}
          size={26}
          className="hidden sm:block"
        />
      </NeumorphButton>
    </div>
  )
}
