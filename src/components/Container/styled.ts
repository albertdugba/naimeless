import styled from 'styled-components'
import { colors } from '../../utils'

const StyledContainer = styled.div`
  grid-area: main;
  border: 1px solid ${colors.purple[200]};
  width: 100%;
  height: 100vh;
  background-color: blue;
  max-width: 1300px;
  margin: auto;
  padding: 2rem;
`

export { StyledContainer }
