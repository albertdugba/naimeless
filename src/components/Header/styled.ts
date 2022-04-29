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
  /* border: 1px solid ${colors.purple[200]}; */
`

const StyledHeaderInner = styled.div`
  max-width: 1150px;
  margin: auto;
  padding: 1.2rem;
  display: flex;
  align-items: center;
  border: 1px solid ${colors.purple[200]};
  /* justify-content: space-between; */
`

export { StyledHeader, StyledHeaderInner }
