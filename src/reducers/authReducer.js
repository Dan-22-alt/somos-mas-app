import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { register, login } from "../services/authService";

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

// SIGN IN ASYNCTUNK

export const signInUser = createAsyncThunk(
	"auth/signInUser",
	async (values, { rejectWithValue }) => {
		try {
			const response = await login(values);
			if (response.data.error) {
				return rejectWithValue(response.data);
			} else {
				return response.data.data;
			}
		} catch (error) {
			console.log("Error", error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

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
		logoutSuccess: (state, action) => {
			state.token = ''
			state.user = {}
			localStorage.removeItem("token")
			state.state = "success"
		},
	},
	extraReducers: {
		//signInUser
		[signInUser.pending]: state => {
			state.loading = true
		},
		[signInUser.fulfilled]: (state, { payload }) => {
			localStorage.setItem("token", payload.token);
			state.token = payload.token;
			state.user = payload.user;
			state.loading = false;
			state.state = "success";
		},
		[signInUser.rejected]: (state, { payload }) => {
			state.error = payload.message;
			state.state = "error";
			state.loading = false;
		},
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

export const { logoutSuccess } = authSlice.actions;

export const selectAuth = state => state.auth;

export default authSlice.reducer;
