import { StyledComposeContainer, StyledComposeInput, TextInput } from './styled'
import { UserAvatar } from '../elements/Avatar'

export const ComposeInput = () => {
  return (
    <div>
      <StyledComposeContainer>
        <UserAvatar />
        <TextInput placeholder="Whats happening Albert ?" />
      </StyledComposeContainer>
    </div>
  )
}
