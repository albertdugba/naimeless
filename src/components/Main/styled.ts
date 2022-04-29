import styled from 'styled-components'
import { colors } from '../../utils'

const StyledMainArea = styled.div`
  grid-area: main;
  border: 1px solid ${colors.purple[200]};
  height: 100vh;
  width: 100%;
  padding: 1.2rem;
`

export { StyledMainArea }
