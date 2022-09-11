import React from 'react'

import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps
} from '@chakra-ui/react'
import { FiMoon, FiSun } from 'react-icons/fi'

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>

export const ColorModeSwitcher = (
  props: ColorModeSwitcherProps
): React.ReactElement => {
  const { toggleColorMode } = useColorMode()

  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(FiMoon, FiSun)

  return (
    <IconButton
      fontSize="lg"
      variant="outline"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      aria-label={`Switch to ${text} mode`}
      {...props}
    />
  )
}
