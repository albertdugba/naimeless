import { colors } from '@utils/colors'
import styled from 'styled-components'

interface DropDownProps {
  open: boolean
}

export const DropDownContainer = styled.div<DropDownProps>`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  width: 100%;
  flex-direction: column;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.14);
`

export const DropdownItem = styled.li`
  justify-content: flex-start;
  list-style: none;
  cursor: pointer;
  height: 40px;
  align-items: center;

  &:hover {
    background-color: ${colors.neutral[300]};
  }
  &:active {
    font-weight: 700;
    color: ${colors.neutral[300]};
  }
`
