import { Container, Flex, HStack, VisuallyHidden } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { ColorModeSwitcher } from '../components/color-mode-switcher'
import { Nextjs } from '../components/next-logo'

type Props = {
  children?: React.ReactNode
}

export const AppLayout = ({ children }: Props): React.ReactElement => (
  <Container maxWidth="1200px">
    <header>
      <Flex py={4} justifyContent="space-between" alignItems="center" mb={8}>
        <Flex justifyContent="space-between" alignItems="center">
          <nav>
            <HStack spacing={15}>
              <Link
                href="/"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Nextjs h="1.5rem" pointerEvents="none" mr={4} />
                <VisuallyHidden>Saas UI Next.js starter</VisuallyHidden>
              </Link>
            </HStack>
          </nav>
        </Flex>
        <ColorModeSwitcher justifySelf="flex-end" />
      </Flex>
    </header>
    {children}
  </Container>
)
