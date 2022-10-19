import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from 'styles/theme'
import { Chip } from '../chip'

describe('Chip must always have a title', () => {
  it('Must show chip label', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Chip label="Chat" />
      </ThemeProvider>
    )
  })

  const chip = screen.findByLabelText('Chat label')
  expect(chip).toBeInTheDocument()
})
