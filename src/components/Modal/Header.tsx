import { FunctionComponent, ReactNode } from 'react'
import styled from 'styled-components'

export interface ModalHeaderProps {
  children: ReactNode
  icon?: JSX.Element
  onClose: (val: boolean) => void
}
export const Header: FunctionComponent<ModalHeaderProps> = ({
  children,
  onClose,
}) => {
  return (
    <ModalHeader>
      {children}
      <button onClick={() => onClose(false)}>Close</button>
    </ModalHeader>
  )
}

const ModalHeader = styled.div`
  height: var(--modalHeader);
  background: red;
`
