import styled from 'styled-components'
import { colors } from '../../utils'

const StyledModalContainer = styled.div`
  border-radius: 8px;
  max-width: 100%;
  position: relative;
  padding: 1rem;
  margin-top: 0.25rem;
`

const StyledModalInner = styled.div`
  position: fixed;
  top: 20%;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  background: ${colors.green[200]};
  max-width: 400px;
  margin: auto;
  max-height: 50%;
  border-radius: 9px;
  overflow-y: scroll;
`

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 99;
`

export { StyledModalContainer, StyledModalInner, StyledOverlay }
