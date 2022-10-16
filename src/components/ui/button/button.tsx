import { forwardRef } from 'react'
import { ComponentPropsWithoutRef } from 'react'
import styled, { css } from 'styled-components'
import { breakpoints } from '../../../../styles/breakpoints'

const StyledButton = styled.button<{
  clear: boolean
  large: boolean
  withIcon?: boolean
  round: boolean
  size?: 'large' | 'medium' | 'small' | 'xs'
  variant?: 'ghost'
}>(
  ({
    clear,
    round,
    withIcon,
    size,
    theme: { color, boxShadow, borderRadius },
  }) => css`
    outline: none;
    border: 0;
    font-family: 'Cera Pro Medium';
    border-radius: ${round ? borderRadius.xl : borderRadius.xs};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${withIcon
      ? '0.7rem'
      : size === 'large'
      ? '1.125rem 1rem'
      : size === 'medium'
      ? '0.85rem 1rem'
      : size === 'small'
      ? '0.45rem 1rem'
      : size === 'xs'
      ? '0.2rem 1rem'
      : '0.875rem 1rem'};
    color: #fff;
    transition: box-shadow 150ms ease-in;
    z-index: 1;
    background-color: ${clear ? color.buttonPrimary : color.buttonPrimary};

    &:hover {
      cursor: pointer;
      background-color: ${clear
        ? color.buttonClearHover
        : color.buttonPrimaryHover};
    }

    &:focus {
      box-shadow: ${boxShadow.outerBorder};
    }

    &:disabled {
      background-color: ${clear ? color.buttonClear : color.buttonPrimary};
      opacity: 0.4;
    }

    @media ${breakpoints.M} {
      padding: ${withIcon
        ? '0.7rem'
        : size === 'large'
        ? '1.125rem 1rem'
        : size === 'medium'
        ? '0.85rem 1rem'
        : size === 'small'
        ? '0.45rem 1rem'
        : size === 'xs'
        ? '0.2rem 1rem'
        : '0.875rem 1rem'};
    }
  `
)

type ButtonProps = DefaultProps & React.ComponentProps<typeof StyledButton>

interface DefaultProps extends ComponentPropsWithoutRef<'button'> {
  clear?: boolean
  round?: boolean
  large?: boolean
  icon?: string
  iconSize?: number
  variant?: 'ghost'
  disabled?: boolean
  children?: React.ReactNode | string
  size?: 'large' | 'medium' | 'small' | 'xs'
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  DefaultProps
>(({ round, size, name, clear, variant, large, children, ...props }, ref) => {
  return (
    <StyledButton
      type="button"
      ref={ref}
      arial-label={name}
      variant={variant}
      size={size}
      clear={clear}
      round={round}
      large={large}
      {...props}
    >
      {children}
    </StyledButton>
  )
})
Button.displayName = 'Button'

// children,
// large = false,
// clear = false,
// round = false,
// theme,
// variant,
// size,
// ...props
