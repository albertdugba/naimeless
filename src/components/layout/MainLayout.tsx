import styled from 'styled-components'
import { MainNavigation } from '../Nav'
import { MainContent } from '../Container'
import { SideNav } from '../Sidenav'

export const MainLayout = () => {
  return (
    <StyledLayout>
      <MainNavigation />
      <SideNav />
      <MainContent />
    </StyledLayout>
  )
}

const StyledLayout = styled.section`
  --header-height: 5rem;
  display: grid;
  grid-template-columns: 14rem 2fr;
  grid-template-rows: 4rem 1fr 5rem;
  min-height: 100vh;
  grid-template-areas:
    'header header'
    'aside main'
    'aside main';
  max-width: 1150px;
  margin: 0 auto;
  gap: 1rem;
`
