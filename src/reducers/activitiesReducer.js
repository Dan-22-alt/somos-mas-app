import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const activitiesState = {
	listado: "",
	error: "",
	state: null,
};

const activitiesSlice = createSlice({
	name: "auth",
	initialState: activitiesState,
	reducers: {
		delete: (state, action) => {
			state.token = action.payload.token;
			state.user = action.payload.user;
			state.state = "success";
		},
		create: (state, action) => {
			state.token = action.payload.token;
			state.user = action.payload.user;
			state.state = "success";
		},
		edit: (state, action) => {
			state.token = action.payload.token;
			state.user = action.payload.user;
			state.state = "success";
		},
	},
});
