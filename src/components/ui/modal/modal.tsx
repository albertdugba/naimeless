import { FC, ReactNode, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Backdrop, ModalContent, TopBar } from './modal.styles'
import { CSSTransition } from 'react-transition-group'

type Props = {
  selector: string
  children: ReactNode
}

export const Portal = ({ children, selector }: Props) => {
  const modalRef = useRef<Element>()

  useEffect(() => {
    const element = document.querySelector<Element>(selector)

    if (element) {
      modalRef.current = element
    }
  }, [selector])

  return modalRef.current ? createPortal(children, modalRef.current) : null
}

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export const Modal: FC<ModalProps> = ({ onClose, children, isOpen }) => {
  const contentRef = useRef(null)
  const backdropRef = useRef(null)
  return (
    <Portal selector="#modal">
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="modal"
        unmountOnExit
        nodeRef={contentRef}
      >
        <ModalContent data-testid="modal" ref={contentRef}>
          <TopBar>
            {/* <Button
              data-testid="modal-close-btn"
              onClick={onClose}
              clear
              round
              icon="cross"
              aria-label="close modal"
              iconSize={16}
            /> */}
          </TopBar>
          {children}
        </ModalContent>
      </CSSTransition>

      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="backdrop"
        unmountOnExit
        nodeRef={backdropRef}
      >
        <Backdrop
          data-testid="modal-backdrop"
          ref={backdropRef}
          onClick={onClose}
        />
      </CSSTransition>
    </Portal>
  )
}
