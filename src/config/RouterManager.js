import React from 'react';
import { Route as RouteReact } from 'react-router-dom'
import { Example1 } from '../pages/Example1'

/*
  component = Ahi iria la pagina
  path = endpoind de la url
  exact es true significa que la pagina
*/

class Page {
  constructor(component, path, exact=true){
    this.component = component
    this.path = path
    this.key = path
    this.exact = exact
  }
}

export const Pages = [
  new Page(Example1, '/'),
]

export const Route = route => {
  return(
    <RouteReact
      path={route.path}
      render= {
        props => <route.component {...props} />
      }
    />
  )
}
