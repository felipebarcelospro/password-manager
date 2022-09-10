import { extendTheme } from '@chakra-ui/react'
import { theme as baseTheme } from '@saas-ui/react'

export const theme = extendTheme(
  {
    styles: {
      global: {
        pre: {
          fontSize: 'sm',
          as: 'pre',
          fontFamily: 'Open Sans',
          whiteSpace: 'pre-wrap'
        }
      }
    },
    fonts: {
      body: 'Basier Circle, sans-serif',
      heading: 'Basier Circle, sans-serif'
    },
    colors: {
      primary: {
        100: '#c2c6ee',
        200: '#aeb4e8',
        300: '#9aa1e3',
        400: '#868fdd',
        500: '#5E6AD2'
      },
      secondary: {
        100: '#a57be7',
        200: '#9766e3',
        300: '#8850df',
        400: '#793bdb',
        500: '#6023C0'
      }
    },
    components: {
      Button: {
        baseStyle: {
          fontWeight: 400
        },
        variants: {
          solid: {
            bg: 'primary.500',
            color: 'white',
            border: '1px solid rgb(94, 106, 210)',
            boxShadow: 'rgb(0 0 0 / 25%) 0px 1px 2px',
            _hover: {
              bg: 'primary.500',
              filter: 'brightness(1.2)'
            }
          },
          link: {
            color: 'primary.500'
          }
        },
        defaultProps: {
          size: 'lg'
        }
      }
    }
  },
  baseTheme
)
