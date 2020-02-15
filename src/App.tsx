import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import { ThemeProvider } from 'styled-components/macro'

import { Loading } from 'atoms'
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

const NotFound = Loadable({
  loader: () => import('./views/notFound'),
  loading: Loading
})

const PostIndex = Loadable({
  loader: () => import('@@/Post/views/postIndex'),
  loading: Loading
})

const PostDetail = Loadable({
  loader: () => import('@@/Post/views/postDetail'),
  loading: Loading
})

const PostAuthor = Loadable({
  loader: () => import('@@/Post/views/postAuthor'),
  loading: Loading
})

export default function App () {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyleTypography theme={theme} />
        <GlobalStyleBase theme={theme} />
        <Layout>
          <Switch>
            <Route exact path="/" component={PostIndex} />
            <Route exact path="/post/:id" component={PostDetail} />
            <Route exact path="/author/:id" component={PostAuthor} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </Layout>
      </ThemeProvider>
    </Router>
  )
}
