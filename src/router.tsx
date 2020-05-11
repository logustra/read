import React from 'react'
import { Switch, Route } from 'react-router-dom'

import routes from './routes'

import { RoutesModel } from 'typings/routerTypings'

import { RLoading } from 'atoms'
import { RPreloader } from 'templates'

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
            {...item}
          />
        ))}
      </Switch>
    </React.Suspense>
  )
}
