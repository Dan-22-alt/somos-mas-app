import {
    COMENZAR_DESCARGAS_ACTIVITY,
    DESCARGAS_ACTIVITY_EXITO,
    DESCARGAS_ACTIVITY_ERROR
} from "../types"

import axios from "axios"

const clienteAxios = axios.create({
    baseURL: process.env.REACT_APP_API_ACTIVITY,
});


// Función que descarga lAS Actividades de la base de datos
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
    type: COMENZAR_DESCARGAS_ACTIVITY,
    payload: true
});

const descargaActividadesExitosa = actividades => ({
    type: DESCARGAS_ACTIVITY_EXITO,
    payload: actividades
})
const descargaActividadesError= () => ({
    type: DESCARGAS_ACTIVITY_ERROR, 
    payload: true
});