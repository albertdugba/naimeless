import { useState } from 'react'
import { Modal } from '../../src/components/Modal'

const Login = () => {
  const [closed, setClosed] = useState(false)
  return (
    <Modal isOpen setIsOpen={() => setClosed(false)}>
      Hello
    </Modal>
  )
}
export default Login
