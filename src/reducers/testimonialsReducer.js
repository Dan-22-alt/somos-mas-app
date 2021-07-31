import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTestimonials, deleteTestimonials } from '../services/testimonialsService';

const name = 'testimonials';

const TYPES = {
  GETALL: name + '/getTestimonials',
  EDIT: name + '/createTestimonial',
  EDITBYID: name + '/editTestimonial',
  DELETE: name + '/deleteTestimonial'
}

const initialState = {
  data: [],
  status: 'idle',
  error: null,
};

export const fetchTestimonials = createAsyncThunk(
  TYPES.GETALL , async () =>
  await getTestimonials()
)

export const deleteTestimonialByID = createAsyncThunk(
  TYPES.DELETE, async (id) => {
  const response = await deleteTestimonials(id)
  console.log(response)
  return 'hola'//response;
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
      state.data = action.payload
    },
    [fetchTestimonials.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [deleteTestimonialByID.pending]: state => {
      state.status = 'loading-delete'
    },
    [deleteTestimonialByID.fulfilled]: (state, action) => {
      state.status = 'succeeded-delete'
    },
    [deleteTestimonialByID.rejected]: state => {
      state.status = 'failed-delete'
    },
  },
});

export default testimonialsSlice.reducer;
