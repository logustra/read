import { createGlobalStyle } from 'styled-components/macro'

import { rem } from '../'

export const GlobalStyleBase = createGlobalStyle`
  body {
    width: 100%;
    height: 100vh;
    font-family: ${props => props.theme.typography.lato};
    font-size: ${rem('14px')};    
    background-color: ${props => props.theme.colors.gray};
  }
`
