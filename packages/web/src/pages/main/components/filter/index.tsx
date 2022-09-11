import React from 'react'

import { Container, Button, Box, HStack } from '@chakra-ui/react'
import { SearchInput } from '@saas-ui/react'
import { FilterProps } from './types'
import { ColorModeSwitcher } from '../../../../components/color-mode-switcher'

export const Filter = ({
  onOpenModalCreate,
  onSearch
}: FilterProps): React.ReactElement => {
  return (
    <Box as="section">
      <Container maxW="container.lg">
        <Box display="flex" alignItems="center">
          <SearchInput
            maxW="2xs"
            size="sm"
            onChange={e => onSearch(e.target.value)}
            mr="4"
          />
          <HStack spacing="4">
            <Button size="sm" variant="primary" onClick={onOpenModalCreate}>
              Save a password
            </Button>
            <ColorModeSwitcher />
          </HStack>
        </Box>
      </Container>
    </Box>
  )
}
