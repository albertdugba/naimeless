import { FC, ReactNode } from 'react'
import { MainNavigation } from '@/Nav'
import { ProfileSideNav } from './profile/ProfileSideNav'
import { StyledLayout, StyledWrapper } from './profile/styled'

interface ProfileLayoutProps {
  children: ReactNode
}
const ProfileLayout: FC<ProfileLayoutProps> = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <div className="mt-2">
        <div className="border">
          <StyledWrapper>
            <ProfileSideNav />
            <StyledLayout>{children}</StyledLayout>
          </StyledWrapper>
        </div>
      </div>
    </>
  )
}
export default ProfileLayout
