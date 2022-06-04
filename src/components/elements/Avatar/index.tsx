import Gravatar from 'react-gravatar'
import styled from 'styled-components'

export const UserAvatar = () => {
  return <StyledAvatar email="test@mail.com" />
}

const StyledAvatar = styled(Gravatar)`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`
