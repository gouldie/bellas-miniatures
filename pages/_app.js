import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import { HeaderMob, Header, Footer } from '../components'
import { withRouter } from 'next/router'
import '../public/sass/main.scss'
import '../public/sass/core.scss'

const routes = {
  home: '/',
  blog: '/blog',
  projects: '/projects',
  contact: '/contact'
}

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

    // Issue https://github.com/zeit/next-plugins/issues/282
    return (
      <div className='root'>
        <Head>
          <title>Miniature Modelling</title>
          {process.env.IN_DEV && <link rel="stylesheet" type="text/css" href={'/_next/static/css/styles.chunk.css?v=' + Date.now()} />}
        </Head>
        <HeaderMob pathname={router.pathname} routes={routes} />
        <Header pathname={router.pathname} routes={routes} />
        <Component {...pageProps} />
        <Footer />
      </div>
    )
  }
}

export default withRouter(MyApp)
