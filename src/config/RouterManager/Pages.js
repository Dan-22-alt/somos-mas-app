import { Example1 } from '../../pages/Example1'
import { Example2 } from '../../pages/Example2'
import { CategoriesPage } from '../../pages/CategoriesPage'
import ComponentScreenListOfNews from '../../backoffice/ComponentScreenListOfNews'
import ComponentCreateNews from '../../backoffice/ComponentCreateNews'
import Registro from "../../pages/Registro"


/*
  component = Ahi iria la pagina
  path = endpoind de la url
  exact es true significa que la pagina
  Solo aparesca cuando coincida el path
*/

class Page {
  constructor(component, path, exact=true){
    this.component = component
    this.path = path
    this.key = path
    this.exact = exact
  }
}

export const Pages = [
  new Page(Example1, '/'),
  new Page(Example2, '/example2'),
  new Page(ComponentScreenListOfNews, '/backoffice/news'),
  new Page(ComponentCreateNews, '/backoffice/news/create'),
  new Page(CategoriesPage, '/backoffice/categories'),
  new Page(Registro, '/Registro'),
]
