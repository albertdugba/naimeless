import { Button } from '@elements/Button'
import { TextField } from '@elements/Form'
import { Modal } from '@Modal/modal'
import { FC, useState } from 'react'
import { StyledModal } from './styled'
import * as Icons from '@icons/index'
import axios from 'axios'

interface AuthProps {
  openModal: boolean
  setOpenModal: (val: boolean) => void
}
export const AuthModal: FC<AuthProps> = ({ openModal, setOpenModal }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    axios
      .post('/api/signin', { email, password })
      .then((res) => res.data)
      .catch((err) => console.log(err))
  }
  return (
    <Modal isOpen={openModal} setIsOpen={() => setOpenModal(false)}>
      <StyledModal>
        <div className="flex justify-between">
          <Modal.Header>Header</Modal.Header>
          <Modal.Header>
            <button
              onClick={() => setOpenModal(false)}
              arial-label="Close button icon"
              className="flex items-center justify-center h-[35px] w-[35px] cursor-pointer bg-gray-200 rounded-full"
            >
              <Icons.Times color="text-gray" size={20} />
            </button>
          </Modal.Header>
        </div>

        <div>
          <Modal.Content>
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="mt-4">
              <TextField
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <Button onClick={handleSubmit} size="large">
                Submit
              </Button>
            </div>
          </Modal.Content>
        </div>
      </StyledModal>
    </Modal>
  )
}
