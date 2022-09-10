import Head from 'next/head'

export type MetaData = {
  metaTitle?: string
  metaDescription?: string
  metaImage?: string
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
  nestedLayout,
  metadata = {
    metaTitle: 'Sem título · Omnirepo`',
    metaDescription: '',
    metaImage: '',
    noIndex: false,
    url: ''
  }
}: DefaultLayoutProps): React.ReactElement => {
  metadata.metaTitle = metadata.metaTitle
    ? `${metadata.metaTitle} · Omnirepo`
    : 'Sem título · Omnirepo`'

  const Layout = nestedLayout

  return (
    <Layout>
      <Head>
        <title>{metadata.metaTitle}</title>
        <meta name="title" content={metadata.metaTitle} />
        {metadata.metaDescription && (
          <meta name="description" content={metadata.metaDescription} />
        )}
        <meta
          name="robots"
          content={metadata.noIndex ? 'noindex, nofollow' : 'index follow'}
        />

        <meta property="og:site_name" content="Vibe Dev" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:title" content={metadata.metaTitle} />
        {metadata.metaDescription && (
          <meta property="og:description" content={metadata.metaDescription} />
        )}
        <meta property="og:image" content={metadata.metaImage} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={metadata.url} />
        <meta property="twitter:title" content={metadata.metaTitle} />
        {metadata.metaDescription && (
          <meta
            property="twitter:description"
            content={metadata.metaDescription}
          />
        )}
        <meta property="twitter:image" content={metadata.metaImage} />
      </Head>

      {children}
    </Layout>
  )
}
