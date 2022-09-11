import * as React from 'react'

import { NProgress } from '@saas-ui/react'
import { useEffect, useState } from 'react'
import { NextRouter } from 'next/router'

type Props = {
  router: NextRouter
}

export const RouterProgressBar = (props: Props): React.ReactElement => {
  const { router } = props

  const [state, setState] = useState({
    isRouteChanging: false,
    loadingKey: 0
  })

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setState(prevState => ({
        ...prevState,
        isRouteChanging: true,
        loadingKey: prevState.loadingKey ^ 1
      }))
    }

    const handleRouteChangeEnd = () => {
      setState(prevState => ({
        ...prevState,
        isRouteChanging: false
      }))
    }

    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeEnd)
    router.events.on('routeChangeError', handleRouteChangeEnd)

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeEnd)
      router.events.off('routeChangeError', handleRouteChangeEnd)
    }
  }, [router.events])

  const isAnimating = state.isRouteChanging

  return (
    <>
      <NProgress
        key={state.loadingKey}
        isAnimating={isAnimating}
        colorScheme="primary"
      />
    </>
  )
}
