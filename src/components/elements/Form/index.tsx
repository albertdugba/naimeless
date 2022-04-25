import { ComponentPropsWithoutRef, ElementType, forwardRef } from 'react'
import { StyledInput, StyledInputContainer, StyledLabel } from './styled'

export type TextFieldProps<T extends ElementType> = {
  label: string
  variant?: 'default' | 'outlined'
  validationError?: boolean
} & ComponentPropsWithoutRef<T>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps<'input'>>(
  ({ label, variant, validationError, ...props }, ref) => {
    return (
      <StyledInputContainer>
        <StyledLabel
          label={label}
          variant={variant}
          validationError={validationError}
        >
          {label}
        </StyledLabel>
        <StyledInput
          data-testid="input-field"
          label={label}
          variant={variant}
          validationError={validationError}
          ref={ref}
          {...props}
        />
      </StyledInputContainer>
    )
  }
)

TextField.displayName = 'TextField'
TextField.defaultProps = {
  variant: 'outlined',
}
