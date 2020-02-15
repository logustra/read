import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import { ThemeProvider } from 'styled-components/macro'

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

const NotFound = Loadable({
  loader: () => import('./views/notFound'),
  loading: 'loading...'
})

const PostIndex = Loadable({
  loader: () => import('@@/Post/views/postIndex'),
  loading: 'loading...'
})

export default function App () {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyleTypography theme={theme} />
        <GlobalStyleBase theme={theme} />
        <div>
          <Switch>
            <Route exact path="/" component={PostIndex} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  )
}
