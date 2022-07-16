import { StyledSidenav } from './styled'
const channels = ['Entertainment', 'life', 'software', 'finance']
export const SideNav = () => {
  return (
    <StyledSidenav>
      <div className="bg-white p-3 mt-[13px] rounded-[8px] border">
        <h1>Top Channels</h1>
        <ul className="mt-6 bg-white">
          {channels.map((ch, index) => (
            <li key={index} className="flex items-center justify-between my-4">
              <span className="capitalize">{ch}</span>
              <button className="border rounded-md px-2 py-0 text-gray-500 uppercase">
                <span className="text-sm">Join</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* hashtags */}
      <ul className="mt-6 border rounded-[8px] p-3 bg-white">
        {channels.map((ch, index) => (
          <li key={index} className="flex items-center justify-between my-4">
            <span className="capitalize">{ch}</span>
            <button className="border rounded-md px-2 py-0 text-gray-500 uppercase">
              <span className="text-sm">Join</span>
            </button>
          </li>
        ))}
      </ul>
    </StyledSidenav>
  )
}
