import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import { HeaderAlt, Footer } from '../components'
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
          <title>Bella's Miniatures</title>
        </Head>
        <HeaderAlt />
        <Component {...pageProps} />
        <Footer />
      </>
    )
  }
}
