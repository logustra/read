import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { RoutesModel } from '@/contracts/routerContracts'

import { Preloader } from 'templates'

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
  },
]

function PreloaderRoute ({ component: Component, ...item }) {
  return (
    <Route
      {...item}
      render={routeProps => (
        <Preloader>
          <Component {...routeProps} />
        </Preloader>
      )}
    />
  );
}

export default function Router () {  
  return (
    <React.Suspense fallback={<div />}>
      <Switch>
        {routes.map((item: RoutesModel, index: number) => (
          <PreloaderRoute
            key={`router-${index}`}
            exact={item.exact}
            path={item.path}
            component={item.component}
          />
        ))}
      </Switch>
    </React.Suspense>
  )
}
