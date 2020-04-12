import React from 'react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { ThemeProvider } from 'styled-components/macro'

import { Theme } from '@/typings/stylesTypings'

import Store from './store'
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
    <Store>
      <ThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <GlobalStyleTypography theme={theme} />
          <GlobalStyleBase theme={theme} />
          <RLayout>
            <Routes />
          </RLayout>
        </Router>
      </ThemeProvider>
    </Store>
  )
}
