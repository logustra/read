import { createGlobalStyle as CreateGlobalStyle } from 'styled-components/macro'
import { rem } from 'polished'

import colors from './colors'
import { typography } from './typography'

export const GlobalStyleBase = CreateGlobalStyle`
  /* stylelint-disable-next-line */
  body {
    width: 100%;
    height: 100vh;
    font-family: ${typography.lato};
    font-size: ${rem('14px')};    
    background-color: ${colors.gray[100]};
  }
`
