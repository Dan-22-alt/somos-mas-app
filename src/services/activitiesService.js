import axios from 'axios';
import {
  ACTIVIDAD_EDITADO_ERROR,
  ACTIVIDAD_EDITADO_EXITO,
  ACTIVIDAD_ELIMINAR_ERROR,
  ACTIVIDAD_ELIMINAR_EXITO,
  AGREGAR_ACTIVIDAD,
  AGREGAR_ACTIVIDAD_ERROR,
  AGREGAR_ACTIVIDAD_EXITO,
  COMENZAR_DESCARGA_ACTIVIDADES,
  COMENZAR_DESCARGA_ACTIVIDADID,
  COMENZAR_EDICION_ACTIVIDAD,
  DESCARGA_ACTIVIDADES_ERROR,
  DESCARGA_ACTIVIDADES_EXITO,
  DESCARGA_ACTIVIDADID_ERROR,
  DESCARGA_ACTIVIDADID_EXITO,
  OBTENER_ACTIVIDAD_EDITAR,
  OBTENER_ACTIVIDAD_ELIMINAR,
} from '../types';

const clienteAxios = axios.create({
  baseURL: process.env.REACT_APP_API_ACTIVITY,
});

// Función que descarga las Actividades de la base de datos
export function obtenerActividadesAction() {
  return async (dispatch) => {
    dispatch(descargarActividades());

    try {
      const respuesta = await clienteAxios.get();
      console.log(respuesta.data.data);
      dispatch(descargaActividadesExitosa(respuesta.data.data));
    } catch (error) {
      console.log(error);
      dispatch(descargaActividadesError());
    }
  };
}

const descargarActividades = () => ({
  type: COMENZAR_DESCARGA_ACTIVIDADES,
  payload: true,
});

const descargaActividadesExitosa = (actividades) => ({
  type: DESCARGA_ACTIVIDADES_EXITO,
  payload: actividades,
});
const descargaActividadesError = () => ({
  type: DESCARGA_ACTIVIDADES_ERROR,
  payload: true,
});

// Crear nuevas Actividades
export function crearNuevaActividadAction(actividad) {
  console.log(actividad);
  return async (dispatch) => {
    dispatch(agregarActividad());

    try {
      const respuesta = await clienteAxios({
        method: 'POST',
        data: {
          name: `${actividad.name}`,
          description: `${actividad.description}`,
          image: `${actividad.image}`,
        },
      });
      console.log(respuesta);
      dispatch(agregarActividadExito(respuesta.data.data));
    } catch (error) {
      dispatch(agregarActividadError());
    }
  };
}

const agregarActividad = () => ({
  type: AGREGAR_ACTIVIDAD,
  payload: true,
});

// si la actividad se guarda en la base de datos
const agregarActividadExito = (producto) => ({
  type: AGREGAR_ACTIVIDAD_EXITO,
  payload: producto,
});

// si hubo un error
const agregarActividadError = (estado) => ({
  type: AGREGAR_ACTIVIDAD_ERROR,
  payload: estado,
});

//_________________Mostrar actividad por ID___________

export function obtenerActividadID(actividad) {
  return async (dispatch) => {
    dispatch(mostrarActividadId());

    try {
      const respuesta = await clienteAxios.get(`/${actividad.id}`, actividad);
      dispatch(mostrarActividadIdExitosa(respuesta.data.data));
    } catch (error) {
      console.log(error);
      dispatch(mostrarActividadIdError());
    }
  };
}

const mostrarActividadId = () => ({
  type: COMENZAR_DESCARGA_ACTIVIDADID,
  payload: true,
});

const mostrarActividadIdExitosa = (actividad) => ({
  type: DESCARGA_ACTIVIDADID_EXITO,
  payload: actividad,
});
const mostrarActividadIdError = () => ({
  type: DESCARGA_ACTIVIDADID_ERROR,
  payload: true,
});

//_________________Actualizar actividades___________

// Colocar actividad en edición
export function obtenerActividadEditar(actividad) {
  return (dispatch) => {
    dispatch(obtenerActividadEditarAction(actividad));
  };
}

const obtenerActividadEditarAction = (actividad) => ({
  type: OBTENER_ACTIVIDAD_EDITAR,
  payload: actividad,
});

// Edita un registro en la api y state
export function editarActividadAction(actividad) {
  return async (dispatch) => {
    dispatch(editarActividad());

    try {
      await clienteAxios.put(`/${actividad.id}`, actividad);
      dispatch(editarActividadExito(actividad));
    } catch (error) {
      console.log(error);
      dispatch(editarActividadError());
    }
  };
}
const editarActividad = () => ({
  type: COMENZAR_EDICION_ACTIVIDAD,
});

const editarActividadExito = (actividad) => ({
  type: ACTIVIDAD_EDITADO_EXITO,
  payload: actividad,
});

const editarActividadError = () => ({
  type: ACTIVIDAD_EDITADO_ERROR,
  payload: true,
});

//________________ELIMINAR ACTIVIDADES______________
// Selecciona y elimina la Actividad
export function borrarActividadAction(id) {
  return async (dispatch) => {
    dispatch(obtenerActividadEliminar(id));

    try {
      await clienteAxios.delete(`/${id}`);
      dispatch(eliminarActividadExito());
    } catch (error) {
      console.log(error);
      dispatch(eliminarActividadError());
    }
  };
}

const obtenerActividadEliminar = (id) => ({
  type: OBTENER_ACTIVIDAD_ELIMINAR,
  payload: id,
});
const eliminarActividadExito = () => ({
  type: ACTIVIDAD_ELIMINAR_EXITO,
});
const eliminarActividadError = () => ({
  type: ACTIVIDAD_ELIMINAR_ERROR,
  payload: true,
});
