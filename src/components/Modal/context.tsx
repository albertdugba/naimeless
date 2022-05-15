import { createContext, FC, ReactNode, useContext, useMemo } from 'react'
import { Content, ModalContentProps } from './Content'
import { Header, ModalHeaderProps } from './Header'
import { Footer, ModalFooterProps } from './Footer'
import { StyledModalContainer, StyledModalInner, StyledOverlay } from './styled'

interface ModalComposition {
  Header: FC<ModalHeaderProps>
  Content: FC<ModalContentProps>
  Footer: FC<ModalFooterProps>
}

interface ModalContextProps {
  isOpen: boolean
  setIsOpen: (val: boolean) => void
}
export const ModalContext = createContext<ModalContextProps | undefined>(
  undefined
)

interface ModalProps {
  children: ReactNode
  isOpen: boolean
  setIsOpen: (val: boolean) => void
}

export const Modal: FC<ModalProps> & ModalComposition = ({
  children,
  isOpen,
  setIsOpen,
}) => {
  const memoisedVal = useMemo(
    () => ({ isOpen, setIsOpen }),
    [isOpen, setIsOpen]
  )

  return (
    <ModalContext.Provider value={memoisedVal}>
      <StyledModalContainer>
        {isOpen && <StyledOverlay />}
        {isOpen && <StyledModalInner>{children}</StyledModalInner>}
      </StyledModalContainer>
    </ModalContext.Provider>
  )
}

export const useModal = (): ModalContextProps => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('This component must be used within a <Modal> Provider')
  }
  return context
}

Modal.Header = Header
Modal.Content = Content
Modal.Footer = Footer
