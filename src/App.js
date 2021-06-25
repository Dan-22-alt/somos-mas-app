import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Route } from './config/RouterManager/Route'
import { Pages } from './config/RouterManager/Pages'
import { ApiService } from './services/ApiService';
import './App.css';

function App() {
  const example = ApiService({})

  return (
    <Router>
      <Switch>
        {Pages.map(page => <Route {...page} />)}
      </Switch>
    </Router>
  )
}

export default App;
