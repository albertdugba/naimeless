import styled from 'styled-components'
import { colors } from '../../utils'

const StyledSidenav = styled.aside`
  grid-area: aside;
  width: 100%;
  position: relative;
  width: 20rem;
  padding: 1rem;
  display: none;
  @media (min-width: 701px) {
    display: block;
  }
`

export { StyledSidenav }
