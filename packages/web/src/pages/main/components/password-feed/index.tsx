import React from 'react'

import {
  Box,
  Container,
  SimpleGrid,
  Skeleton,
  useColorModeValue
} from '@chakra-ui/react'
import { PasswordFeedCard } from './components/password-feed-card'
import { PasswordFeedProps } from './types'
import { Card, CardBody, EmptyState } from '@saas-ui/react'
import { FiLock } from 'react-icons/fi'

export const PasswordFeed = ({
  sites,
  isLoading
}: PasswordFeedProps): React.ReactElement => {
  if (isLoading) {
    return (
      <Box as="section">
        <Container maxW="container.lg">
          <SimpleGrid columns={[1, 2, 3]} spacing="4">
            <Skeleton h="12" borderRadius="lg" />
            <Skeleton h="12" borderRadius="lg" />
            <Skeleton h="12" borderRadius="lg" />
          </SimpleGrid>
        </Container>
      </Box>
    )
  }

  if (!isLoading && sites.length === 0) {
    return (
      <Box as="section">
        <Container maxW="container.lg">
          <Card
            variant="outline"
            borderColor={useColorModeValue('blackAlpha.200', 'whiteAlpha.200')}
          >
            <CardBody py="12">
              <EmptyState
                colorScheme="primary"
                icon={FiLock}
                title="No passwords yet"
                description="You don't have any passwords yet. Click on the button below to add your first password."
              />
            </CardBody>
          </Card>
        </Container>
      </Box>
    )
  }

  return (
    <Box as="section">
      <Container maxW="container.lg">
        <SimpleGrid columns={[1, 2, 3]} spacing="4">
          {sites.map(site => (
            <PasswordFeedCard key={site.id} site={site} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
