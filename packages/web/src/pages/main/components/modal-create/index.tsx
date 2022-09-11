import React from 'react'
import axios from 'axios'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react'
import { Form, FormLayout, Field, SubmitButton } from '@saas-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { ModalCreateProps } from './types'
import { useRouter } from 'next/router'
import { PasswordGenerator } from './components/password-generator'
import { modalCreateFormSchema } from './schemas'

export const ModalCreate = ({
  isOpen,
  onClose
}: ModalCreateProps): React.ReactElement => {
  const router = useRouter()

  const onSubmit = async (values: any) => {
    await axios.post('/api/password-cards', values)
    router.reload()
  }

  return (
    <Modal
      size={['full', 'full', 'sm']}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Save a password</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Form
            onSubmit={onSubmit}
            resolver={yupResolver(modalCreateFormSchema)}
          >
            <FormLayout>
              <Field
                name="name"
                label="Name"
                type="text"
                placeholder="Choose a name for this card."
                size="sm"
              />

              <Field
                name="username"
                type="text"
                label="Username/Email"
                placeholder="Input your username/email"
                size="sm"
              />

              <Field
                name="password"
                type="password"
                label="Password"
                placeholder="Input your password."
                size="sm"
              />

              <PasswordGenerator />

              <Field
                name="url"
                type="text"
                label="URL"
                placeholder="Input URL for this card"
                help="This URL will be used to open the site in a new tab."
                size="sm"
              />

              <SubmitButton mb="4" disableIfInvalid>
                Create Card
              </SubmitButton>
            </FormLayout>
          </Form>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
