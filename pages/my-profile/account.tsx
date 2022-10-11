import { InputField } from '@Form/InputField'
import { ProfileLinks } from '@layout/profile'
import ProfileLayout from '@layout/ProfileLayout'

const MyAccount = () => {
  return (
    <>
      {/* <ProfileLinks /> */}
      <div className="bg-white mt-2 rounded-[7px] py-10 px-6">
        <InputField label="Email" />
      </div>
    </>
  )
}
export default MyAccount
MyAccount.Layout = ProfileLayout
