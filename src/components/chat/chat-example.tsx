import { useEffect, useState } from 'react'

import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from '@/components/ui/conversation'
import { Message, MessageContent } from '@/components/ui/message'
import { Response } from '@/components/ui/response'
import { ShimmeringText } from '@/components/ui/shimmering-text'
import { cn } from '@/lib/utils'
import Avatar from 'boring-avatars'

const allMessages = [
  {
    id: '1',
    role: 'user' as const,
    parts: [
      {
        type: 'text',
        text: "Hey Foodies, what's in the Spicy Stack burger?",
      },
    ],
  },
  {
    id: '2',
    role: 'assistant' as const,
    parts: [
      {
        type: 'text',
        tokens: [
          'Great',
          ' choice!',
          ' The',
          ' Spicy',
          ' Stack',
          ' comes',
          ' with',
          ' a',
          ' double',
          ' beef',
          ' patty,',
          ' pepper',
          ' jack,',
          ' crispy',
          ' onions,',
          ' and',
          ' our',
          ' chili',
          ' mayo.',
          ' Want',
          ' to',
          ' make',
          ' it',
          ' a',
          ' combo?',
        ],
        text: 'Great choice! The Spicy Stack comes with a double beef patty, pepper jack, crispy onions, and our chili mayo. Want to make it a combo?',
      },
    ],
  },
  {
    id: '3',
    role: 'user' as const,
    parts: [
      {
        type: 'text',
        text: 'Yes, add fries and a citrus soda.',
      },
    ],
  },
  {
    id: '4',
    role: 'assistant' as const,
    parts: [
      {
        type: 'text',
        tokens: [
          'Done!',
          " I've",
          ' added',
          ' fries',
          ' and',
          ' a',
          ' citrus',
          ' soda.',
          ' Anything',
          ' else',
          " you'd",
          ' like',
          ' to',
          ' customize?',
        ],
        text: "Done! I've added fries and a citrus soda. Anything else you'd like to customize?",
      },
    ],
  },
]

type ConversationDemoProps = {
  className?: string
}

const ConversationDemo = ({ className }: ConversationDemoProps) => {
  const [messages, setMessages] = useState<typeof allMessages>([])
  const [streamingMessageIndex, setStreamingMessageIndex] = useState<
    number | null
  >(null)
  const [streamingContent, setStreamingContent] = useState('')

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = []
    const intervals: NodeJS.Timeout[] = []
    let currentMessageIndex = 0

    const addNextMessage = () => {
      if (currentMessageIndex >= allMessages.length) return

      const message = allMessages[currentMessageIndex]
      const part = message.parts[0]

      if (message.role === 'assistant' && 'tokens' in part && part.tokens) {
        setStreamingMessageIndex(currentMessageIndex)
        setStreamingContent('')

        let currentContent = ''
        let tokenIndex = 0

        const streamInterval = setInterval(() => {
          if (tokenIndex < part.tokens.length) {
            currentContent += part.tokens[tokenIndex]
            setStreamingContent(currentContent)
            tokenIndex++
          } else {
            clearInterval(streamInterval)
            setMessages((prev) => [...prev, message])
            setStreamingMessageIndex(null)
            setStreamingContent('')
            currentMessageIndex++

            // Add next message after a delay
            timeouts.push(setTimeout(addNextMessage, 500))
          }
        }, 100)

        intervals.push(streamInterval)
      } else {
        setMessages((prev) => [...prev, message])
        currentMessageIndex++

        timeouts.push(setTimeout(addNextMessage, 800))
      }
    }

    // Start after 1 second
    timeouts.push(setTimeout(addNextMessage, 1000))

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout))
      intervals.forEach((interval) => clearInterval(interval))
    }
  }, [])

  return (
    <div className={cn('flex h-full flex-col', className)}>
      <Conversation>
        <ConversationContent>
          {messages.length === 0 && streamingMessageIndex === null ? (
            <ConversationEmptyState className="gap-4">
              <div className="flex flex-col items-center gap-3">
                <div className="flex size-14 items-center justify-center rounded-full bg-transparent">
                  <Avatar
                    name="Foodies Assistant"
                    colors={[
                      '#cdeccc',
                      '#ffc52a',
                      '#ffc629',
                      '#f23460',
                      '#231f20',
                    ]}
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
                  'Show me today’s meal deals.',
                  'How late are you open?',
                ].map((prompt) => (
                  <button
                    className="border-border bg-muted/50 hover:bg-muted text-muted-foreground rounded-lg border px-3 py-2 text-xs transition-colors"
                    key={prompt}
                    type="button"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </ConversationEmptyState>
          ) : (
            <>
              {messages.map((message) => (
                <Message from={message.role} key={message.id}>
                  <MessageContent>
                    {message.parts.map((part, i) => {
                      switch (part.type) {
                        case 'text':
                          return (
                            <Response key={`${message.id}-${i}`}>
                              {part.text}
                            </Response>
                          )
                        default:
                          return null
                      }
                    })}
                  </MessageContent>
                  {message.role === 'assistant' && (
                    <div className="size-9 self-start overflow-hidden rounded-full">
                      <Avatar
                        name="Foodies Assistant"
                        colors={[
                          '#cdeccc',
                          '#ffc52a',
                          '#ffc629',
                          '#f23460',
                          '#231f20',
                        ]}
                        variant="beam"
                        size={36}
                      />
                    </div>
                  )}
                </Message>
              ))}
              {streamingMessageIndex !== null && (
                <Message
                  from={allMessages[streamingMessageIndex].role}
                  key={`streaming-${streamingMessageIndex}`}
                >
                  <MessageContent>
                    <Response>{streamingContent || '\u200B'}</Response>
                  </MessageContent>
                  {allMessages[streamingMessageIndex].role === 'assistant' && (
                    <div className="size-9 self-start overflow-hidden rounded-full">
                      <Avatar
                        name="Foodies Assistant"
                        colors={[
                          '#cdeccc',
                          '#ffc52a',
                          '#ffc629',
                          '#f23460',
                          '#231f20',
                        ]}
                        variant="beam"
                        size={36}
                      />
                    </div>
                  )}
                </Message>
              )}
            </>
          )}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>
    </div>
  )
}

export default ConversationDemo
