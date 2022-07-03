import styled from 'styled-components'
import { colors } from '../../utils'

const StyledHeader = styled.header`
  grid-area: header;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  background: ${colors.neutral[100]};
  z-index: 999;
  border-bottom: 1px solid ${colors.neutral[200]};
`

const StyledHeaderInner = styled.div`
  max-width: 1000px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
`

export { StyledHeader, StyledHeaderInner }
