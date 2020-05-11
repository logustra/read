import React from 'react'

const domainRouterFiles = require.context('./modules', true, /router.tsx/)
const domainRouter = domainRouterFiles.keys().reduce((carry: any, item: string) => {
  return [...carry, ...domainRouterFiles(item).default]
}, [])

export default [
  ...domainRouter,

  {
    exact: false,
    path: '*',
    component: React.lazy(() => import('./views/notFound'))
  }
]
