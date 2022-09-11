import { extendTheme } from '@chakra-ui/react'
import { theme as baseTheme } from '@saas-ui/react'

export const theme = extendTheme(
  {
    fonts: {
      body: 'Basier Circle, sans-serif',
      heading: 'Basier Circle, sans-serif'
    }
  },
  baseTheme
)
