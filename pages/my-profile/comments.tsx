import { ProfileLinks } from '@layout/profile'
import ProfileLayout from '@layout/ProfileLayout'

const ProfileComments = () => {
  return (
    <>
      <ProfileLinks />
      <div className="bg-white mt-10 rounded-[7px]">
        <div className="flex items-center justify-center h-[50vh]">
          <span>Nothing here yet</span>
        </div>
      </div>
    </>
  )
}
export default ProfileComments
ProfileComments.Layout = ProfileLayout
