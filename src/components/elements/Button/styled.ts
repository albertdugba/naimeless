import styled from 'styled-components'
import { ButtonProps } from '.'
import { colors, theme } from '../../../utils'

export const StyledButton = styled.button<ButtonProps<'button'>>`
  cursor: pointer;
  display: ${(props) => (props.fullWidth ? 'block' : 'inline-flex')};
  align-items: center;
  justify-content: center;
  text-align: center;
  user-select: none;
  font-family: inherit;
  padding: ${(props) => {
    if (props.size === 'large') {
      return `0.7rem 1.2rem`
    } else if (props.size === 'medium') {
      return `0.4rem 0.5rem`
    } else if (props.size === 'small') {
      return `0.2rem 0.45rem`
    }
  }};
  border: ${(props) =>
    props.variant === 'secondary'
      ? `10px solid ${colors.purple[200]}`
      : '1px solid inherit'};
  border-radius: 20px;
  min-width: ${(props) =>
    props.fullWidth
      ? '100%'
      : props.size === 'small'
      ? '60px'
      : props.size === 'medium'
      ? '90px'
      : props.size === 'large'
      ? '100px'
      : '80px'};
  background-color: ${(props) => {
    if (props.variant === 'primary') {
      return theme.primaryColor
    } else if (props.variant === 'secondary') {
      return colors.neutral[100]
    } else if (props.variant === 'danger') {
      return theme.status.errorColor
    } else if (props.variant === 'success') {
      return theme.status.successColor
    } else if (props.variant === 'warning') {
      return theme.status.warningColor
    } else if (props.disabled) {
      return theme.disabled
    }
  }};
  outline: none;
  border: none;
  line-height: 1.5;
  color: ${(props) =>
    props.disabled
      ? colors.neutral[200]
      : props.variant === 'secondary'
      ? colors.purple[200]
      : colors.neutral[100]};

  &:hover {
    background: ${(props) => {
      if (props.variant === 'primary') {
        return theme.primaryActiveHoverColor
      } else if (props.variant === 'danger') {
        return theme.status.errorColorHover
      } else if (props.variant === 'success') {
        return theme.status.successColorHover
      } else if (props.variant === 'warning') {
        return theme.status.warningColorHover
      }
    }};
    transition: all 0.4s ease-out;
  }

  &:disabled {
    color: ${theme.textOnDisabled};
    background-color: ${theme.disabled};
    cursor: not-allowed;
  }
`
