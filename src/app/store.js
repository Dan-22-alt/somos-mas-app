import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import activitiesReducer from '../reducers/activitiesSlice';
import authReducer from '../reducers/authReducer';
import categoryReducer from '../reducers/categoryReducer';
import newsBackofficeSlice from '../reducers/newsBackofficeReducer';
import organizationSlice from '../reducers/organizationReducer';

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    news: newsBackofficeSlice,
    activities: activitiesReducer,
    category: categoryReducer,
    organization: organizationSlice
  },
});
