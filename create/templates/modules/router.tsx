import React from 'react'

export default [
  {
    exact: true,
    path: '/example',
    component: React.lazy(() => import('./views/exampleIndex'))
  }
]
