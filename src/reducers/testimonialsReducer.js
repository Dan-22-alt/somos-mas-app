import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTestimonials2 } from '../services/testimonialsService';

const name = 'testimonials';

const TYPES = {
  GETALL: name + '/getTestimonials',
  EDIT: name + '/createTestimonial',
  EDITBYID: name + '/editTestimonial',
  DELETE: name + 'deleteTestimonial'
}

const initialState = {
  data: [],
  status: 'idle',
  error: null,
};


export const fetchTestimonials = createAsyncThunk(
  TYPES.GETALL , async () => {
  const response = await getTestimonials2();
  console.log(response)
  return response;
});

const testimonialsSlice = createSlice({
  name,
  initialState,
  reducer: {},
  extraReducers: {
    [fetchTestimonials.pending]: state => {
      state.status = 'loading'
    },
    [fetchTestimonials.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      console.log(action.payload)
      state.data = action.payload
    },
    [fetchTestimonials.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  },
});

export default testimonialsSlice.reducer;
