import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

const theme = create({
  colorSecondary: '#7453B2',
  // UI
  appBg: '#f6f9fc',
  appContentBg: '#fff',
  appBorderRadius: 4,

  base: 'light',
  textColor: '#3333',
  textInverseColor: '#fff',
  textMutedColor: '#6666',
  barTextColor: '#999',
  barSelectedColor: '#7453B2',

  //   form colors
  inputBg: '#fff',
  inputBorder: 'rgba(0,0,0,0.3)',
  inputTextColor: '#3333',

  //   Brand Asset
  brandTitle: 'Naimeless',
  brandUrl: 'https://naimesless.com',
  brandImage:
    'https://res.cloudinary.com/deyi3b3gr/image/upload/v1665585743/naimeless_srxbgc.svg',
})

addons.setConfig({ theme })
