import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: 'light' | 'dark'
    fonts: {
      family: string
    }
    spacing: typeof spacing
    color: typeof color
    borderRadius: typeof borderRadius
    boxShadow: typeof boxShadow
    typography: typeof typography
  }
}

const baseColors = {
  white: '#FFFFFF ',
  black: '#202020',
  otherBlack: '#2C2C2C ',
  bgOpacity: 'none',
  grey: {
    base: '#909090',
    light1: '#A6A6A6',
    light2: '#BCBCBC',
    light3: '#D2D2D2',
    light4: '#E9E9E9',
    light5: '#F5F6F7',
    light6: '#F9F9F9',
    dark1: '#797979',
    dark2: '#636363',
    dark3: '#4D4D4D',
    dark4: '#363636',
    dark5: '#2C2C2C',
    dark6: '#202020',
  },
  blue: {
    blue1: ' rgba(37, 150, 190, 0.3)',
    blue2: 'rgba(37, 150, 190,0.6)',
  },
  purple: {
    purple1: '#eddff2',
    purple2: '#d5c9da',
    purple3: '#dbbbe6',
    purple4: '#cfa5de',
    purple5: '#9971a9',
    purple6: '#7453B2',
    purple7: '#7453B2',
    purple8: '#7453B2',
    purple9: '#7453B2',
  },
}

const spaceUnit = 1

const borderRadius = {
  xs: '4px',
  s: '8px',
  m: '16px',
  l: '24px',
  xl: '32px',
  xxl: '40px',
  round: '50%',
}

const spacing = {
  xxs: `${0.25 * spaceUnit}em`,
  xs: `${0.5 * spaceUnit}em`,
  s: `${spaceUnit}em`,
  m: `${1.25 * spaceUnit}em`,
  l: `${2 * spaceUnit}em`,
  xl: `${3.25 * spaceUnit}em`,
  xxl: `${5.25 * spaceUnit}em`,
}

const boxShadow = {
  card: '0px 14px 26px 0px rgba(0, 0, 0, 0.08)',
  inner: 'inset 0 3px 0 0 rgba(0, 0, 0, 0.05)',
  outerBorder: `0 0 0 1px ${baseColors.purple.purple1}, 0 0 0 4px ${baseColors.purple.purple2}`,
}

const typography = {
  fontSize: {
    body: '1.125rem',
    bodyS: '1rem',
    bodyXS: '0.9rem',
    bodyXXS: '0.72rem',
    heading1: '2.74rem',
    heading2: '2.19rem',
    heading3: '1.75rem',
    heading4: '1.4rem',
  },
  fontWeight: {
    black: '900',
    bold: '700',
    medium: '500',
    regular: '400',
  },
}

const color = {
  accentText: baseColors.black,
  badgeBackground: baseColors.grey.light4,
  badgeText: baseColors.grey.dark2,
  buttonClear: 'transparent',
  buttonClearHover: baseColors.grey.light5,
  buttonPrimary: baseColors.purple.purple9,
  buttonPrimaryText: baseColors.grey.dark4,
  buttonPrimaryHover: baseColors.bgOpacity,
  borderColor: baseColors.grey.light4,
  // grey
  chipColorGrey1: baseColors.grey.light3,
  chipColorGrey2: baseColors.grey.light4,
  chipColorGrey3: baseColors.grey.light4,
  chipColorPurple1: baseColors.purple.purple1,

  // purple
  chipBgColorPurp1: baseColors.purple.purple1,
  chipBgColorPurp2: baseColors.purple.purple2,
  chipBgColorPurp3: baseColors.purple.purple3,
  chipBgColorPurp4: baseColors.purple.purple4,
  chipBgColorPurp5: baseColors.purple.purple5,
}

export const lightTheme: DefaultTheme = {
  borderRadius,
  boxShadow,
  color,
  fonts: {
    family: 'Cera Pro Regular',
  },
  name: 'light',
  spacing,
  typography,
}

export const darkTheme: DefaultTheme = {
  ...lightTheme,
  boxShadow: {
    ...boxShadow,
    // outerBorder: `0 0 0 2px ${baseColors.green.dark1}, 0 0 0 4px ${baseColors.grey.dark3}`,
  },

  name: 'dark',
}
