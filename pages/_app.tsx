import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '../src/utils'
import {
  ComponentType,
  ElementType,
  Fragment,
  FunctionComponent,
  ReactElement,
} from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { NextComponentType, NextPageContext } from 'next/types'

const queryClient = new QueryClient()

function MyApp({
  Component,
  pageProps,
}: AppProps & {
  Component: NextComponentType<NextPageContext> & {
    Guard: FunctionComponent
    Layout: any
    Provider: FunctionComponent
  }
}) {
  const Layout = Component.Layout || <>Hi</>

  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </Layout>
      </QueryClientProvider>
    </Fragment>
  )
}

export default MyApp
