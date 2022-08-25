import { Button } from '../elements/Button'
import { StyledHeader, StyledHeaderInner } from './styled'
import * as Icons from '@icons/index'
import { AuthModal } from '@elements/Modals/AuthModal'
import { useState } from 'react'

export const MainNavigation = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <StyledHeader>
      <AuthModal openModal={openModal} setOpenModal={setOpenModal} />
      <StyledHeaderInner>
        <h1 className="p-3 hidden lg:block">Logo</h1>
        {/* <div className="flex gap-3 w-[19rem]">
          <div className="flex items-center gap-[4px] px-4 py-4  h-full">
            <Icons.Home />
            <span>Home</span>
          </div>
          <div className="flex items-center gap-[4px] px-4 py-4  h-full">
            <Icons.Hot />
            <span>Hot</span>
          </div>
        </div> */}
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
