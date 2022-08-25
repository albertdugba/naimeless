import { StyledSidenav } from './styled'
const channels = ['Entertainment', 'life', 'software', 'finance']
export const SideNav = () => {
  return (
    <StyledSidenav>
      <div className="bg rounded-[8px] mt-[25px] w-full">
        <h1 className="font-bold">Top Channels</h1>
        <ul className="mt-6 bg">
          {channels.map((ch, index) => (
            <li key={index} className="flex items-center justify-between my-4">
              <span className="capitalize">{ch}</span>
              <button className="border rounded-full px-2 py-0 text-gray-500 uppercase">
                <span className="text-sm">Join</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </StyledSidenav>
  )
}
