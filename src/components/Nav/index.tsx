import { Button } from '../elements/Button'
import { StyledHeader, StyledHeaderInner } from './styled'
import { AuthModal } from '@elements/Modals/AuthModal'
import { useState } from 'react'
import Image from 'next/image'

export const MainNavigation = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <StyledHeader>
      <AuthModal openModal={openModal} setOpenModal={setOpenModal} />
      <StyledHeaderInner>
        <h1 className="p-3 flex items-center gap-3">
          <Image
            src="/icons/naimeless.svg"
            height={45}
            width={45}
            alt="Naimeless"
          />
          <span className="text-[#7453B2] font-bold">Naimeless</span>
        </h1>

        <Button
          onClick={() => setOpenModal(true)}
          variant="primary"
          size="medium"
        >
          Log In
        </Button>
      </StyledHeaderInner>
    </StyledHeader>
  )
}
