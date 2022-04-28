import styled from 'styled-components'
import { Container } from '../Container'
import { MainNavigation } from '../Nav'
import { SideNav } from '../Sidenav'

export const MainLayout = () => {
  return (
    <StyledLayout>
      <MainNavigation />
      <SideNav />
      <Container />
    </StyledLayout>
  )
}

const StyledLayout = styled.section`
  display: grid;
  grid-template-columns: 300px 1fr 150px;
  grid-template-rows: 4rem 1fr 5rem;
  min-height: 100vh;
  grid-template-areas:
    'header header header'
    'aside main main'
    'aside main main';
`
