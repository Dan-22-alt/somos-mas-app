import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getOng , editOng } from "../../services/organizationService";

const name = 'organization'

const TYPES = {
  GETALL: name + '/getOrganization',
  EDITBYID: name + '/editOrganization'
}

const initialState = {
  data: [],
  status: 'idle',
  error: null
}

export const getOrganization = createAsyncThunk(
  TYPES.GETALL,
  async () => {
    const data = await getOng()
    return data[0]
  }
)

export const editByIDOrganization = createAsyncThunk(
  TYPES.EDITBYID,
  async (body) => {
    const { data } = await editOng(body)
    return data
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
      state.data = action.payload
    },
    [getOrganization.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [editByIDOrganization.pending]: state => {
      state.status = 'edit_loading'
    },
    [editByIDOrganization.fulfilled]: (state, action) => {
      state.status = 'edit_succeeded'
      state.data = action.payload
    },
    [editByIDOrganization.rejected]: (state, action) => {
      state.status = 'edit_failed'
      state.error = action.error.message
    }
  }
})

export default organizationSlice.reducer
