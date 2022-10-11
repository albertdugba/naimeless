import { Button } from '@elements/Button'
import { InputField } from '@Form/InputField'
import { ProfileLinks } from '@layout/profile'
import ProfileLayout from '@layout/ProfileLayout'

const Security = () => {
  return (
    <>
      {/* <ProfileLinks /> */}
      <div className="bg-white mt-2 rounded-[7px] py-4 px-4">
        <InputField label="Old Password" />
        <div className="mt-4">
          <InputField label="Confirm Password" />
        </div>
        <div className="mt-4">
          <InputField label="New Password" />
        </div>

        <div className="mt-4">
          <Button size="large">Save changes</Button>
        </div>
      </div>
    </>
  )
}
export default Security
Security.Layout = ProfileLayout
