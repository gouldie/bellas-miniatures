import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html>
        <Head>
          <title>Bella's Miniatures</title>
          <script src="https://kit.fontawesome.com/02dd168113.js" crossOrigin="anonymous"></script>
          <link href="https://fonts.googleapis.com/css?family=Muli&display=swap" rel="stylesheet"></link>
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
