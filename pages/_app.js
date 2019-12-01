import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import { Header } from '../components'
import './styles.css'

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
        <Header />
        <Component {...pageProps} />
      </>
    )
  }
}
