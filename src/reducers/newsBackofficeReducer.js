import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import httpClient from '../utils/httpClient';

const initialState = {
  news: [],
  status: 'idle',
  error: null,
};

//Funcion para obtener las News => dispatch(ObtenerNovedades());
export const ObtenerNovedades = createAsyncThunk('news/ObtenerNovedades', async (arg, { getState }) => {
  // <-- destructure getState method
  const respuesta = await httpClient.get('/news');
  return respuesta.data.data.reverse();
});

//Funcion para obtener las News => dispatch(agregarNews(payload));
export const agregarNews = createAsyncThunk('posts/agregarNews', async (news, { getState }) => {
  // <-- destructure getState method
  const respuesta = await httpClient('/news', {
    method: 'POST',
    data: {
      name: `${news.name}`,
      content: `${news.content}`,
      category_id: `${news.category_id}`,
      image: `${news.image}`,
    },
  });
  return respuesta.data.data;
});

//Funcion para obtener las News => dispatch(actualizarNews(news));
export const actualizarNews = createAsyncThunk('posts/actualizarNews', async (news, { getState }) => {
  // <-- destructure getState method
  const respuesta = await httpClient.put(`/news/${news.id}`, news);
  // console.log(respuesta.data.data)
  return respuesta.data.data;
});

//Funcion para obtener las News => dispatch(borrarNewsAction(news));
export const borrarNewsAction = createAsyncThunk('posts/borrarNews', async (news) => {
  // <-- destructure getState metho
  await httpClient.delete(`/news/${news.id}`);
  // console.log(respuesta)
  return news.id;
});

//Funcion para obtener las News => dispatch(ObtenerNovedadesId(news));
export const ObtenerNovedadesId = createAsyncThunk('news/ObtenerNovedadesId', async (news, { getState }) => {
  // <-- destructure getState method
  const respuesta = await httpClient.get(`/news/${news.id}`, news);
  // console.log(respuesta)
  return respuesta.data.data;
});

const novedadesSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    newEliminar: (state, action) => {
      state.newseliminar = action.payload;
    },
    newError: (state, action) => {
      state.error = action.error.message;
      state.state = 'error';
    },
  },
  extraReducers: {
    [ObtenerNovedades.pending]: (state, action) => {
      state.status = 'loading';
    },
    [ObtenerNovedades.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      // Add any fetched posts to the array
      state.news = action.payload;
    },
    [ObtenerNovedades.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [agregarNews.pending]: (state, action) => {
      state.status = 'loading';
    },
    [agregarNews.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.news = [action.payload, ...state.news];
    },
    [agregarNews.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [actualizarNews.pending]: (state, action) => {
      state.status = 'loading';
    },
    [actualizarNews.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.news = state.news.map((novedad) =>
        novedad.id === action.payload.id ? (novedad = action.payload) : novedad
      );
    },
    [actualizarNews.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [borrarNewsAction.pending]: (state, action) => {
      state.status = 'loading';
    },
    [borrarNewsAction.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      const id = action.payload;
      state.news = state.news.filter((novedad) => novedad.id !== id);
    },
    [borrarNewsAction.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [ObtenerNovedadesId.pending]: (state, action) => {
      state.status = 'loading';
    },
    [ObtenerNovedadesId.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.news = [action.payload];
    },
    [ObtenerNovedadesId.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const { newError, newEliminar } = novedadesSlice.actions;

export default novedadesSlice.reducer;
