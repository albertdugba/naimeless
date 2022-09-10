import React from 'react'

export const decorators = [
  (Story) => (
    <>
      <Story />
    </>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
