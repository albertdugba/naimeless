import styled from 'styled-components'
import { colors } from '../../utils'

const StyledSidenav = styled.aside`
  grid-area: aside;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 50px;
  width: 20rem;
  /* box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.14); */
  border-right: 1px solid ${colors.neutral[300]};
  background: #fff;
  padding: 1.2rem;
  display: none;
  @media (min-width: 701px) {
    display: block;
  }
`

export { StyledSidenav }
