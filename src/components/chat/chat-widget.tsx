'use client'

import { useEffect, useState } from 'react'
import Avatar from 'boring-avatars'
import { HugeiconsIcon } from '@hugeicons/react'
import { Comment01Icon } from '@hugeicons/core-free-icons'
import { X } from 'lucide-react'

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

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <Card className="bg-card/95 w-[340px] overflow-hidden shadow-2xl backdrop-blur sm:w-[380px] md:w-[420px]">
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
          <CardContent className="h-[360px] px-0 py-0 sm:h-[400px]">
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
      <NeumorphButton
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Chat open' : 'Open chat'}
        className="h-12 w-12 rounded-full p-0 bg-secondary"
        intent="default"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <HugeiconsIcon icon={Comment01Icon} size={26} />
      </NeumorphButton>
    </div>
  )
}
