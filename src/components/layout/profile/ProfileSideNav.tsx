import { StyledSidenav } from './styled'

import Link from 'next/link'

export const ProfileSideNav = () => {
  return (
    <StyledSidenav>
      <div className="bg rounded-[8px] mt-[25px] w-full">
        <ul className="mt-6">
          <h2 className="text-gray-400 uppercase text-sm p-0 m-0 px-2">
            General
          </h2>
          <li className="flex items-center justify-between my-4 hover:bg-gray-200 px-2 py-2 rounded-[6px]">
            <Link href="/my-profile/account">
              <a>
                <span className="capitalize">Account</span>
              </a>
            </Link>
          </li>
          <li className="flex items-center justify-between my-4 hover:bg-gray-200 px-2 py-2 rounded-[6px]">
            <Link href="/my-profile/security">
              <a>
                <span className="capitalize">Security</span>
              </a>
            </Link>
          </li>
          <li className="flex items-center justify-between my-4 hover:bg-gray-200 px-2 py-2 rounded-[6px]">
            <Link href="/my-profile/settings">
              <a>
                <span className="capitalize">Settings</span>
              </a>
            </Link>
          </li>
        </ul>

        {/*  */}
        <ul className="mt-6">
          <h2 className="text-gray-400 uppercase text-sm p-0 m-0 px-2">
            Others
          </h2>
          <li className="flex items-center justify-between my-4  hover:bg-gray-200 px-2 py-2 rounded-[6px]">
            <span className="capitalize">Dark mode</span>
          </li>
          <li className="flex items-center justify-between my-4 hover:bg-gray-200 px-2 py-2 rounded-[6px]">
            <span className="capitalize">FAQ</span>
          </li>
          <li className="flex items-center justify-between my-4 hover:bg-gray-200 px-2 py-2 rounded-[6px]">
            <span className="capitalize">Community Guidelines</span>
          </li>
        </ul>
      </div>
    </StyledSidenav>
  )
}
