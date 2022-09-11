import Head from 'next/head'

export type MetaData = {
  title?: string
  description?: string
  image?: string
  noIndex?: boolean
  url?: string
}

type DefaultLayoutProps = {
  children: React.ReactNode
  metadata?: MetaData
  nestedLayout?: any
}

export const DefaultLayout = ({
  children,
  metadata = {
    title: 'Password Manager',
    description: '',
    image: '',
    noIndex: false,
    url: ''
  }
}: DefaultLayoutProps): React.ReactElement => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>

        <link rel="icon" href="/images/favicon.png" />

        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta
          name="robots"
          content={metadata.noIndex ? 'noindex, nofollow' : 'index follow'}
        />

        <meta property="og:site_name" content="Vibe Dev" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={metadata.url} />
        <meta property="twitter:title" content={metadata.title} />
        <meta property="twitter:description" content={metadata.description} />
        <meta property="twitter:image" content={metadata.image} />
      </Head>

      {children}
    </>
  )
}
