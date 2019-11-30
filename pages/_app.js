import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import Header from '../components/header/header'

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
          <link href="https://fonts.googleapis.com/css?family=Muli&display=swap" rel="stylesheet"></link>
        </Head>
        <Header />
        <Component {...pageProps} />
      </>
    )
  }
}
