import {
	createSlice,
	createEntityAdapter,
	createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

// ! FETCH ACTIVITIES FUNCTIONALITY

export const fetchActivities = createAsyncThunk(
	"activities/fetchActivities",
	async () => {
		const response = await axios.get(process.env.REACT_APP_API_ACTIVITY);
		const data = await response.data.data;
		return data;
	}
);

/*
  USAGE:
	{
	import {useDispatch} from "react-redux"
	import {fetchActivities} from "./activitiesSlice"

	///...

	const dispatch = useDispatch();
  dispatch(fetchActivities());
	}
*/

// ! DELETE FUNCTIONALITY

export const deleteActivity = createAsyncThunk(
	"activities/deleteActivity",
	async id => {
		await axios.delete(`${process.env.REACT_APP_API_ACTIVITY}/${id}`);
		return id;
	}
);

/*
  USAGE:{
	import {useDispatch} from "react-redux"
	import {deleteActivity} from "./activitiesSlice"

	///...

	const dispatch = useDispatch();
	dispatch(deleteActivity(id))
	}
*/

// ! CREATE NEW ACTIVITY FUNCTIONALITY

export const createActivity = createAsyncThunk(
	"activities/reateActivity",
	async body => {
		const response = await axios.post(
			process.env.REACT_APP_API_ACTIVITY,
			body
		);
		return response.data.data;
	}
);

/* 
USAGE:{
	import {useDispatch} from "react-redux"
	import {createActivity} from "./activitiesSlice"

	///...

	const dispatch = useDispatch();
	dispatch(
		createActivity(
			{
				name: "name",
				description: "description",
				image:"base64 image",
			});
*/

// ! UPDATE ACTIVITY FUNCTIONALITY

export const updateActivity = createAsyncThunk(
	"activities/updateActivity",
	async ({ id, body }) => {
		const response = await axios.put(
			`${process.env.REACT_APP_API_ACTIVITY}/${id}`,
			body
		);
		return { id, changes: body };
	}
);

/* 
USAGE:{
	import {useDispatch} from "react-redux"
	import {updateActivity} from "./activitiesSlice"

	///...

	const dispatch = useDispatch();

	dispatch(
		updateActivity(
			{ 
				id: 305,
				body: {
					name: "new name",
					description: " new description",
					image:"new base64 image",
			}});
*/

// ! ADAPTER

const activitiesAdapter = createEntityAdapter({
	selectId: activity => activity.id,
});

// ! SLICE

const activitiesSlice = createSlice({
	name: "activities",
	initialState: activitiesAdapter.getInitialState({ loading: false }),
	reducers: {
		setAllActivities: activitiesAdapter.setAll,
	},
	extraReducers: {
		// fetchActivities
		[fetchActivities.pending](state) {
			state.loading = true;
		},
		[fetchActivities.fulfilled](state, { payload }) {
			state.loading = false;
			activitiesAdapter.setAll(state, payload);
		},
		[fetchActivities.rejected](state) {
			state.loading = false;
		},

		// deleteActivity
		[deleteActivity.pending](state) {
			state.loading = true;
		},
		[deleteActivity.fulfilled](state, { payload: id }) {
			state.loading = false;
			activitiesAdapter.removeOne(state, id);
		},
		[deleteActivity.rejected](state) {
			state.loading = false;
		},

		// createActivity
		[createActivity.pending](state) {
			state.loading = true;
		},
		[createActivity.fulfilled](state, { payload: newActivty }) {
			state.loading = false;
			activitiesAdapter.addOne(state, newActivty);
		},
		[createActivity.rejected](state) {
			state.loading = false;
		},

		// updateActivity
		[updateActivity.pending](state) {
			state.loading = true;
		},
		[updateActivity.fulfilled](state, { payload }) {
			state.loading = false;
			activitiesAdapter.updateOne(state, {
				id: payload.id,
				changes: payload.changes,
			});
		},
		[updateActivity.rejected](state) {
			state.loading = false;
		},
	},
});

// ! ACTIONS

export const { setAllActivities } = activitiesSlice.actions;

// ! SELECTORS

export const activitiesSelectors = activitiesAdapter.getSelectors(
	state => state.activities
);

/* 
OPTIONS: {
	selectIds,
	selectEntities,
	selectById,
	selectTotal,
	selectAll
}

USAGE EXAMPLE:{
	import {useSelector} from "react-redux"
	import {activitiesSelectors} from "./activitiesSlice"

	///...

	const allActivities = useSelector(activitiesSelectors.selectAll)
}  
*/

export default activitiesSlice.reducer;
