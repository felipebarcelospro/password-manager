import Link from 'next/link'

import type { NextComponentType, NextPageContext } from 'next'

import { SaasProvider } from '@saas-ui/react'
import { NextRouter, useRouter } from 'next/router'
import { theme } from '../src/styles/theme'
import { RouterProgressBar } from '../src/components/router-progress-bar'

import '../src/styles/default.scss'

export interface AppRenderProps {
  pageProps: any
  err?: Error
  Component: NextComponentType<NextPageContext, AppRenderProps, any>
  router: NextRouter
}

export default function App({
  Component,
  pageProps
}: AppRenderProps): React.ReactElement {
  const router = useRouter()

  return (
    <SaasProvider theme={theme} linkComponent={Link}>
      <RouterProgressBar router={router} />
      <Component {...pageProps} />
    </SaasProvider>
  )
}
