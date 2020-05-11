import React from 'react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Store from './store'
import Routes from './router'

import { RLayout } from 'templates'

import { 
  GlobalStyleTypography, 
  GlobalStyleBase 
} from 'styles'

const browserHistory = createBrowserHistory()

export default function App () {
  return (
    <Store>
      <Router history={browserHistory}>
        <GlobalStyleTypography />
        <GlobalStyleBase />
        <RLayout>
          <Routes />
        </RLayout>
      </Router>
    </Store>
  )
}
