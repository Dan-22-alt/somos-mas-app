import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import { PagesP } from './config/RouterManager/PagePublic';
import { RouteP } from './config/RouterManager/RoutePublic';
import BackofficeContainer from './epics/backoffice/BackofficeContainer';
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
      <Switch>
        <Route path="/backoffice" component={BackofficeContainer} />
        <Layout>
          {PagesP.map((page) => (
            <RouteP {...page} />
          ))}
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
