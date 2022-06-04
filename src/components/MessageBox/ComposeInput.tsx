import { StyledComposeContainer, TextInput } from './styled'
import { UserAvatar } from '../elements/Avatar'

export const ComposeInput = () => {
  return (
    <div className="p-2">
      <StyledComposeContainer>
        <UserAvatar />
        <TextInput placeholder="Whats happening Albert ?" />
      </StyledComposeContainer>
    </div>
  )
}
