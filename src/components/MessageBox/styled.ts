import styled from 'styled-components'
import { colors } from '../../utils'

const StyledComposeContainer = styled.div`
  box-sizing: border-box;
  border: 1px solid ${colors.neutral[200]};
  width: 100%;
  border-radius: 6px;
  display: flex;
  gap: 20px;
  background: ${colors.neutral[100]};
  padding: 1.2rem 1.5rem;
`

const StyledComposeInput = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  border-radius: 6px;
  padding: 8px 1rem;
  outline: none;
  border: none;
`

const TextInput = styled.input`
  width: 100%;
  padding: 8px 14px;
  border: 1px solid ${colors.neutral[300]};
  border-radius: 30px;
  height: 40px;
  outline: none;
`

export { StyledComposeContainer, StyledComposeInput, TextInput }
