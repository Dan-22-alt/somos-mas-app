import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { register } from "../services/authService";

// ! SIGN UP FUNCTIONALITY

export const signUpUser = createAsyncThunk(
	"auth/signUpUser",
	async (body, { rejectWithValue }) => {
		try {
			const response = await register(body);
			if (response.status === 200) {
				return response.data.data;
			} else {
				return rejectWithValue(response.data);
			}
		} catch (error) {
			console.log("Error", error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

/* 
USAGE:{
	import { useDispatch } from "react-redux";
	import { signUpUser } from "./authReducer";

	///...

	const dispatch = useDispatch();
		dispatch(
						signUpUser({
							name: "name",
							email: "email",
							password: "password",
						})
					);
}
*/

// AUTH STATE
const authState = {
	token: "",
	error: "",
	user: {},
	loading: false,
	state: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState: authState,
	reducers: {
		loginSuccess: (state, action) => {
			state.token = action.payload.token;
			state.user = action.payload.user;
			state.token = action.payload.token;
			localStorage.setItem("token", action.payload.token);
			state.user = action.payload.user;
			state.state = "success";
		},
		loginFailed: (state, action) => {
			state.error = action.payload;
			state.state = "error";
		},
    logoutSuccess: (state, action) => {
      state.token = ''
      state.user = {}
      localStorage.removeItem("token")
      state.state = "success"
    }
	},
	extraReducers: {
		//signUpUser
		[signUpUser.pending]: state => {
			state.loading = true;
		},
		[signUpUser.rejected]: (state, { payload }) => {
			state.state = "error";
			state.error = payload.message;
			state.loading = false;
		},
		[signUpUser.fulfilled]: (state, { payload }) => {
			state.user = payload.user;
			state.token = payload.token;
			state.loading = false;
			state.state = "success";
		},
	},
});

export const { loginSuccess, loginFailed, logoutSuccess } = authSlice.actions;

export const selectAuth = state => state.auth;

export const authLog = values => dispatch => {
	axios
		.post(`${process.env.REACT_APP_API_LOGIN}`, values)
		.then(res => {
			if (res.data.error) {
				dispatch(loginFailed(res.data.error));
			} else if (res.data.data.token) {
				dispatch(loginSuccess(res.data.data));
			}
		})
		.catch(err => {
			console.log(err);
			return true;
		});
};

export default authSlice.reducer;
