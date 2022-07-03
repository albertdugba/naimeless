import { Button } from '../elements/Button'
import { StyledHeader, StyledHeaderInner } from './styled'
import * as Icons from '@icons/index'

export const MainNavigation = () => {
  return (
    <StyledHeader>
      <StyledHeaderInner>
        <h1 className="p-3">Logo</h1>
        <div className="flex gap-3 w-[19rem]">
          <div className="flex items-center gap-[4px] px-4 py-4 border-b-4 h-full">
            <Icons.Home />
            <span>Home</span>
          </div>
          <div className="flex items-center gap-[4px] px-4 py-4 border-b-4 h-full">
            <Icons.Hot />
            <span>Hot</span>
          </div>
        </div>
        <Button variant="primary" size="medium">
          Log In
        </Button>
      </StyledHeaderInner>
    </StyledHeader>
  )
}
