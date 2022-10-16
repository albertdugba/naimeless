import styled, { css } from 'styled-components'

export type ChipProps = {
  channelName: string
}
export const StyledChip = styled.span<ChipProps>(
  ({ theme: { color }, channelName }) => css`
    display: flex;
    align-items: center;
    font-size: 13px;
    color: red;
    border-radius: 50%;
    padding-top: 6px 2px;
    background-color: ${color.buttonPrimary};
  `
)

export const Chip = ({ channelName }: ChipProps) => {
  return <StyledChip channelName={channelName} />
}
