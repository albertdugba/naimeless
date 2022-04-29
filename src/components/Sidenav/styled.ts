import styled from 'styled-components'
import { colors, theme } from '../../utils'

const StyledSidenav = styled.aside`
  grid-area: aside;
  border-top: 1px solid ${colors.purple[200]};
  border-left: 1px solid ${colors.purple[200]};
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 60px;
  max-width: 14rem;
  background: ${colors.neutral[100]};
`

export { StyledSidenav }
