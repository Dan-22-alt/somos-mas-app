import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

//ASYNCTHUNKS

//OBTENER LISTA DE CATEGORIAS

export const listCategories = createAsyncThunk('categories/listCategories', async () => {
  const response = await axios.get(process.env.REACT_APP_API_CATEGORY);
  const data = await response.data.data;
  return data;
});

//CREAR CATEGORIA

export const createCategory = createAsyncThunk('categories/createCategory', async (body) => {
  const response = await axios.post(process.env.REACT_APP_API_ACTIVITY, body);
  return response.data.data;
});

//BORRAR CATEGORIA

export const deleteCategory = createAsyncThunk('categories/deleteCategory', async (id) => {
  await axios.delete(`${process.env.REACT_APP_API_ACTIVITY}/${id}`);
  return id;
});

//ACTUALIZAR CATEGORIA

export const updateCategory = createAsyncThunk('categories/updateCategory', async ({ id, body }) => {
  await axios.put(`${process.env.REACT_APP_API_ACTIVITY}/${id}`, body);
  return { id, changes: body };
});

//REDUCERS

const initialState = {
  data: [],
  status: 'idle',
  error: null,
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    errorCate(state, action) {
      state.error = action.error.message;
      state.status = 'error';
    },
  },
  extraReducers: {
    //LISTA (se le debe pasar el array de objetos)

    [listCategories.pending]: (state, action) => {
      state.status = 'loading';
    },

    [listCategories.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload;
    },

    [listCategories.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },

    //CREAR (se le debe pasar el objeto CATEGORIA)

    [createCategory.pending]: (state, action) => {
      state.status = 'loading';
    },

    [createCategory.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.data.push(action.payload);
    },

    [createCategory.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },

    //BORRAR (se le debe pasar el ID de la categoria)

    [deleteCategory.pending]: (state, action) => {
      state.status = 'loading';
    },
    [deleteCategory.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.data = state.data.filter((cate) => cate.id !== action.payload);
    },

    [deleteCategory.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },

    //ACTUALIZAR (se le debe pasar el objeto categoria con un ID existente)

    [updateCategory.pending]: (state, action) => {
      state.status = 'loading';
    },

    [updateCategory.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.data = state.data.map((cate) => {
        if (cate.id === action.payload.id) {
          return {
            ...cate,
            name: action.payload.name,
            description: action.payload.description,
          };
        } else {
          return cate;
        }
      });
    },

    [updateCategory.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const { errorCate } = categorySlice.actions;

export default categorySlice.reducer;
