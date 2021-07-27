import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { editOng, getOrganization } from '../../services/organizationService';

const name = 'organization';

const TYPES = {
  GETALL: name + '/getOrganization',
  EDITBYID: name + '/editOrganization',
};

const initialState = {
  data: {},
  status: 'idle',
  error: null,
};

export const fetchOrganization = createAsyncThunk('activities/fetchOrganization', async () => {
  const response = await getOrganization();
  return response;
});

export const editByIDOrganization = createAsyncThunk(TYPES.EDITBYID, async (body) => {
  const { data } = await editOng(body);
  return data;
});

const organizationSlice = createSlice({
  name,
  initialState,
  reducer: {},
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

    [editByIDOrganization.pending]: (state) => {
      state.status = 'edit_loading';
    },
    [editByIDOrganization.fulfilled]: (state, action) => {
      state.status = 'edit_succeeded';
      state.data = action.payload;
    },
    [editByIDOrganization.rejected]: (state, action) => {
      state.status = 'edit_failed';
      state.error = action.error.message;
    },
  },
});

export default organizationSlice.reducer;
