import Head from 'next/head'
import { GlobalStyle } from '#/styles/global'

import { Container } from '#/styles/Home'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>
          Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GlobalStyle/>
    </Container>
  )
}
