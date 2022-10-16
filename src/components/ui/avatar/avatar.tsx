import { FC } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { IUser } from '@/features/user/api/interface'
import { colors } from '../../../utils/colors'

interface AvatarColorProps {
  avatarColor: string
}
export const Avatar: FC<AvatarColorProps> = ({ avatarColor }) => {
  return (
    <StyledContainer>
      <StyledAvatar avatarColor={avatarColor} data-testid="avatar-image">
        <Image src="/icons/logo.svg" height={18} width={18} alt="User" />
      </StyledAvatar>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  height: 40px;
  width: 40px;
`

const StyledAvatar = styled.div<Partial<IUser>>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.avatarColor ? props.avatarColor : colors.purple[200]};
`
