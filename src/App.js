import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Route } from './config/RouterManager/Route'
import { Pages } from './config/RouterManager/Pages'
import { CategoriesService } from './services/CategoriesService';
import './App.css';

function App() {
  CategoriesService()
  return (
    <Router>
      <Switch>
        {Pages.map(page => <Route {...page} />)}
      </Switch>
    </Router>
  )
}

export default App;
