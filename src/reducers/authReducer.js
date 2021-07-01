import { createSlice } from '@reduxjs/toolkit';

// AUTH STATE
const authState = {
  token: '',
  error: '',
  loading: false
};

const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload;
    },
    loginFailed: (state, action) => {
      state.error = action.payload;
    },
    signInLoading: state => {
      state.loading = true
    },
    signInSuccess: (state, action) => {
      state.token = action.payload.token
      state.loading = false
    },
    signInFail: (state, action) => {
      state.error = action.payload.error
      state.loading = false
    }
  },
})

export const { loginSuccess, loginFailed, signInLoading, signInSuccess, signInFail } = authSlice.actions;

export const selectAuth = state => state.auth;

export default authSlice.reducer;
