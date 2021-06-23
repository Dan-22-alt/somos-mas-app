import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Route } from './config/RouterManager/RouterManager'
import { Pages } from './config/RouterManager/Pages'
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
