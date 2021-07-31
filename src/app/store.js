import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import activitiesReducer from '../reducers/activitiesSlice';
import authReducer from '../reducers/authReducer';
import categoryReducer from '../reducers/categoryReducer';
import testimonialsReducer from '../reducers/testimonialsReducer';
import newsBackofficeSlice from '../reducers/newsBackofficeReducer';
import organizationSlice from '../reducers/organizationReducer';
import slicesReducer from '../reducers/slicesReducer';
import membersReducer from '../reducers/membersReducer';

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    news: newsBackofficeSlice,
    activities: activitiesReducer,
    testimonials: testimonialsReducer,
    category: categoryReducer,
    organization: organizationSlice,
    slides: slicesReducer,
    members: membersReducer,
  },
});
