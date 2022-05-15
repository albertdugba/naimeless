import { FunctionComponent, ReactNode } from 'react'
import styled from 'styled-components'

export interface ModalFooterProps {
  children: ReactNode
}
export const Footer: FunctionComponent<ModalFooterProps> = ({ children }) => {
  return <ModalFooter>{children}</ModalFooter>
}

const ModalFooter = styled.div`
  height: var(--modalFooter);
  background: green;
`
