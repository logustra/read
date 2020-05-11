import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { RoutesModel } from 'typings/routerTypings'

import { RLoading } from 'atoms'
import { RPreloader } from 'templates'

const domainModuleFiles = require.context('./modules', true, /router.tsx/)
const domainModules = domainModuleFiles.keys().reduce((carry: any, item: string) => {
  return [...carry, ...domainModuleFiles(item).default]
}, [])

const routes = [
  ...domainModules,
  
  {
    exact: false,
    path: '*',
    component: React.lazy(() => import('./views/notFound'))
  }
]

function RPreloaderRoute ({ component: Component, ...props }) {
  return (
    <Route
      {...props}
      render={routeProps => (
        <RPreloader>
          <Component {...routeProps} />
        </RPreloader>
      )}
    />
  )
}

export default function Router () {  
  return (
    <React.Suspense fallback={<RLoading />}>
      <Switch>
        {routes.map((item: RoutesModel, index: number) => (
          <RPreloaderRoute
            key={`route-${index}`}
            exact={item.exact}
            path={item.path}
            component={item.component}
          />
        ))}
      </Switch>
    </React.Suspense>
  )
}
