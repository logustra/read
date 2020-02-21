import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { RouterType } from '@/contracts/routerContracts'

import { Loading } from 'atoms'
import { Preloader } from 'templates'

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

function PreloaderRoute ({ component: Component, ...props }) {
  return (
    <Route
      {...props}
      render={routeProps => (
        <Preloader>
          <Component {...routeProps} />
        </Preloader>
      )}
    />
  );
}

export default function Router () {
  function renderRouter() {
    return router.map((item: RouterType, index: number) => (
      <PreloaderRoute
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
