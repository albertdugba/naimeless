import styled, { css } from 'styled-components'

export type ChipProps = {
  label: string
}
export const StyledChip = styled.span<ChipProps>(
  ({ label, theme: { color, borderRadius } }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    color: ${label === 'Chat'
      ? color.chipBgColorPurp5
      : label === 'Main'
      ? color.chipColorGrey1
      : ''};
    border-radius: ${borderRadius.xxl};
    padding: 2px 6px;
    width: fit-content;
    background-color: ${label === 'Chat'
      ? color.chipBgColorPurp3
      : label === 'Main'
      ? color.chipColorGrey3
      : ''};
  `
)

export const Chip = ({ label }: ChipProps) => {
  return (
    <StyledChip arial-aria-label={`${label} label`} label={label}>
      @{label}
    </StyledChip>
  )
}
