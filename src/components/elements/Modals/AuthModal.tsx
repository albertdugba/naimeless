import { Button } from '@elements/Button'
import { TextField } from '@elements/Form'
import { Modal } from '@Modal/modal'
import { FC, useState } from 'react'
import { StyledModal } from './styled'
import * as Icons from '@icons/index'
import axios from 'axios'
import { InputField } from '@Form/InputField'
import * as z from 'zod'
import { Form } from '@Form/Form'

interface AuthProps {
  openModal: boolean
  setOpenModal: (val: boolean) => void
}
export const AuthModal: FC<AuthProps> = ({ openModal, setOpenModal }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const schema = z.object({
    email: z.string().min(1, 'Required'),
    password: z.string().min(1, 'Required'),
  })

  type LoginValues = {
    email: string
    password: string
  }

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
            <div>
              <Form<LoginValues, typeof schema>
                onSubmit={async (values) => {
                  // await login(values)
                }}
                schema={schema}
              >
                {({ register, formState }) => (
                  <>
                    <InputField
                      type="email"
                      label="Email Address"
                      error={formState.errors['email']}
                      registration={register('email')}
                    />
                    <InputField
                      type="password"
                      label="Password"
                      error={formState.errors['password']}
                      registration={register('password')}
                    />
                    <div>
                      <Button type="submit" className="w-full">
                        Log in
                      </Button>
                    </div>
                  </>
                )}
              </Form>
              <div className="mt-2 flex items-center justify-end">
                <div className="text-sm">
                  <a
                    href="../register"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Register
                  </a>
                </div>
              </div>
            </div>
          </Modal.Content>
        </div>
      </StyledModal>
    </Modal>
  )
}
