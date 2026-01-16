import { createServerFn } from '@tanstack/react-start'

import { createAssistantStream } from '@/lib/chat.server'

type ChatStreamInput = {
  message: string
  threadId?: string | null
}

export const streamAssistantResponse = createServerFn({ method: 'POST' })
  .inputValidator((data: ChatStreamInput) => data)
  .handler(async ({ data }) => {
    const { stream, threadId } = await createAssistantStream(
      data.message,
      data.threadId ?? undefined,
    )

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache, no-transform',
        'x-thread-id': threadId,
      },
    })
  })
