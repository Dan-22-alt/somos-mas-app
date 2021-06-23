import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Route, Pages } from './config/RouterManager'

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        {Pages.map(page => <Route {...page} />)}
      </Switch>
    </Router>
  )
}

export default App;
