import React from 'react'

import { NextPage } from 'next'
import { DefaultLayout } from '../src/layouts/default-layout'
import { MainPage } from '../src/pages/main'

const IndexPage: NextPage = () => {
  return (
    <DefaultLayout
      metadata={{
        title: 'Password Manager'
      }}
    >
      <MainPage />
    </DefaultLayout>
  )
}
export default IndexPage
