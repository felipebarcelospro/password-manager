import React from 'react'

import { Box, Button, Code, Flex, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Nextjs } from '../src/components/next-logo'
import { AppLayout } from '../src/layouts/app-layout'
import { DefaultLayout } from '../src/layouts/default-layout'

const IndexPage: NextPage = () => {
  const router = useRouter()

  return (
    <DefaultLayout
      nestedLayout={AppLayout}
      metadata={{
        metaTitle: 'Start Page'
      }}
    >
      <Box textAlign="center" fontSize="xl">
        <Flex flexDir="column" alignItems="center" minH="100vh" p={3}>
          <Nextjs h="16" mb="8" pointerEvents="none" />
          <Text mb="2">
            Edit <Code fontSize="xl">pages/index.tsx</Code> and save to reload.
          </Text>

          <Button variant="link" onClick={() => router.push('/another-page')}>
            Let&apos;s try another page
          </Button>
        </Flex>
      </Box>
    </DefaultLayout>
  )
}
export default IndexPage
