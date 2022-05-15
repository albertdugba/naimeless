import { FunctionComponent } from 'react'
import { Modal } from './context'

interface ModalProps {
  isOpen: boolean
  setIsOpen: (val: boolean) => void
}

export const MyModal: FunctionComponent<ModalProps> = ({
  setIsOpen,
  isOpen,
}) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Modal.Header onClose={setIsOpen}>Modal Header</Modal.Header>
      <Modal.Content>Modal Content</Modal.Content>
      <Modal.Footer>Modal Footer</Modal.Footer>
    </Modal>
  )
}
