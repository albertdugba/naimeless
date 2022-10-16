import { screen } from '@testing-library/react'

describe('first', () => {
  it('Should show default avatar color', () => {
    const defaultAvatar = screen.findByTestId('avatar-image')
    expect(defaultAvatar).exist
  })
})

export {}
