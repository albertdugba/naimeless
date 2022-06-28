import { createContext, FC, ReactNode, useMemo } from 'react'
import { Content, ModalContentProps } from './Content'
import { Header, ModalHeaderProps } from './Header'
import { Footer, ModalFooterProps } from './Footer'
import { StyledModalInner, StyledOverlay } from './styled'
import { AnimatePresence, motion } from 'framer-motion'

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
        <motion.div>
          {isOpen && <StyledOverlay />}
          {isOpen && <StyledModalInner>{children}</StyledModalInner>}
        </motion.div>
      </AnimatePresence>
    </ModalContext.Provider>
  )
}

Modal.Header = Header
Modal.Content = Content
Modal.Footer = Footer
