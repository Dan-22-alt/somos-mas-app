import { createSlice } from '@reduxjs/toolkit';

// AUTH STATE
const authState = {
  token: '',
  error: '',
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
    },
  });

export const { loginSuccess, loginFailed } = authSlice.actions;

export const selectAuth = state => state.auth.authState;

export default authSlice.reducer;
