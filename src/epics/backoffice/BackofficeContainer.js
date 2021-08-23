import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import BackofficeHomePage from './pages/BackofficeHomePage';
import Header from './components/Header';
import ScreenList from '../users/components/screen-list/ScreenList';
import Newspage from '../news/pages/NewsPage';
import ComponentCreateNews from '../news/pages/ComponentCreateNews';
import EditNewsPage from '../news/pages/EditNewsPage';
import { ActivitiesPage } from '../activities/pages/ActivitiesPage';
import ActivitiesCreate from '../activities/pages/ActivitiesCreate';
import { CategoriesPage } from '../categories/pages/CategoriesPage';
import FormCategory from '../categories/pages/FormCategory';
import ListOfSlides from '../slides/components/ListOfSlides';
import CreateSlidePage from '../slides/pages/CreateSlidePage';
import EditSlidePage from '../slides/pages/EditSlidePage';
import Testimonials from '../testimonials/pages/backoffice/Testimonials';
import CreateTestimonial from '../testimonials/pages/backoffice/CreateTestimonial';
import EditTestimonial from '../testimonials/pages/backoffice/EditTestimonial';
import EditPage from '../organization/pages/EditPage';
import MembersEdit from '../members/pages/MembersEdit';
import MembersCreate from '../members/pages/MemberCreate';
import Members from '../members/pages/Members';
import ScreenOrganization from '../organization/pages/ScreenOrganization';

const BackofficeContainer = () => {
  return (
    <BrowserRouter>
      <Box>
        <Header />
        <Box bg="gray.100" p={4} style={{ minHeight: 'calc(100vh - 60px)' }}>
          <Switch>
            <Route path="/backoffice" component={BackofficeHomePage} exact />

            <Route path="/backoffice/users" component={ScreenList} exact />
            <Route path="/backoffice/news" component={Newspage} exact />
            <Route path="/backoffice/news/create" component={ComponentCreateNews} exact />
            <Route path="/backoffice/news/:id/edit" component={EditNewsPage} exact />
            <Route path="/backoffice/activities" component={ActivitiesPage} />
            <Route path="/backoffice/activities/create" component={ActivitiesCreate} exact />
            <Route path="/backoffice/activities/:id" component={ActivitiesCreate} exact />
            <Route path="/backoffice/categories" component={CategoriesPage} exact />
            <Route path="/backoffice/categories/create" component={FormCategory} exact />
            <Route path="/backoffice/categories/:id" component={FormCategory} exact />
            <Route path="/backoffice/slides" component={ListOfSlides} exact />
            <Route path="/backoffice/slides/create" component={CreateSlidePage} exact />
            <Route path="/backoffice/slides/:id" component={EditSlidePage} exact />
            <Route path="/backoffice/testimonials" component={Testimonials} exact />
            <Route path="/backoffice/testimonials/create" component={CreateTestimonial} exact />
            <Route path="/backoffice/testimonials/:id" component={EditTestimonial} exact />
            <Route path="/backoffice/organization/edit" component={EditPage} exact />
            <Route path="/backoffice/members/edit/:id" component={MembersEdit} exact />
            <Route path="/backoffice/members/create" component={MembersCreate} exact />
            <Route path="/backoffice/members" component={Members} exact />
            <Route path="/backoffice/organization" component={ScreenOrganization} exact />
          </Switch>
        </Box>
      </Box>
    </BrowserRouter>
  );
};
export default BackofficeContainer;
