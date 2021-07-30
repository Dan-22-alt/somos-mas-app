import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import httpClient from '../utils/httpClient';

const initialState = {
  slides: [],
  status: 'idle',
  error: null,
};

//Funcion para obtener las News => dispatch(ObtenerNovedades());
export const listSlides = createAsyncThunk('slides/listSlides', async (arg, { getState }) => {
  // <-- destructure getState method
  const respuesta = await httpClient.get('/slides');
  return respuesta.data.data.reverse();
});

//Funcion para obtener las News => dispatch(agregarNews(payload));
export const newSlide = createAsyncThunk('slides/newSlide', async (slide, { getState }) => {
  // <-- destructure getState method
  const respuesta = await httpClient('/slides', {
    method: 'POST',
    data: {
      name: `${slide.name}`,
      description: `${slide.description}`,
      id: `${slide.id}`,
      order: `${slide.order}`,
      image: `${slide.image}`,
    },
  });
  return respuesta.data.data;
});

//Funcion para obtener las News => dispatch(actualizarNews(news));
export const updateSlide = createAsyncThunk('slides/updateSlide', async (slides, { getState }) => {
  // <-- destructure getState method
  const respuesta = await httpClient.put(`/slides/${slides.id}`, slides);
  // console.log(respuesta.data.data)
  return respuesta.data.data;
});

//Funcion para obtener las News => dispatch(borrarNewsAction(news));
export const deleteSlide = createAsyncThunk('slides/deleteSlide', async (id) => {
  // <-- destructure getState metho
  await httpClient.delete(`/slides/${id}`);
  //await httpClient.delete(`/news/${news.id}`);
  // console.log(respuesta)
  return id;
});

//Funcion para obtener las News => dispatch(ObtenerNovedadesId(news));
export const slideId = createAsyncThunk('slides/slideId', async (slides, { getState }) => {
  // <-- destructure getState method
  const respuesta = await httpClient.get(`/slides/${slides.id}`, slides);
  // console.log(respuesta)
  return respuesta.data.data;
});

const slidesSlice = createSlice({
  name: 'slides',
  initialState,
  reducers: {
    defaultOk: (state, action) => {
      state.status = 'Ok'
    },
    slideEliminar: (state, action) => {
      state.newseliminar = action.payload;
    },
    slideError: (state, action) => {
      state.error = action.error.message;
      state.state = 'error';
    },
  },
  extraReducers: {
    [listSlides.pending]: (state, action) => {
      state.status = 'loading';
    },
    [listSlides.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      // Add any fetched posts to the array
      state.slides = action.payload;
    },
    [listSlides.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [newSlide.pending]: (state, action) => {
      state.status = 'loading';
    },
    [newSlide.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.slides = [action.payload, ...state.slides];
    },
    [newSlide.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [updateSlide.pending]: (state, action) => {
      state.status = 'loading';
    },
    [updateSlide.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.slides = state.slides.map((slide) => {
        if (slide.id === action.payload.id) {
          return {
            ...slide,
            name: action.payload.name,
            description: action.payload.description,
            order: action.payload.order,
            image: action.payload.image,
          };
        } else {
          return slide;
        }
      });
    },
    [updateSlide.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [deleteSlide.pending]: (state, action) => {
      state.status = 'loading';
    },
    [deleteSlide.fulfilled]: (state, action) => {
      state.status = 'succeeded-delete';
      const id = action.payload;
      state.slides = state.slides.filter((slide) => slide.id !== id);
    },
    [deleteSlide.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [slideId.pending]: (state, action) => {
      state.status = 'loading';
    },
    [slideId.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.slides = [action.payload];
    },
    [slideId.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const { slideError, slideEliminar, defaultOk } = slidesSlice.actions;

export default slidesSlice.reducer;