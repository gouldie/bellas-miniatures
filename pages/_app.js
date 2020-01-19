import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import { HeaderMob, Header, Footer } from '../components'
import { withRouter } from 'next/router'
import '../public/sass/main.scss'
import '../public/sass/core.scss'

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps, router } = this.props

    return (
      <>
        <Head>
          <title>Miniature Modelling</title>
        </Head>
        <HeaderMob pathname={router.pathname} />
        <Header pathname={router.pathname} />
        <Component {...pageProps} />
        <Footer />
      </>
    )
  }
}

export default withRouter(MyApp)
