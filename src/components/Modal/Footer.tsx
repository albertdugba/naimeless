import { FunctionComponent, ReactNode } from 'react'
import styled from 'styled-components'
import { colors } from '../../utils'

export interface ModalFooterProps {
  children: ReactNode
}
export const Footer: FunctionComponent<ModalFooterProps> = ({ children }) => {
  return <ModalFooter>{children}</ModalFooter>
}

const ModalFooter = styled.div`
  height: var(--modalFooter);
  padding: 1rem;
`
