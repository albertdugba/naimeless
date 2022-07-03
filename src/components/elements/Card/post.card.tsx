import { ReactNode } from 'react'
import styled from 'styled-components'
import { colors } from '../../../utils'

export const PostCard = ({ children }: { children: ReactNode }) => {
  return <Card className="p-[20px] lg:rounded-[8px] bg-white">{children}</Card>
}

const Card = styled.div`
  @media (min-width: 801px) {
    border: 1px solid ${colors.neutral[300]};
  }
`
