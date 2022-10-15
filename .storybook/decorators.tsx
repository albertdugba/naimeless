import React from 'react'
import { DecoratorFn } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../styles/theme'
import { GlobalStyle } from '../styles/GlobalStyle'

const withTheme: DecoratorFn = (StoryFn, context) => {
  const theme = context.globals.theme
  const storyTheme = theme === 'dark' ? darkTheme : lightTheme
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <StoryFn />
    </ThemeProvider>
  )
}

export const globaDecorators = [withTheme]
