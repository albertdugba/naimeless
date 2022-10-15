import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

type Props = null

class Document extends NextDocument<Props> {
  render = (): JSX.Element => {
    return (
      <Html>
        <Head>
          <meta about="Online community of anonymous people" />
        </Head>

        <body>
          <Main />
          <NextScript />
          <div id="modal" />
        </body>
      </Html>
    )
  }
}

export default Document
