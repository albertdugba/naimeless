import styled, { css } from 'styled-components'

export const CardHeaderContainer = styled.div(
  () => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `
)

export const CardContent = styled.div`
  font-size: 11px;
  padding-top: 4px;
  padding-bottom: 4px;
  margin-top: 8px;
`

export const CardFooterActionsContainer = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 6px;
  align-items: center;
`

export const CardDate = styled.div<{
  channelName: 'Religion' | 'Chat' | 'Food'
}>(
  ({ color }) => css`
    display: flex;
  `
)
