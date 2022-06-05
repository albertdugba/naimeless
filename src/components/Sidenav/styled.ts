import styled from 'styled-components'
import { colors } from '../../utils'

const StyledSidenav = styled.aside`
  grid-area: aside;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 50px;
  width: 20rem;
  background: ${colors.neutral[100]};
  padding: 1.2rem;
  border-right: 1px solid ${colors.neutral[300]};
  display: none;
  @media (min-width: 701px) {
    display: block;
  }
`

export { StyledSidenav }
