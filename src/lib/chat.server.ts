import OpenAI from 'openai'

import { env } from '@/lib/env'

const openai = new OpenAI({ apiKey: env.openAiApiKey })

type AssistantStreamResult = {
  stream: ReadableStream<Uint8Array>
  threadId: string
}

export async function createAssistantStream(
  message: string,
  threadId?: string,
): Promise<AssistantStreamResult> {
  const resolvedThreadId = threadId ?? (await openai.beta.threads.create()).id

  await openai.beta.threads.messages.create(resolvedThreadId, {
    role: 'user',
    content: message,
  })

  const encoder = new TextEncoder()

  const stream = new ReadableStream<Uint8Array>({
    start(controller) {
      let isClosed = false

      const closeStream = () => {
        if (isClosed) return
        isClosed = true
        controller.close()
      }

      const errorStream = (error: unknown) => {
        if (isClosed) return
        isClosed = true
        controller.error(error)
      }

      const run = openai.beta.threads.runs.stream(resolvedThreadId, {
        assistant_id: env.openAiAssistantId,
      })

      run.on('textDelta', (delta) => {
        if (!delta?.value) return
        controller.enqueue(encoder.encode(delta.value))
      })

      run.on('error', errorStream)

      run.finalRun().then(closeStream).catch(errorStream)
    },
  })

  return { stream, threadId: resolvedThreadId }
}
