import React from 'react'
import axios from 'axios'

import {
  useColorModeValue,
  Flex,
  Heading,
  HStack,
  IconButton,
  Collapse,
  Divider,
  Button,
  useDisclosure,
  SimpleGrid,
  Tooltip
} from '@chakra-ui/react'
import {
  Card,
  CardBody,
  Form,
  FormLayout,
  Field,
  SubmitButton
} from '@saas-ui/react'
import {
  FiEye,
  FiEdit2,
  FiTrash,
  FiUser,
  FiLock,
  FiExternalLink
} from 'react-icons/fi'
import { CopyButton } from '../../../../../../components/copy-button'
import { PasswordFeedCardProps } from './types'
import { useRouter } from 'next/router'

export const PasswordFeedCard = ({
  site
}: PasswordFeedCardProps): React.ReactElement => {
  const editCollapse = useDisclosure()
  const viewCollapse = useDisclosure()
  const router = useRouter()

  const handleToggleEdit = () => {
    viewCollapse.onClose()
    editCollapse.onToggle()
  }

  const handleToggleView = () => {
    editCollapse.onClose()
    viewCollapse.onToggle()
  }

  const handleUpdate = async (data: any) => {
    await axios.put(`/api/password-cards/${site.id}`, data)
    router.reload()
  }

  const handleDelete = async () => {
    await axios.delete(`/api/password-cards/${site.id}`)
    router.reload()
  }

  return (
    <Card
      bg={useColorModeValue('white', 'whiteAlpha.50')}
      borderColor={useColorModeValue('blackAlpha.200', 'whiteAlpha.200')}
      maxH={viewCollapse.isOpen || editCollapse.isOpen ? 'auto' : '12'}
    >
      <CardBody>
        <Flex alignItems="flex-start" justifyContent="space-between">
          <Heading fontSize="md">{site.name}</Heading>
          <HStack>
            <Tooltip label="View">
              <IconButton
                aria-label="View"
                icon={<FiEye />}
                onClick={handleToggleView}
                variant="link"
                size="sm"
              />
            </Tooltip>
            <Tooltip label="Edit">
              <IconButton
                aria-label="Edit"
                icon={<FiEdit2 />}
                onClick={handleToggleEdit}
                variant="link"
                size="sm"
              />
            </Tooltip>
          </HStack>
        </Flex>

        <Collapse in={viewCollapse.isOpen} animateOpacity>
          <Divider my="4" />

          <SimpleGrid spacing="2">
            <CopyButton
              content={site.username}
              leftIcon={<FiUser />}
              justifyContent="left"
              size="md"
            />
            <CopyButton
              content={site.password}
              leftIcon={<FiLock />}
              justifyContent="left"
              size="md"
            />
            <CopyButton
              content={site.url}
              leftIcon={<FiExternalLink />}
              justifyContent="left"
              size="md"
            />
          </SimpleGrid>
        </Collapse>

        <Collapse in={editCollapse.isOpen} animateOpacity>
          <Form onSubmit={handleUpdate} defaultValues={site}>
            <Divider my="4" />

            <FormLayout mb="4">
              <Field type="text" name="username" label="Username" />
              <Field type="password" name="password" label="Password" />
              <Field type="url" name="url" label="URL" />
            </FormLayout>

            <Flex justifyContent="flex-end">
              <HStack>
                <Button
                  leftIcon={<FiTrash />}
                  variant="link"
                  colorScheme="red"
                  onClick={handleDelete}
                >
                  Excluir
                </Button>
                <SubmitButton>Salvar</SubmitButton>
              </HStack>
            </Flex>
          </Form>
        </Collapse>
      </CardBody>
    </Card>
  )
}
