import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { RouterType } from '@/contracts/routerContracts'

import { Loading } from 'atoms'

const domainModuleFiles = require.context('./modules', true, /router.tsx/)
const domainModules = domainModuleFiles.keys().reduce((carry: any, item: string) => {
  return [...carry, ...domainModuleFiles(item).default]
}, [])

const router = [
  ...domainModules,
  {
    exact: false,
    path: '*',
    component: React.lazy(() => import('./views/notFound'))
  },
]

export default function Router () {
  function renderRouter() {
    return router.map((item: RouterType, index: number) => (
      <Route
        key={`router-${index}`}
        exact={item.exact}
        path={item.path}
        component={item.component}
      />
    ))
  }
  
  return (
    <React.Suspense fallback={Loading}>
      <Switch>
        {renderRouter()}
      </Switch>
    </React.Suspense>
  )
}
