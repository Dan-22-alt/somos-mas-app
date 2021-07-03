import {
    COMENZAR_DESCARGA_ACTIVIDADES,
    DESCARGA_ACTIVIDADES_EXITO,
    DESCARGA_ACTIVIDADES_ERROR,
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