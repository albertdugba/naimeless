import React from 'react'
import { DecoratorFn } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../styles/theme'
import { GlobalStyle } from '../styles/GlobalStyle'

const withTheme: DecoratorFn = (StoryFn, context) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <div style={{ fontFamily: 'Cera Pro Regular' }}>
        <GlobalStyle />
        <StoryFn />
      </div>
    </ThemeProvider>
  )
}

export const globaDecorators = [withTheme]
