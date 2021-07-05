import {
    COMENZAR_DESCARGA_ACTIVIDADES,
    DESCARGA_ACTIVIDADES_EXITO,
    DESCARGA_ACTIVIDADES_ERROR,
    AGREGAR_ACTIVIDAD,
    AGREGAR_ACTIVIDAD_EXITO,
    AGREGAR_ACTIVIDAD_ERROR,
    OBTENER_ACTIVIDAD_ELIMINAR,
    ACTIVIDAD_ELIMINAR_EXITO,
    ACTIVIDAD_ELIMINAR_ERROR

} from '../types';

import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: process.env.REACT_APP_API_ACTIVITY,
});

// Función que descarga las Actividades de la base de datos
export function obtenerActividadesAction() {
    return async (dispatch) => {
        dispatch( descargarActividades() );

        try {
            const respuesta = await clienteAxios.get();
            console.log(respuesta.data.data)
            dispatch( descargaActividadesExitosa(respuesta.data.data) )
            
        } catch (error) {
            console.log(error);
            dispatch( descargaActividadesError() )
        }
    }
}

const descargarActividades = () => ({
    type: COMENZAR_DESCARGA_ACTIVIDADES,
    payload: true
});

const descargaActividadesExitosa = actividades => ({
    type: DESCARGA_ACTIVIDADES_EXITO,
    payload: actividades
})
const descargaActividadesError = () => ({
    type: DESCARGA_ACTIVIDADES_ERROR, 
    payload: true
});


// Crear nuevas Actividades
export function crearNuevaActividadAction(actividad) {
    console.log(actividad)
    return async (dispatch) => {
        dispatch( agregarActividad() );

        try {
            const respuesta = await clienteAxios({
                method: 'POST',
                data : { 
                    name :`${actividad.name}`,
                    description: `${actividad.description}`,
                    image: `${actividad.image }`,
                } ,
            })
            console.log(respuesta)
            dispatch( agregarActividadExito(respuesta.data.data) )
        } catch (error) {
            dispatch( agregarActividadError() )
        }
    }
}

const agregarActividad = () => ({
    type: AGREGAR_ACTIVIDAD,
    payload: true
});

// si la actividad se guarda en la base de datos
const agregarActividadExito = producto => ({
    type: AGREGAR_ACTIVIDAD_EXITO,
    payload: producto
})

// si hubo un error
const agregarActividadError = estado => ({
    type: AGREGAR_ACTIVIDAD_ERROR,
    payload: estado
});


//_________________Actualizar actividades___________

//________________ELIMINAR ACTIVIDADES______________
// Selecciona y elimina la Actividad
export function borrarActividadAction(id) {
    return async (dispatch) => {
        dispatch(obtenerActividadEliminar(id) );

        try {
            await clienteAxios.delete(`/${id}`);
            dispatch( eliminarActividadExito() );

        } catch (error) {
            console.log(error);
            dispatch( eliminarActividadError() );
        }
    }
}

const obtenerActividadEliminar = id => ({
    type: OBTENER_ACTIVIDAD_ELIMINAR,
    payload: id
});
const eliminarActividadExito = () => ({
    type: ACTIVIDAD_ELIMINAR_EXITO
})
const eliminarActividadError = () => ({
    type: ACTIVIDAD_ELIMINAR_ERROR,
    payload: true
});