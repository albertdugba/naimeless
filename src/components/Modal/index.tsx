import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Button } from '../elements/Button'
import { TextField } from '../elements/Form'
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
      <M>
        <Modal.Header onClose={setIsOpen}>
          <div>Modal Header</div>
        </Modal.Header>
        <Modal.Content>
          <div className="mb-4">
            <TextField label="Email" />
          </div>
          <TextField label="Password" />
          <div style={{ marginTop: '20px' }}>
            <Button variant="success">Sign in</Button>
          </div>
        </Modal.Content>
        <Modal.Footer>
          <div className="text-center">
            <p>Dont have an account ? Signin</p>
          </div>
        </Modal.Footer>
      </M>
    </Modal>
  )
}

const M = styled.div`
  max-width: 476px;
  margin: auto;
  border-radius: 8px;
  background: #fff;
`
