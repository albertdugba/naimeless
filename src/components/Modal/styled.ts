import { motion } from 'framer-motion'
import styled from 'styled-components'

const StyledModalInner = styled(motion.div)`
  position: fixed;
  top: 17%;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 99999;
  height: 100%;
  margin: auto;
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
  z-index: 999;
`

export { StyledModalInner, StyledOverlay }
