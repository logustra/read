import { createGlobalStyle } from 'styled-components/macro'
import { Typography } from '@/contracts/stylesContracts'

export const typography: Typography = {
  lato: '\'Lato\', sans-serif'
}

export const GlobalStyleTypography = createGlobalStyle`
  @font-face {
    font-family: 'Lato';
    font-display: swap;
    font-style: normal;
    font-weight: 400;
    src: url('https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wXiWtFCc.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Lato';
    font-display: swap;
    font-style: normal;
    font-weight: 700;
    src: url('https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2') format('woff2');
  }
`
