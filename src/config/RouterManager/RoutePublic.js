import React from 'react';
import { Route as RoutePublic } from 'react-router-dom'

export const RouteP = route => {
  return(
    <RoutePublic
      path={route.path}
      exact={route.exact}
      render= {
        props => <route.component {...props} />
      }
    />
  )
}