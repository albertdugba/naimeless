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
  border-right: 1px solid #f1f1f1f1;
`

const StyledRightSidebar = styled.div`
  grid-area: right-sidebar;
  height: 50vh;
  padding: 1.2rem;
  position: sticky;
  top: 80px;
  right: 0;
  max-width: 15rem;
`

const StyledRightInnner = styled.div`
  margin-top: 0px;
  box-shadow: 4px 9px -3px rgba(0, 0, 0, 0.3);
  height: 100%;
  width: 100%;
  padding: 1.2rem;
`

export { StyledSidenav, StyledRightSidebar, StyledRightInnner }
