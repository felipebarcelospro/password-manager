import React from 'react'

import {
  Box,
  HStack,
  IconButton,
  Text,
  Tooltip,
  useColorModeValue
} from '@chakra-ui/react'
import { CopyButton } from '../../../../../../components/copy-button'
import { FiRefreshCcw } from 'react-icons/fi'

export const PasswordGenerator = (): React.ReactElement => {
  const [password, setPassword] = React.useState('')

  const handlePasswordGenerator = () => {
    const length = 20
    const charset =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let retVal = ''
    for (let i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n))
    }

    setPassword(retVal)
  }

  React.useEffect(() => {
    handlePasswordGenerator()
  }, [])

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      border="1px solid"
      borderColor={useColorModeValue('blackAlpha.200', 'whiteAlpha.200')}
      bg={useColorModeValue('blackAlpha.50', 'whiteAlpha.50')}
      p="2"
      borderRadius="base"
    >
      <Text fontSize="2xs" opacity="0.6">
        SUGGEST
      </Text>

      <HStack>
        <Tooltip label="Suggest a new password">
          <IconButton
            aria-label="Regenerate"
            size="xs"
            icon={<FiRefreshCcw />}
            variant="ghost"
            onClick={handlePasswordGenerator}
          />
        </Tooltip>
        <CopyButton size="xs" content={password} />
      </HStack>
    </Box>
  )
}
