import { useState } from 'react'
import { Button } from '../elements/Button'
import { StyledHeader, StyledHeaderInner } from './styled'
import { AuthModal } from '@elements/Modals/AuthModal'
import Image from 'next/image'
import { useGetProfile } from '@features/post/user/api'
import { Dropdown } from '@Dropdown/Dropdown'
import * as Icons from '@icons/index'
import { Avatar } from '@Avatar'

export const MainNavigation = () => {
  const [openModal, setOpenModal] = useState(false)
  const { user } = useGetProfile()
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

        {user ? (
          <Dropdown
            title={<Avatar avatarColor={user?.avatarColor} />}
            options={[
              {
                label: 'Edit Profile',
                value: 'Profile',
                icon: <Icons.People />,
              },
              {
                label: 'Logout',
                value: 'logout',
                icon: <Icons.People />,
              },
            ]}
          />
        ) : (
          <Button
            onClick={() => setOpenModal(true)}
            variant="primary"
            size="medium"
          >
            Log In
          </Button>
        )}
      </StyledHeaderInner>
    </StyledHeader>
  )
}
