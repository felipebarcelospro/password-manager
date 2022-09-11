import { Site } from '@prisma/client'

export type PasswordFeedProps = {
  sites: Site[]
  isLoading: boolean
}
