import * as React from 'react'
import { StyledButton } from './styled'

export type ButtonProps<T extends React.ElementType> = {
  children: React.ReactNode
  label?: string
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'outlined'
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  startIcon?: React.ReactElement | string
  endIcon?: React.ReactElement | string
  disabled?: boolean
  renderAs?: T | 'div'
} & React.ComponentPropsWithoutRef<T>

export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps<'button'>
>(({ children, variant, size, label, renderAs, fullWidth, ...props }, ref) => {
  return (
    <StyledButton
      renderAs={renderAs}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      label={label}
      ref={ref}
      {...props}
    >
      {children}
    </StyledButton>
  )
})

Button.displayName = 'Button'

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
}
