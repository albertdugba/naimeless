import { createContext, FC, ReactNode, useMemo } from 'react'
import { Content, ModalContentProps } from './Content'
import { Header, ModalHeaderProps } from './Header'
import { Footer, ModalFooterProps } from './Footer'
import { StyledModalInner, StyledOverlay } from './styled'

const Backdrop = ({
  children,
  isOpen,
}: {
  children: ReactNode
  isOpen: boolean
}) => {
  return (
    <>
      {isOpen ? (
        <StyledOverlay
          className="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </StyledOverlay>
      ) : null}
    </>
  )
}

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

  const gifYouUp = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: 'easeIn',
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.15,
        ease: 'easeOut',
      },
    },
  }

  return (
    <ModalContext.Provider value={memoisedVal}>
      <Backdrop isOpen={isOpen}>
        <StyledModalInner
          className="modal"
          variants={gifYouUp}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {children}
        </StyledModalInner>
      </Backdrop>
    </ModalContext.Provider>
  )
}

Modal.Header = Header
Modal.Content = Content
Modal.Footer = Footer
