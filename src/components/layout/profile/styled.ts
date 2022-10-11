import { colors } from '@utils/colors'
import styled from 'styled-components'

export const StyledWrapper = styled.section`
  --header-height: 4.5rem;
  display: grid;
  grid-template-columns: 0rem;
  grid-template-rows: 2rem 1fr;
  min-height: 100vh;
  grid-template-areas:
    'header header header'
    'aside main main'
    'aside main main';
  width: 100%;
  padding: 0.35rem;

  @media (min-width: 701px) {
    grid-template-columns: 20rem;
    grid-template-rows: 2rem 1fr;
    min-height: 100vh;
    overflow: hidden;
    grid-template-areas:
      'header header header'
      'aside main main'
      'aside main main';
    max-width: 1000px;
    margin: 0 auto;
    gap: 1rem;
  }
`

export const StyledLayout = styled.div`
  grid-area: main;
  min-height: 100%;
  width: 100%;
  margin-top: 10px;
`

const StyledSidenav = styled.aside`
  grid-area: aside;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 50px;
  width: 20rem;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.14);
  border-right: 1px solid ${colors.neutral[300]};
  background: #fff;
  padding: 1.2rem;
  display: none;
  @media (min-width: 701px) {
    display: block;
  }
`

export { StyledSidenav }
