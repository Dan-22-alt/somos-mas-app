import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../reducers/authReducer';
import newsBackofficeSlice from '../reducers/newsBackofficeReducer';

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    news : newsBackofficeSlice,
  },
});
