import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  APP_URL: z.string().url(),
})

const parsedEvent = envSchema.safeParse(process.env)

if (!parsedEvent.success) {
  console.error(
    'Invalid environment variables.',
    parsedEvent.error.flatten().fieldErrors,
  )

  throw new Error('Invalid environment variables.')
}

export const env = parsedEvent.data
