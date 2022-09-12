import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '../src/utils'
import { Fragment, FunctionComponent, ReactElement, ReactNode } from 'react'
import { MainLayout } from '../src/components/layout'
import { QueryClientProvider, QueryClient } from 'react-query'
import { NextComponentType, NextPage, NextPageContext } from 'next/types'

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
  const Layout = Component.Layout || <>Hi</>

  const Guard = Component.Guard || Fragment

  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </QueryClientProvider>
    </Fragment>
  )
}

export default MyApp
