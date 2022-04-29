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
      ? `1px solid ${colors.neutral[400]}`
      : validationError
      ? `2px solid ${colors.red[100]}`
      : ''};
  padding: 0.4rem 0.5rem;
  border-radius: 5px;
  font-family: inherit;
  background-color: ${({ variant }) =>
    variant === 'default' ? `${colors.neutral[200]}` : colors.neutral[100]};
`

export const StyledLabel = styled.label<TextFieldProps<'label'>>`
  display: inline-block;
  margin-bottom: 0.3rem;
  color: ${({ validationError }) =>
    validationError ? `${colors.red[100]}` : `${colors.neutral[500]}`};
`
