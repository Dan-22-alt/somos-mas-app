import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Route } from './config/RouterManager/Route'
import { Pages } from './config/RouterManager/Pages'
import { CategoriesService } from './services/CategoriesService';
import './App.css';

function App() {


  const example1 = CategoriesService().getList()
  const example2 = CategoriesService().getCategory(47)
  const example3 = CategoriesService().createCategory({name: 'juan',
    description:'mmmm', parent_category_id: 0})

  console.log(example3)
  return (
    <Router>
      <Switch>
        {Pages.map(page => <Route {...page} />)}
      </Switch>
    </Router>
  )
}

export default App;
