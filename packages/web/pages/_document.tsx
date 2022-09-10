import React from 'react'

import NextDocument, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'

export default class Document extends NextDocument {
  static getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    return NextDocument.getInitialProps(ctx)
  }

  render(): React.ReactElement {
    return (
      <Html>
        <Head />
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
