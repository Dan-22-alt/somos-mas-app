import { ActivitiesPage } from "../../epics/activities/pages/ActivitiesPage";
import { CategoriesPage } from "../../epics/categories/pages/CategoriesPage";
import { HomePage } from "../../epics/home/pages/HomePage";
import EditPage from "../../epics/organization/pages/EditPage";
import ComponentScreenListOfNews from "../../epics/news/pages/ComponentScreenListOfNews";
import ComponentCreateNews from "../../epics/news/pages/ComponentCreateNews";
import Registro from "../../epics/register/pages/Registro";
import Login from "../../epics/login/pages/Login";
import BackofficePage from "../../epics/backoffice/pages/Backoffice";
import FormCategory from "../../epics/categories/pages/FormCategory";
import EditNewsPage from "../../epics/news/pages/EditNewsPage";
import EditSlidePage from "../../epics/slides/pages/EditSlidePage";
import CreateSlidePage from "../../epics/slides/pages/CreateSlidePage";
import ActivitiesCreate from "../../epics/activities/pages/ActivitiesCreate";
import ListTestimonials from "../../epics/testimonials/pages/ListTestimonials";
import ScreenList from "../../epics/users/components/screen-list/ScreenList";
import ListOfSlides from "../../epics/slides/components/ListOfSlides";
import MembersEdit from "../../epics/members/pages/MembersEdit";
import MembersCreate from "../../epics/members/pages/MemberCreate";
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
export const Pages = [
	new Page(HomePage, "/"),
	new Page(Registro, "/Registro"),
	new Page(Login, "/Login"),
	new Page(BackofficePage, "/backoffice"),
	new Page(ScreenList, "/backoffice/users"),
	new Page(ComponentScreenListOfNews, "/backoffice/news"),
	new Page(ComponentCreateNews, "/backoffice/news/create"),
	new Page(EditNewsPage, "/backoffice/news/:id/edit"),
	new Page(ActivitiesPage, "/backoffice/activities"),
	new Page(ActivitiesCreate, "/backoffice/activities/create"),
	new Page(ActivitiesCreate, "/backoffice/activities/:id"),
	new Page(CategoriesPage, "/backoffice/categories"),
	new Page(FormCategory, "/backoffice/categories/create"),
	new Page(FormCategory, "/backoffice/categories/:id"),
	new Page(ListOfSlides, "/backoffice/slides"),
	new Page(CreateSlidePage, "/backoffice/slides/create"),
	new Page(EditSlidePage, "/backoffice/slides/:id"),
	new Page(ListTestimonials, "/backoffice/testimonials"),
	new Page(EditPage, "/backoffice/organization/edit"),
	new Page(MembersEdit, "/backoffice/members/edit/:id"),
	new Page(MembersCreate, "/backoffice/members/create"),
];
