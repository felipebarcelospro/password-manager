import React from 'react'
import axios from 'axios'

import { Box, Divider, useDisclosure } from '@chakra-ui/react'
import { Filter } from './components/filter'
import { PasswordFeed } from './components/password-feed'
import { ModalCreate } from './components/modal-create'

export const MainPage = (): React.ReactElement => {
  const modalCreate = useDisclosure()

  const [passwords, setPasswords] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)
  const [search, setSearch] = React.useState('')

  const handleSearch = (value: string) => {
    setSearch(value)
  }

  const getPasswordsCards = async () => {
    setIsLoading(true)

    await new Promise(resolve => setTimeout(resolve, 3000))
    const { data } = await axios.get('/api/password-cards', {
      params: search && {
        search
      }
    })

    setPasswords(data)
    setIsLoading(false)
  }

  React.useEffect(() => {
    getPasswordsCards()
  }, [])

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      getPasswordsCards()
    }, 500)

    return () => clearTimeout(timeout)
  }, [search])

  return (
    <Box as="main" py="8">
      <Filter onOpenModalCreate={modalCreate.onOpen} onSearch={handleSearch} />
      <Divider my="8" />
      <PasswordFeed sites={passwords} isLoading={isLoading} />

      <ModalCreate {...modalCreate} />
    </Box>
  )
}
