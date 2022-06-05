import styled from 'styled-components'
import { MainNavigation } from '../Nav'
import { SideNav } from '../Sidenav'
import { ReactElement, ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export const MainLayout = ({ children }: LayoutProps) => {
  return (
    <StyledLayout>
      <MainNavigation />
      <SideNav />
      <Layout>{children}</Layout>
    </StyledLayout>
  )
}

export const getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

const StyledLayout = styled.section`
  --header-height: 3.5rem;
  display: grid;
  grid-template-columns: 0rem;
  grid-template-rows: 2rem 1fr;
  min-height: 100vh;
  grid-template-areas:
    'header header header'
    'aside main main'
    'aside main main';
  width: 100%;
  /* margin: 0 auto; */
  /* padding: 1rem; */

  @media (min-width: 701px) {
    grid-template-columns: 20rem;
    grid-template-rows: 2rem 1fr;
    min-height: 100vh;
    grid-template-areas:
      'header header header'
      'aside main main'
      'aside main main';
    max-width: 1000px;
    margin: 0 auto;
    gap: 1rem;
  }
`

const Layout = styled.div`
  grid-area: main;
  min-height: 100%;
  width: 100%;
  /* margin: 20px auto; */
  /* background-color: red; */
`
