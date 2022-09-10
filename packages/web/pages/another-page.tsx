import { Box, Text, Flex, Button } from '@chakra-ui/react'
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
        metaTitle: 'Another Page'
      }}
    >
      <Box textAlign="center" fontSize="xl">
        <Flex flexDir="column" minH="100vh" p={3}>
          <Nextjs h="16" mb="8" pointerEvents="none" />
          <Text mb="2">Another page</Text>

          <Button variant="link" onClick={() => router.push('/')}>
            Back to main page
          </Button>
        </Flex>
      </Box>
    </DefaultLayout>
  )
}
export default IndexPage
