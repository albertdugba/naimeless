import { useState } from 'react'
// import { Button } from '../elements/Button'
import { StyledHeader, StyledHeaderInner } from './styled'
import Image from 'next/image'
import { useGetProfile } from '@features/post/user/api'
import { Dropdown } from '@Dropdown/Dropdown'
import * as Icons from '@icons/index'
import { Avatar } from '@ui/avatar'
import { Modal } from '@ui/modal/modal'
import { Button } from '@ui/button/button'

export const MainNavigation = () => {
  const [openModal, setOpenModal] = useState(false)
  const { user } = useGetProfile()
  return (
    <StyledHeader>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <h1>Hello Modal</h1>
      </Modal>
      <StyledHeaderInner>
        <h1 className="p-4 flex items-center gap-3">
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
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="small">
              + Create Post
            </Button>
            <Button size="small">Login</Button>
          </div>
        )}
      </StyledHeaderInner>
    </StyledHeader>
  )
}
