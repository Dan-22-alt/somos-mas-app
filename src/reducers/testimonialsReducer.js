import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import { getTestimonials, deleteTestimonials, createTestimonials } from '../services/testimonialsService';

const name = 'testimonials';

const TYPES = {
  GETALL: name + '/getTestimonials',
  CREATE: name + '/createTestimonial',
  EDITBYID: name + '/editTestimonial',
  DELETE: name + '/deleteTestimonial'
}

const testimonialsAdapter = createEntityAdapter({
  selectId: testimonial => testimonial.id,
});

export const fetchTestimonials = createAsyncThunk(
  TYPES.GETALL , async () =>
  await getTestimonials()
)

export const deleteTestimonialByID = createAsyncThunk(
  TYPES.DELETE, async (id) => {
  await deleteTestimonials(id)
  return id
});


export const createTestimonial = createAsyncThunk(
  TYPES.CREATE, async (data) =>
  await createTestimonials(data)
);



const testimonialsSlice = createSlice({
  name,
  initialState :testimonialsAdapter.getInitialState({
    status: 'idle',
    error: null,
  }),
  reducers: {
    setAllTestimonials: testimonialsAdapter.setAll,
    defaultOk: (state, action) => {
      state.status = 'Ok';
    },
  },
  extraReducers: {
    [fetchTestimonials.pending]: state => {
      state.status = 'loading'
    },
    [fetchTestimonials.fulfilled]: (state, { payload }) => {
      state.status = 'succeeded'
      testimonialsAdapter.setAll(state, payload);
    },
    [fetchTestimonials.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [deleteTestimonialByID.pending]: state => {
      state.status = 'loading-delete'
    },
    [deleteTestimonialByID.fulfilled]: (state, {payload: id}) => {
      testimonialsAdapter.removeOne(state, id)
      state.status = 'succeeded-delete'
    },
    [deleteTestimonialByID.rejected]: state => {
      state.status = 'failed-delete'
    },
    [createTestimonial.pending]: state => {
      state.status = 'loading'
    },
    [createTestimonial.fulfilled]: (state, { payload }) => {
      testimonialsAdapter.addOne(state, payload)
      state.status = 'succeeded-created'
    },
    [createTestimonial.rejected]: state => {
      state.status = 'failed-created'
    },
  },
});

export const { setAllTestimonials, defaultOk } = testimonialsSlice.actions;
export const testimonialSelectors = testimonialsAdapter.getSelectors((state) => state.testimonials);

export default testimonialsSlice.reducer;
