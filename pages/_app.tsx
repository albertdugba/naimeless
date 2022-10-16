import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Fragment, FunctionComponent } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { NextComponentType, NextPageContext } from 'next/types'

import '../styles/globals.css'
import { lightTheme } from 'styles/theme'
import { GlobalStyle } from 'styles/GlobalStyle'

const queryClient = new QueryClient()

function MyApp({
  Component,
  pageProps,
}: AppProps & {
  Component: NextComponentType<NextPageContext> & {
    Guard: FunctionComponent
    Layout: FunctionComponent
    Provider: FunctionComponent
  }
}) {
  console.log('lightTheme', lightTheme)
  const Layout = Component.Layout || Fragment

  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={lightTheme}>
          <Layout>
            <GlobalStyle />
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </QueryClientProvider>
    </Fragment>
  )
}

export default MyApp
