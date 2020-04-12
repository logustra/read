import { createGlobalStyle as CreateGlobalStyle } from 'styled-components/macro'

import { rem } from '../'

export const GlobalStyleBase = CreateGlobalStyle`
  /* stylelint-disable-next-line */
  body {
    width: 100%;
    height: 100vh;
    font-family: ${props => props.theme.typography.lato};
    font-size: ${rem('14px')};    
    background-color: ${props => props.theme.colors.gray};
  }
`
