import { createContext, FC, ReactNode, useMemo } from 'react'
import { Content, ModalContentProps } from './Content'
import { Header, ModalHeaderProps } from './Header'
import { Footer, ModalFooterProps } from './Footer'
import { StyledModalContainer, StyledModalInner, StyledOverlay } from './styled'
import { AnimatePresence } from 'framer-motion'

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
      <AnimatePresence>
        <StyledModalContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {isOpen && <StyledOverlay />}
          {isOpen && <StyledModalInner>{children}</StyledModalInner>}
        </StyledModalContainer>
      </AnimatePresence>
    </ModalContext.Provider>
  )
}

Modal.Header = Header
Modal.Content = Content
Modal.Footer = Footer
