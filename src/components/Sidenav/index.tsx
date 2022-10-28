import { Button } from '@/ui/button/button'
import { StyledSidenav } from './styled'

export const SideNav = () => {
  const channels = ['Entertainment', 'life', 'software', 'finance']

  return (
    <StyledSidenav>
      <div className="bg rounded-[8px] mt-9 p-6 w-full border  bg-white ">
        <h1 className="font-bold">Top Channels</h1>
        <ul className="mt-3 bg">
          {channels.map((ch, index) => (
            <li key={index} className="flex items-center justify-between my-4">
              <span className="capitalize">{ch}</span>
              <Button variant="ghost" size="xs" round>
                Join
              </Button>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg rounded-[8px] mt-5 w-full border p-6  bg-white z-20">
        <h1 className="font-bold">Top Channels</h1>
        <ul className="mt-3 bg">
          {channels.map((ch, index) => (
            <li
              key={index}
              className="flex w-full items-center justify-between my-4"
            >
              <span className="capitalize">{ch}</span>
              <Button variant="ghost" size="xs">
                Join
              </Button>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg rounded-[8px] mt-5 w-full border p-6 sticky top-20  bg-white">
        <h1 className="font-bold">Made by Albert Dugba</h1>
        <p>This is made with love by Albert Dugba</p>
      </div>
    </StyledSidenav>
  )
}
