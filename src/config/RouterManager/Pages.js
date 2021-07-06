import { Example1 } from "../../pages/Example1";
import { Example2 } from "../../pages/Example2";
import { ActivitiesPage } from "../../pages/ActivitiesPage";
import { CategoriesPage } from "../../pages/CategoriesPage";
import EditPage from "../../backoffice/organization/edit-page/EditPage";
import ComponentScreenListOfNews from "../../backoffice/ComponentScreenListOfNews";
import ComponentCreateNews from "../../backoffice/ComponentCreateNews";
import Registro from "../../pages/Registro";
import Login from "../../pages/Login";
import BackofficePage from "../../pages/Backoffice";
import FormCategory from "../../backoffice/categories/FormCategory";
import EditNewsPage from "../../pages/backoffice/news/EditNewsPage";
import EditSlidePage from "../../pages/backoffice/slide/EditSlidePage";
import CreateSlidePage from "../../pages/backoffice/slide/CreateSlidePage";
import ListTestimonials from "../../backoffice/testimonials/list/ListTestimonials";
import ListOfSlides from "../../backoffice/slides/ListOfSlides";
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

export const Pages = [
	new Page(Example1, "/"),
	new Page(Example2, "/example2"),
	new Page(BackofficePage, "/backoffice"),
	new Page(ComponentScreenListOfNews, "/backoffice/news"),
	new Page(ComponentCreateNews, "/backoffice/news/create"),
	new Page(ActivitiesPage, "/backoffice/activities"),
	new Page(CategoriesPage, "/backoffice/categories"),
	new Page(Registro, "/Registro"),
	new Page(Login, "/Login"),
	new Page(FormCategory, "/backoffice/categories/create"),
	new Page(FormCategory, "/backoffice/categories/:id"),
	new Page(EditNewsPage, "/backoffice/news/:id/edit"),
	new Page(EditSlidePage, "/backoffice/slides/:id"),
	new Page(ListTestimonials, "/backoffice/testimonials"),
	new Page(EditPage, "/backoffice/organization/edit"),
	new Page(CreateSlidePage, "/backoffice/slides/create"),
  new Page(ListOfSlides, "/backoffice/slides"),
];
