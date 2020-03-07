import React from 'react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { ThemeProvider } from 'styled-components/macro'

import { Theme } from '@/contracts/stylesContracts'

import Routes from './router'

import { Layout } from 'templates'

import { 
  colors,
  typography,
  GlobalStyleTypography, 
  GlobalStyleBase 
} from '@/styles'

const theme: Theme = {
  colors,
  typography
}

const browserHistory = createBrowserHistory()

export default function App () {
  return (
    <Router history={browserHistory}>
      <ThemeProvider theme={theme}>
        <GlobalStyleTypography theme={theme} />
        <GlobalStyleBase theme={theme} />
        <Layout>
          <Routes />
        </Layout>
      </ThemeProvider>
    </Router>
  )
}
