import { palette } from '../palette'

export const theme = {
  textColorPrimary: 'black',
  textColorSecondary: palette.grey,

  linkColor: palette.blue,
  linkVisitedColor: palette.purple,
  linkHoverColor: palette.red,
  buttonColor: 'white',
  disabledButtonColor: 'rgba(255, 255, 255, 0.8)',

  pageBackground: 'white',
  codeBackground: palette.lightBlueOpaque,
  buttonBackground: 'black',

  decorationColorPrimary: palette.lightGrey,
  decorationColorSecondary: palette.lightestGrey,
  decorationColorTetriary: palette.grey,

  variantHoverBackground: palette.lightBlueOpaque,
  variantSelectedBorderColor: 'black',
  navBorderColor: palette.lightGreyOpaque,
  navActiveItemBackground: 'black',
  navCompletedDecorationBackground: 'white',
  navCompletedDecorationColor: 'black'
}
