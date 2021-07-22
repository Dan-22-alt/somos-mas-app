import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { getOrganization } from './reducers/organizationReducer/index'

import { Route } from "./config/RouterManager/Route";
import { Pages } from "./config/RouterManager/Pages";

import userIsLogged from "./features/auth/userIsLogged";

import { RouteP } from "./config/RouterManager/RoutePublic";
import { PagesP } from "./config/RouterManager/PagePublic";

import Layout from "./components/Layout";

function App() {
  const dispatch = useDispatch()
  const organizationStatus = useSelector(state => state.organization.status)

  useEffect(() => {
    console.log(
      `${
        userIsLogged()
          ? "El usuario esta autenticado"
          : "El usuario no esta autenticado"
      }`
    );
  }, []);
  useEffect(() => {
    if(organizationStatus === 'idle'){
      dispatch(getOrganization())
    }
  }, [dispatch, organizationStatus])

  return (
    <Router>
      <Layout>
        <Switch>
          {Pages.map((page) => (
            <Route {...page} />
          ))}
          {PagesP.map((page) => (
            <RouteP {...page} />
          ))}
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
