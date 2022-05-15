import Gravatar from 'react-gravatar'
import styled from 'styled-components'

export const UserAvatar = () => {
  return <StyledAvatar email="albert@mail.com" />
}

const StyledAvatar = styled(Gravatar)`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`
