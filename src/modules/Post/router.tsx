import React from 'react'

export default [
  {
    exact: true,
    path: '/',
    component: React.lazy(() => import('./views/postIndex'))
  },
  {
    exact: false,
    path: '/post/:postId',
    component: React.lazy(() => import('./views/postDetail'))
  },
  {
    exact: false,
    path: '/author/:userId',
    component: React.lazy(() => import('./views/postAuthor'))
  },
]
