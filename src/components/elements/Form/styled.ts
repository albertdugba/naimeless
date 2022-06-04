import styled from 'styled-components'
import { TextFieldProps } from '.'
import { colors } from '../../../utils'

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledInput = styled.input<TextFieldProps<'input'>>`
  outline: none;
  border: ${({ variant, validationError }) =>
    variant === 'default'
      ? 'none'
      : variant === 'outlined'
      ? `1px solid ${colors.neutral[300]}`
      : validationError
      ? `2px solid ${colors.red[100]}`
      : ''};
  padding: 0.6rem 0.5rem;
  border-radius: 5px;
  color: ${colors.neutral[400]};
  font-size: 0.85rem;
  font-family: inherit;
  margin-top: 0.5rem;
  background-color: ${({ variant }) =>
    variant === 'default' ? `${colors.neutral[200]}` : colors.neutral[100]};
`

export const StyledLabel = styled.label<TextFieldProps<'label'>>`
  display: inline-block;
  /* margin-top: 0.rem; */
  color: ${({ validationError }) =>
    validationError ? `${colors.red[100]}` : `${colors.neutral[500]}`};
`
