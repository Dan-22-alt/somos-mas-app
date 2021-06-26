import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Route } from './config/RouterManager/Route'
import { Pages } from './config/RouterManager/Pages'
import { CategoriesService } from './services/CategoriesService';
import './App.css';

function App() {
  const example1 = CategoriesService.getList()
  const example2 = CategoriesService.getCategory(78)
  //const example3 = CategoriesService.deleteCategory(79) delete
  //const example4 = CategoriesService.createCategory({name: 'aaa',description: 'mmmmm', image: 'mmml', parent_category_id: 0 }) created
  // const example5 = CategoriesService.editCategory({id: 78,name: 'Armando', description: 'hola', parent_category_id: 0, image: 'asdasd' })

  return (
    <Router>
      <Switch>
        {Pages.map(page => <Route {...page} />)}
      </Switch>
    </Router>
  )
}

export default App;
