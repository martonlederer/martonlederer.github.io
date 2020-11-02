import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class DocumentComponent extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Marton Lederer</title>
          <link rel="icon" href="/icon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default DocumentComponent