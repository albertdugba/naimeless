import { FC, ReactNode } from 'react'
import { MainNavigation } from '@Nav'
import { TabLink } from '@Tab/TabLink'
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
        {/* <div className="container px-4 max-w-7xl mx-auto border-b border-gray-300 my-3 w-full" /> */}
        <div className="border">
          <StyledWrapper>
            <ProfileSideNav />
            <StyledLayout>
              <div className="flex  items-center gap-10 text-gray-500">
                <TabLink href="/my-profile/overview">
                  <a className="text-gray-500">Overview</a>
                </TabLink>
                <TabLink href="/my-profile/posts">
                  <a className="text-gray-500">Posts</a>
                </TabLink>
                <TabLink href="/my-profile/saved">
                  <a className="text-gray-500">Saved</a>
                </TabLink>
                <TabLink href="/my-profile/comments">
                  <a className="text-gray-500">Comments</a>
                </TabLink>
              </div>
              {children}
            </StyledLayout>
          </StyledWrapper>
        </div>
      </div>
    </>
  )
}
export default ProfileLayout
