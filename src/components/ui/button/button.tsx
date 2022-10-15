import styled, { css } from 'styled-components'
import { lightTheme } from '../../../../styles/theme'
import { breakpoints } from '../../../../styles/breakpoints'

const StyledButton = styled.button<{
  clear: boolean
  large: boolean
  withIcon: boolean
  round: boolean
}>(
  ({
    clear,
    large,
    round,
    withIcon,
    theme: { color, boxShadow, borderRadius },
  }) => css`
    outline: none;
    border: 0;
    font-family: 'Hind';
    border-radius: ${round ? borderRadius.xl : borderRadius.xs};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${withIcon ? '0.7rem' : large ? '1.125rem 1rem' : '0.875rem 1rem'};
    color: ${clear ? color.accentText : color.accentText};

    transition: box-shadow 150ms ease-in;
    z-index: 1;
    background-color: ${clear ? color.buttonClear : color.buttonPrimary};

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
        ? '1rem'
        : large
        ? '1.125rem 1.5rem'
        : '0.875rem 1.5rem'};
    }
  `
)

const StyledButtonP = styled.button<{
  large: boolean
  round: boolean
  clear: boolean
  size: 'large' | 'medium' | 'small' | 'xs'
  variant?: 'ghost'
}>(
  ({ clear, variant, size, round, theme: { color } }) => css`
    outline: none;
    border: 0;
    font-family: inherit;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${size === 'large'
      ? '1.125rem 1rem'
      : size === 'medium'
      ? '0.8rem 1rem'
      : size === 'small'
      ? ' 0.5rem 1rem'
      : size === 'xs'
      ? '0.2rem 1rem'
      : '0.875rem 1rem'};
    border-radius: ${round
      ? lightTheme.borderRadius.round
      : lightTheme.borderRadius.xs};
    background-color: ${variant === 'ghost'
      ? color.badgeBackground
      : color.buttonPrimary};
  `
)

type DefaultProps = {
  clear?: boolean
  round?: boolean
  large?: boolean
  icon?: string
  iconSize?: number
  variant?: 'ghost'
  disabled?: boolean
  children?: React.ReactNode | string
  size: 'large' | 'medium' | 'small' | 'xs'
  onClick?: () => void
}

type ButtonProps = DefaultProps & React.ComponentProps<typeof StyledButton>

export const Button: React.FC<ButtonProps> = ({
  children,
  large = false,
  clear = false,
  round = false,
  theme,
  variant,
  size,
  ...props
}) => {
  console.log('theme', theme)
  return (
    <StyledButtonP
      variant={variant}
      size={size}
      clear={clear}
      round={round}
      large={large}
      {...props}
    >
      {children}
    </StyledButtonP>
  )
}
