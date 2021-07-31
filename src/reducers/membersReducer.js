import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import httpClient from '../utils/httpClient';

const initialState = {
  members: [],
  status: 'idle',
  error: null,
};

//Funcion para obtener las News => dispatch(ObtenerNovedades());
export const listMembers = createAsyncThunk('members/listMembers', async (arg, { getState }) => {
  // <-- destructure getState method
  const respuesta = await httpClient.get('/members');
  return respuesta.data.data.reverse();
});

//Funcion para obtener las News => dispatch(agregarNews(payload));
export const newMember = createAsyncThunk('members/newMember', async (member, { getState }) => {
  // <-- destructure getState method
  const respuesta = await httpClient('/members', {
    method: 'POST',
    data: {
      name: `${member.name}`,
      description: `${member.description}`,
      id: `${member.id}`,
      image: `${member.image}`,
    },
  });
  return respuesta.data.data;
});

//Funcion para obtener las News => dispatch(actualizarNews(news));
export const updateMember = createAsyncThunk('members/updateMember', async (members, { getState }) => {
  // <-- destructure getState method
  console.log(members.id)
  const respuesta = await httpClient.put(`/members/${members.id}`, members);
  // console.log(respuesta.data.data)
  return respuesta.data.data;
});

//Funcion para obtener las News => dispatch(borrarNewsAction(news));
export const deleteMember = createAsyncThunk('members/deleteMember', async (id) => {
  // <-- destructure getState metho
  await httpClient.delete(`/members/${id}`);
  //await httpClient.delete(`/news/${news.id}`);
  return id;
});

//Funcion para obtener las News => dispatch(ObtenerNovedadesId(news));
export const memberId = createAsyncThunk('members/memberId', async (members, { getState }) => {
  // <-- destructure getState method
  const respuesta = await httpClient.get(`/members/${members.id}`, members);
  // console.log(respuesta)
  return respuesta.data.data;
});

const memberSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {
    defaultOk: (state, action) => {
      state.status = 'Ok'
    },
    memberEliminar: (state, action) => {
      state.membereliminar = action.payload;
    },
    memberError: (state, action) => {
      state.error = action.error.message;
      state.state = 'error';
    },
  },
  extraReducers: {
    [listMembers.pending]: (state, action) => {
      state.status = 'loading';
    },
    [listMembers.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      // Add any fetched posts to the array
      state.members = action.payload;
    },
    [listMembers.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [newMember.pending]: (state, action) => {
      state.status = 'loading';
    },
    [newMember.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.members = [action.payload, ...state.members];
    },
    [newMember.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [updateMember.pending]: (state, action) => {
      state.status = 'loading';
    },
    [updateMember.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.members = state.members.map((member) => {
        if (member.id === action.payload.id) {
          return {
            ...member,
            name: action.payload.name,
            image: action.payload.image,
            description: action.payload.description,
          };
        } else {
          return member;
        }
      });
    },
    [updateMember.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [deleteMember.pending]: (state, action) => {
      state.status = 'loading';
    },
    [deleteMember.fulfilled]: (state, action) => {
      state.status = 'succeeded-delete';
      const id = action.payload;
      state.members = state.members.filter((member) => member.id !== id);
    },
    [deleteMember.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [memberId.pending]: (state, action) => {
      state.status = 'loading';
    },
    [memberId.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.members = [action.payload];
    },
    [memberId.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const { memberError, memberEliminar, defaultOk } = memberSlice.actions;

export default memberSlice.reducer;