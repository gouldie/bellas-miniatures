import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import { HeaderAlt, Header, HeaderAlt2, Footer } from '../components'
import '../public/sass/main.scss'
import '../public/sass/core.scss'

export default class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>Miniature Modelling</title>
        </Head>
        <Header />
        <HeaderAlt2 />
        <Component {...pageProps} />
        <Footer />
      </>
    )
  }
}
