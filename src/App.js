import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { getOrganization } from './reducers/organizationReducer/index'

import userIsLogged from "./features/auth/userIsLogged";

import { RouteP } from "./config/RouterManager/RoutePublic";
import { PagesP } from "./config/RouterManager/PagePublic";
import { Route } from "./config/RouterManager/Route";
import { Pages } from "./config/RouterManager/Pages";

import Layout from "./components/Layout";

function App() {
  const dispatch = useDispatch()
  const ongStatus = useSelector(state => state.organization.status)
  const ongData = useSelector(state => state.organization.data)

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
    if(ongStatus === 'idle'){
      dispatch(getOrganization())
    }
  }, [dispatch, ongStatus])

  return (
    <Router>
      <Layout organizationData={ongData}>
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
