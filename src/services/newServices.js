import {
  COMENZAR_DESCARGA_NEWS,
  COMENZAR_NEWS_ACTIVIDAD,
  COMENZAR_OBTENER_NEWSID,
  CREAR_NEWS,
  CREAR_NEWS_ERROR,
  CREAR_NEWS_EXITO,
  DESCARGA_NEWS_ERROR,
  DESCARGA_NEWS_EXITO,
  NEWS_EDITADO_ERROR,
  NEWS_EDITADO_EXITO,
  NEWS_ELIMINAR_ERROR,
  NEWS_ELIMINAR_EXITO,
  OBTENER_NEWSID_ERROR,
  OBTENER_NEWSID_EXITO,
  OBTENER_NEWS_EDITAR,
  OBTENER_NEWS_ELIMINAR,
} from '../types';
import httpClient from '../utils/httpClient';

// funcion para Crear News
export function crearNuevaNewsAction(news) {
  return async (dispatch) => {
    dispatch(crearNews());
    try {
      const respuesta = await httpClient('/news', {
        method: 'POST',
        data: {
          name: `${news.name}`,
          content: `${news.content}`,
          category_id: `${news.category_id}`,
          image: `${news.image}`,
        },
      });
      console.log(respuesta.data);
      console.log(respuesta.data.data);
      dispatch(crearNewsExitosa(respuesta.data.data));
    } catch (error) {
      console.log(error);
      dispatch(crearNewsError());
    }
  };
}

const crearNews = () => ({
  type: CREAR_NEWS,
  payload: true,
});

const crearNewsExitosa = (news) => ({
  type: CREAR_NEWS_EXITO,
  payload: news,
});
const crearNewsError = () => ({
  type: CREAR_NEWS_ERROR,
  payload: true,
});

//___________ Función que descarga lAS NOVEDADES de la base de datos
export function obtenerNovedadesAction() {
  return async (dispatch) => {
    dispatch(descargarNovedades());
    try {
      const respuesta = await httpClient.get('/news');
      console.log(respuesta.data.data);
      dispatch(descargaNovedadesExitosa(respuesta.data.data));
    } catch (error) {
      console.log(error);
      dispatch(descargaNovedadesError());
    }
  };
}

const descargarNovedades = () => ({
  type: COMENZAR_DESCARGA_NEWS,
  payload: true,
});

const descargaNovedadesExitosa = (novedades) => ({
  type: DESCARGA_NEWS_EXITO,
  payload: novedades,
});
const descargaNovedadesError = () => ({
  type: DESCARGA_NEWS_ERROR,
  payload: true,
});

//___________ Función para Editar las Novedades____________________

// Colocar Novedad en edición
export function obtenerNewEditar(news) {
  return (dispatch) => {
    dispatch(obtenerNewEditarAction(news));
  };
}

const obtenerNewEditarAction = (news) => ({
  type: OBTENER_NEWS_EDITAR,
  payload: news,
});

// Edita un registro en la api y state
export function editarNewsAction(news) {
  return async (dispatch) => {
    dispatch(editarNews());

    try {
      await httpClient.put(`/news/${news.id}`, news);
      dispatch(editarNewsExito(news));
    } catch (error) {
      console.log(error);
      dispatch(editarNewsError());
    }
  };
}
const editarNews = () => ({
  type: COMENZAR_NEWS_ACTIVIDAD,
});

const editarNewsExito = (news) => ({
  type: NEWS_EDITADO_EXITO,
  payload: news,
});

const editarNewsError = () => ({
  type: NEWS_EDITADO_ERROR,
  payload: true,
});

//________________ELIMINAR Novedad______________

// Selecciona y elimina la Novedad
export function borrarNewsAction(id) {
  return async (dispatch) => {
    dispatch(obtenerNewsEliminar(id));

    try {
      await httpClient.delete(`/news/${id}`);
      dispatch(eliminarNewsExito());
    } catch (error) {
      console.log(error);
      dispatch(eliminarNewsError());
    }
  };
}

const obtenerNewsEliminar = (id) => ({
  type: OBTENER_NEWS_ELIMINAR,
  payload: id,
});
const eliminarNewsExito = () => ({
  type: NEWS_ELIMINAR_EXITO,
});
const eliminarNewsError = () => ({
  type: NEWS_ELIMINAR_ERROR,
  payload: true,
});

//___________ Función para Obtener Novedades x ID____________________

export function obtenerNewsID(news) {
  return async (dispatch) => {
    dispatch(mostrarNewsId());

    try {
      const respuesta = await httpClient.get(`/news/${news.id}`, news);
      dispatch(mostrarNewsIdExitosa(respuesta.data.data));
    } catch (error) {
      console.log(error);
      dispatch(mostrarNewsIdError());
    }
  };
}

const mostrarNewsId = () => ({
  type: COMENZAR_OBTENER_NEWSID,
  payload: true,
});

const mostrarNewsIdExitosa = (news) => ({
  type: OBTENER_NEWSID_EXITO,
  payload: news,
});

const mostrarNewsIdError = () => ({
  type: OBTENER_NEWSID_ERROR,
  payload: true,
});
