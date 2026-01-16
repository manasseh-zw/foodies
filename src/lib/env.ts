const getEnv = (key: string) => {
  const value = process.env[key]
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`)
  }
  return value
}

export const env = {
  openAiApiKey: getEnv('OPENAI_API_KEY'),
  openAiAssistantId: getEnv('OPENAI_ASSISTANT_ID'),
}
