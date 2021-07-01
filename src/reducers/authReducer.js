import { createSlice } from '@reduxjs/toolkit';
import { login, handleRequest } from '../services/authService'
import axios from 'axios'

// AUTH STATE
const authState = {
  token: '',
  error: '',
  state: null
};

const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload;
      state.state = 'success'
    },
    loginFailed: (state, action) => {
      state.error = action.payload;
      state.state = 'error'

    },
  },
});

export const { loginSuccess, loginFailed } = authSlice.actions;

export const selectAuth = state => state.auth;

export const authLog = values => dispatch => {
  axios.post(`${process.env.REACT_APP_API_LOGIN}`, values)
    .then(res => {
      if (res.data.error){
        dispatch(loginFailed(values));
      } else if (res.data.data.token){
        dispatch(loginSuccess(values));
      }
    })
    .catch(err => {
      console.log(err)
      return true
    })
};

export default authSlice.reducer;
