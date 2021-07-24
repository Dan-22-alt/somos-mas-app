import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import { PagesP } from './config/RouterManager/PagePublic';
import { Pages } from './config/RouterManager/Pages';
import { Route } from './config/RouterManager/Route';
import { RouteP } from './config/RouterManager/RoutePublic';
import userIsLogged from './features/auth/userIsLogged';
import { fetchOrganization } from './reducers/organizationReducer';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(`${userIsLogged() ? 'El usuario esta autenticado' : 'El usuario no esta autenticado'}`);
    dispatch(fetchOrganization());
  }, [dispatch]);

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
