import { useState } from 'react'
import { Button } from '../elements/Button'
import { ComposeInput } from '../MessageBox'
import { MyModal } from '../Modal'
import { StyledMainArea } from './styled'

export const MainContent = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <StyledMainArea>
      <ComposeInput />
      <MyModal isOpen={openModal} setIsOpen={() => setOpenModal(false)} />
      <Button onClick={() => setOpenModal(true)}>Open Modal</Button>
    </StyledMainArea>
  )
}
