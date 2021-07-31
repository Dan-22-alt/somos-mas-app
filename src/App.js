import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';

import { PagesP } from './config/RouterManager/PagePublic';
import { RouteP } from './config/RouterManager/RoutePublic';

import BackofficeContainer from './epics/backoffice/BackofficeContainer';

import { fetchOrganization } from './reducers/organizationReducer';
import { fetchTestimonials } from './reducers/testimonialsReducer';

function App() {
  const dispatch = useDispatch();
  const { testimonials, organization }= useSelector(state => state);

  useEffect(() => {
    if(testimonials.status === 'idle')
      dispatch(fetchTestimonials())
    if(organization.status === 'idle')
      dispatch(fetchOrganization())
  }, [dispatch, testimonials.status, organization.status]);

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
