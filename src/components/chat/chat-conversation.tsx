import Avatar from 'boring-avatars'
import { useEffect, useState } from 'react'

import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
} from '@/components/ui/conversation'
import { Message, MessageContent } from '@/components/ui/message'
import { Response } from '@/components/ui/response'
import { ShimmeringText } from '@/components/ui/shimmering-text'
import { cn } from '@/lib/utils'

export type ChatMessage = {
  id: string
  role: 'user' | 'assistant'
  content: string
}

type ChatConversationProps = {
  className?: string
  messages: ChatMessage[]
  streamingMessageId?: string | null
  isThinking?: boolean
  assistantColors?: string[]
  onPromptSelect?: (prompt: string) => void
}

const defaultAssistantColors = [
  '#cdeccc',
  '#ffc52a',
  '#ffc629',
  '#f23460',
  '#231f20',
]

function ThinkingIndicator({ className }: { className?: string }) {
  const [dotCount, setDotCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prev) => (prev + 1) % 4)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  const dots = '.'.repeat(dotCount)

  return <span className={cn('text-xs', className)}>typing{dots}</span>
}

export const ChatConversation = ({
  className,
  messages,
  streamingMessageId,
  isThinking = false,
  assistantColors = defaultAssistantColors,
  onPromptSelect,
}: ChatConversationProps) => (
  <div className={cn('flex h-full flex-col', className)}>
    <Conversation className="menu-scroll">
      <ConversationContent>
        {messages.length === 0 ? (
          <ConversationEmptyState className="gap-4">
            <div className="flex flex-col items-center gap-3">
              <div className="flex size-14 items-center justify-center rounded-full bg-transparent">
                <Avatar
                  name="Foodies Assistant"
                  colors={assistantColors}
                  variant="beam"
                  size={44}
                />
              </div>
              <div className="space-y-1 text-center">
                <ShimmeringText
                  text="Foodies Assistant"
                  className="text-foreground text-sm font-semibold"
                />
                <p className="text-muted-foreground text-xs">
                  Ask about menu items, combos, or delivery times.
                </p>
              </div>
            </div>
            <div className="grid w-full gap-2 text-left">
              {[
                'What is in the Spicy Stack?',
                "Show me today's meal deals.",
                'How late are you open?',
              ].map((prompt) => (
                <button
                  className="border-border bg-muted/50 hover:bg-muted text-muted-foreground rounded-lg border px-3 py-2 text-xs transition-colors"
                  key={prompt}
                  type="button"
                  onClick={() => onPromptSelect?.(prompt)}
                >
                  {prompt}
                </button>
              ))}
            </div>
          </ConversationEmptyState>
        ) : (
          <>
            {messages.map((message) => {
              const isStreamingAssistant =
                message.id === streamingMessageId &&
                message.role === 'assistant'
              const showThinking = isStreamingAssistant && isThinking

              return (
                <Message from={message.role} key={message.id}>
                  <MessageContent
                    variant="contained"
                    className={showThinking ? 'text-white' : undefined}
                  >
                    {showThinking && !message.content ? (
                      <ThinkingIndicator />
                    ) : (
                      <Response>{message.content || '\u200B'}</Response>
                    )}
                  </MessageContent>
                  {message.role === 'assistant' && (
                    <div className="size-9 self-start overflow-hidden rounded-full">
                      <Avatar
                        name="Foodies Assistant"
                        colors={assistantColors}
                        variant="beam"
                        size={36}
                      />
                    </div>
                  )}
                </Message>
              )
            })}
          </>
        )}
      </ConversationContent>
    </Conversation>
  </div>
)
