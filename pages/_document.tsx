import Document, { Html, Head, Main, NextScript } from 'next/document'

class Doc extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Web developer" />
          <meta name="theme-color" content="#3828ca" />

          <meta property="og:title" content="Marton Ledere" />
          <meta property="og:description" content="Web developer" />
          <meta property="og:image" content="https://marton.lederer.hu/favicon.png" />

          <meta name="twitter:title" content="Marton Ledere" />
          <meta name="twitter:description" content="Web developer" />
          <meta name="twitter:image" content="https://marton.lederer.hu/favicon.png" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Doc
