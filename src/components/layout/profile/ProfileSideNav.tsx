import { StyledSidenav } from './styled'
const channels = ['Entertainment', 'life', 'software', 'finance']

export const ProfileSideNav = () => {
  return (
    <StyledSidenav>
      <div className="bg rounded-[8px] mt-[25px] w-full">
        <ul className="mt-6">
          <h2 className="text-gray-400 uppercase text-sm p-0 m-0">General</h2>
          <li className="flex items-center justify-between my-4">
            <span className="capitalize">Account</span>
          </li>
          <li className="flex items-center justify-between my-4">
            <span className="capitalize">Security</span>
          </li>
          <li className="flex items-center justify-between my-4">
            <span className="capitalize">Settings</span>
          </li>
        </ul>

        {/*  */}
        <ul className="mt-6">
          <h2 className="text-gray-400 uppercase text-sm p-0 m-0">Others</h2>
          <li className="flex items-center justify-between my-4">
            <span className="capitalize">Dark mode</span>
          </li>
          <li className="flex items-center justify-between my-4">
            <span className="capitalize">FAQ</span>
          </li>
          <li className="flex items-center justify-between my-4">
            <span className="capitalize">Community Guidelines</span>
          </li>
        </ul>
      </div>
    </StyledSidenav>
  )
}
