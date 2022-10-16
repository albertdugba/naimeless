import styled, { css } from 'styled-components'

export const CardContainer = styled.div(
  ({ theme: { color } }) => css`
    border: 1px solid ${color.borderColor};
    padding: 10px;
    @media (min-width: 801px) {
      border: 1px solid ${color.borderColor};
      background: white;
      border-radius: 8px;
      padding: 20px;
    }
  `
)
