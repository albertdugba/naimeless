import { ReactNode } from 'react'
import styled from 'styled-components'
import { colors } from '../../../utils'

export const PostCard = ({ children }: { children: ReactNode }) => {
  return (
    <Card className="p-[20px] ml-1 mr-1 rounded-[8px] bg-white">
      {children}
    </Card>
  )
}

const Card = styled.div`
  @media (min-width: 801px) {
    border: 1px solid ${colors.neutral[300]};
    background: white;
    border-radius: 8px;
    padding: 20px;
    /* box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.14); */
  }
`
