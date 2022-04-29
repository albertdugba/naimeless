import { Button } from '../elements/Button'
import { TextField } from '../elements/Form'
import { StyledHeader, StyledHeaderInner } from './styled'

export const MainNavigation = () => {
  return (
    <StyledHeader>
      <StyledHeaderInner>
        <h1>Logo</h1>
        <div>
          <TextField placeholder="Search" />
        </div>

        <Button variant="primary" size="medium">
          Log In
        </Button>
      </StyledHeaderInner>
    </StyledHeader>
  )
}
