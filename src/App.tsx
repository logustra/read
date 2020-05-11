import React from 'react'
import { Router as ReactRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Store from './store'
import Router from './router'

import { RLayout } from 'templates'

import { 
  GlobalStyleTypography, 
  GlobalStyleBase 
} from 'styles'

const browserHistory = createBrowserHistory()

export default function App () {
  return (
    <Store>
      <ReactRouter history={browserHistory}>
        <GlobalStyleTypography />
        <GlobalStyleBase />
        <RLayout>
          <Router />
        </RLayout>
      </ReactRouter>
    </Store>
  )
}
