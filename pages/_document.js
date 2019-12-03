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
          <script src="https://kit.fontawesome.com/02dd168113.js" crossOrigin="anonymous"></script>
          <link href="https://fonts.googleapis.com/css?family=Muli:200,200i,300,300i,400,400i&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700i&display=swap" rel="stylesheet"></link>
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
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
