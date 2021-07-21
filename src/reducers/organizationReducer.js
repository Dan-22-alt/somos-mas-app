import {  createSlice,  createAsyncThunk, } from '@reduxjs/toolkit'
import httpClient from "../utils/httpClient";

const initialState = {
    data: [],
    status: 'idle',
    error: null,
};

export function datosOrganización() {
	return httpClient.get("/organization").then(response => response.data);
}

export function EditarDatos(data) {
	return httpClient.post("/organization", data).then(response => response.data);
}

const organizationSlice = createSlice({
    name: 'organization',
    initialState,
    reducers: {
     
    },
    extraReducers: {
      [datosOrganización.pending]: (state, action) => {
        state.status = 'loading'
      },
      [datosOrganización.fulfilled]: (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        state.data = action.payload
      },
      [datosOrganización.rejected]: (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      },
    },
  })
  
  
  export default organizationSlice.reducer