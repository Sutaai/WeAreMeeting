import { z } from 'zod'

const envSchema = z.object({
  meetingIn: z.number({ error: 'Must be a number' }).gt(0, { error: 'Must be greater than zero.' }),
})

export default defineNitroPlugin(() => {
  // const result = envSchema.safeParse(useRuntimeConfig().public)

  // if (!result.success) {
  //   const errors = z.treeifyError(result.error)

  //   const meetingInError = errors.properties?.meetingIn?.errors
  //   if (meetingInError) {
  //     console.error('Invalid meeting in timestamp:', meetingInError)
  //   }
  //   process.exit(1)
  // }
})
