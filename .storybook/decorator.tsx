import { DecoratorFn } from '@storybook/react'
import React from 'react'

export const withMaxWidth: DecoratorFn = (StoryFn, context) => {
  console.log(context)
  return (
    <div style={{ width: '400px' }}>
      <StoryFn />
    </div>
  )
}

export const globalDecorators = [withMaxWidth]
