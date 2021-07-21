import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../reducers/authReducer';
import newsBackofficeSlice from '../reducers/newsBackofficeReducer';
import activitiesReducer from "../reducers/activitiesSlice";
import categoryReducer from '../reducers/categoryReducer';
import organizationSlice from "../reducers/organizationReducer"

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    news : newsBackofficeSlice,
    activities: activitiesReducer,
    category: categoryReducer,
    organization: organizationSlice 
  },
});
