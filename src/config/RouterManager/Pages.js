import { ActivitiesPage } from '../../epics/activities/pages/ActivitiesPage';
import { CategoriesPage } from '../../epics/categories/pages/CategoriesPage';
import EditPage from '../../epics/organization/pages/EditPage';
import ComponentCreateNews from '../../epics/news/pages/ComponentCreateNews';
import BackofficePage from '../../epics/backoffice/pages/BackofficeHomePage';
import FormCategory from '../../epics/categories/pages/FormCategory';
import EditNewsPage from '../../epics/news/pages/EditNewsPage';
import EditSlidePage from '../../epics/slides/pages/EditSlidePage';
import CreateSlidePage from '../../epics/slides/pages/CreateSlidePage';
import ActivitiesCreate from '../../epics/activities/pages/ActivitiesCreate';
import ListTestimonials from '../../epics/testimonials/pages/ListTestimonials';
import ScreenList from '../../epics/users/components/screen-list/ScreenList';
import ListOfSlides from '../../epics/slides/components/ListOfSlides';
import MembersEdit from '../../epics/members/pages/MembersEdit';
import MembersCreate from '../../epics/members/pages/MemberCreate';
import Members from '../../epics/members/pages/Members';
import ScreenOrganization from '../../epics/organization/pages/ScreenOrganization';
import Newspage from '../../epics/news/pages/NewsPage';
import FormTestimonials from '../../epics/testimonials/components/FormTestimonials';

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
export const Pages = [];
