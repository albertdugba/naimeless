import { FunctionComponent, ReactNode } from 'react'
import styled from 'styled-components'
import { colors } from '../../utils'
import * as Icons from '../../../public/icons'

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
      <button onClick={() => onClose(false)}>
        <div className="hover:bg-gray-300 transition-all rounded-[5px] p-1">
          <Icons.Times color={colors.neutral[400]} size={24} />
        </div>
      </button>
    </ModalHeader>
  )
}

const ModalHeader = styled.div`
  min-height: var(--modalHeader);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
