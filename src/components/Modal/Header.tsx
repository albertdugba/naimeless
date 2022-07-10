import { FC, ReactNode } from 'react'
import styled from 'styled-components'

export interface ModalHeaderProps {
  children: ReactNode
}
export const Header: FC<ModalHeaderProps> = ({ children }) => {
  return <ModalHeader>{children}</ModalHeader>
}

const ModalHeader = styled.div`
  min-height: var(--modalHeader);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
