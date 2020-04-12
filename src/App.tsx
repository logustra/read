import React from 'react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { ThemeProvider } from 'styled-components/macro'

import { Theme } from '@/typings/stylesTypings'

import Routes from './router'

import { RLayout } from 'templates'

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
        <RLayout>
          <Routes />
        </RLayout>
      </ThemeProvider>
    </Router>
  )
}
