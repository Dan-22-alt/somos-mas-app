import ActivitieDetail from '../../epics/activities/Detail/Index';
import ContactPage from '../../epics/contact/pages/contactPage';
import { HomePage } from '../../epics/home/pages/HomePage';
import Login from '../../epics/login/pages/Login';
import NewDetail from '../../epics/news/Detail/Index';
import Nosotros from '../../epics/nosotros/Index';
import Registro from '../../epics/register/pages/Registro';

/*
  component = Ahi iria la pagina
  path = endpoind de la url
  exact es true significa que la pagina
  Solo aparesca cuando coincida el path
*/

class Page {
  constructor(component, path, exact = true) {
    this.component = component;
    this.path = path;
    this.key = path;
    this.exact = exact;
  }
}

//new Page(Example2, "/example2"),
export const PagesP = [
  new Page(HomePage, '/'),
  new Page(Registro, '/Registro'),
  new Page(Login, '/Login'),
  new Page(Nosotros, '/nosotros'),
  new Page(ContactPage, '/contacto'),
  new Page(NewDetail, '/novedades/:id'),
  new Page(ActivitieDetail, '/actividades/:id'),
];
