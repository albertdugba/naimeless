import { FunctionComponent, ReactNode } from 'react'
import styled from 'styled-components'

export interface ModalContentProps {
  children: ReactNode
}
export const Content: FunctionComponent<ModalContentProps> = ({ children }) => {
  return <ModalContent>{children}</ModalContent>
}

const ModalContent = styled.main`
  max-height: 60vh;
  padding: 2.2rem;
  overflow-y: scroll;
`
