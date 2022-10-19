import styled, { css } from 'styled-components'

export type ChipProps = {
  label: 'Chat'
}
export const StyledChip = styled.span<ChipProps>(
  ({ label, theme: { color, borderRadius } }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    color: ${label === 'Chat' ? color.badgeText : ''};
    border-radius: ${borderRadius.xxl};
    padding-top: 2px;
    padding-bottom: 2px;
    padding-left: 6px;
    padding-right: 6px;
    background-color: ${label === 'Chat' ? color.badgeBackground : ''};
  `
)

export const Chip = ({ label }: ChipProps) => {
  return <StyledChip label={label}>@{label}</StyledChip>
}
