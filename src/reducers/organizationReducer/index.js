import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getData } from "../../services/organizationService";

const name = 'organization'

const initialState = {
  data: [],
  status: 'idle',
  error: null
}

/*

export function datosOrganización() {
	return httpClient.get("/organization").then(response => response.data);
}

export function EditarDatos(data) {
	return httpClient.post("/organization", data).then(response => response.data);
}

*/

export const getOrganization = createAsyncThunk(
  name + '/getOrganization',
  async () => {
    const data = await getData()
    return data[0]
  }
)

const organizationSlice = createSlice({
  name,
  initialState,
  reducer: {},
  extraReducers: {
    [getOrganization.pending]: state => {
      state.status = 'loading'
    },
    [getOrganization.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.data = action.payload
    },
    [getOrganization.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  }
})

export default organizationSlice.reducer
