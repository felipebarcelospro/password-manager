import React from 'react'

import { Button } from '@chakra-ui/react'
import { FiCheck, FiCopy } from 'react-icons/fi'
import { useSnackbar } from '@saas-ui/react'
import { CopyButtonProps } from './types'

export const CopyButton = ({
  content,
  ...rest
}: CopyButtonProps): React.ReactElement => {
  const snackbar = useSnackbar()

  const [isCopied, setIsCopied] = React.useState(false)

  const handleCopy = () => {
    setIsCopied(true)

    navigator.clipboard.writeText(content)

    snackbar({
      title: 'Copiado para a área de transferência',
      status: 'success'
    })

    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  return (
    <Button
      isActive={isCopied}
      rightIcon={isCopied ? <FiCheck /> : <FiCopy />}
      onClick={handleCopy}
      size="xs"
      {...rest}
    >
      {content}
    </Button>
  )
}
