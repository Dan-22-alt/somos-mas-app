import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getOrganization } from '../services/organizationService';

const initialState = {
  data: {},
  status: 'idle',
  error: null,
};

export const fetchOrganization = createAsyncThunk('activities/fetchOrganization', async () => {
  const response = await getOrganization();

  return response;
});

const organizationSlice = createSlice({
  name: 'organization',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOrganization.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchOrganization.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      // Add any fetched posts to the array
      state.data = action.payload;
    },
    [fetchOrganization.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default organizationSlice.reducer;
