import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Button } from '../button'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../../../../../styles/theme'

describe('<Button/>', () => {
  it('Should display default button', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Button variant="ghost">Primary button</Button>
      </ThemeProvider>
    )

    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('type', 'button')
  })
})
