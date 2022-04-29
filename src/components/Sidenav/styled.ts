import styled from 'styled-components'
import { colors, theme } from '../../utils'

const StyledSidenav = styled.aside`
  grid-area: aside;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 80px;
  max-width: 15rem;
  background: ${colors.neutral[100]};
  padding: 1.2rem;
`

export { StyledSidenav }
