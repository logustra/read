import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components/macro'

import Router from './router'

import { Layout } from 'templates'

import { 
  colors,
  typography,
  GlobalStyleTypography, 
  GlobalStyleBase 
} from '@/styles'

const theme: {} = {
  colors,
  typography
}

export default function App () {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyleTypography theme={theme} />
        <GlobalStyleBase theme={theme} />
        <Layout>
          <Router />
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  )
}
