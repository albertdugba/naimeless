import { Button } from '@elements/Button'
import { TextField } from '@elements/Form'
import { Modal } from '@Modal/modal'
import { FC, useState } from 'react'
import { StyledModal } from './styled'
import * as Icons from '@icons/index'

interface AuthProps {
  openModal: boolean
  setOpenModal: (val: boolean) => void
}
export const AuthModal: FC<AuthProps> = ({ openModal, setOpenModal }) => {
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
      </StyledModal>
    </Modal>
  )
}
