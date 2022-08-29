import type { AppProps } from 'next/app'
import Head from 'next/head'

// styleds
import { GlobalStyled } from '../src/styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Banco imobiliário</title>
      <link rel="shortcut icon" href="/dado.png" />
    </Head>
    <GlobalStyled />
    <Component {...pageProps} />
  </>
}

export default MyApp
