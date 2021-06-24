import React from 'react';
import { Route as RouteReact } from 'react-router-dom'

export const Route = route => {
  return(
    <RouteReact
      path={route.path}
      exact={route.exact}
      render= {
        props => <route.component {...props} />
      }
    />
  )
}
