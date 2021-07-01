import {
    AGREGAR_NEWS,
    AGREGAR_NEWS_EXITO,
    AGREGAR_NEWS_ERROR,
    COMENZAR_DESCARGAS_NEWS,
    DESCARGAS_NEWS_EXITO,
    DESCARGAS_NEWS_ERROR
} from "../types"

import axios from "axios"

const clienteAxios = axios.create({
    baseURL: process.env.REACT_APP_API_NEWS,
});

// Crear news
export function crearNuevaNewsAction(news) {
    return  () => {
        console.log("desde actions")
    }
}


// Función que descarga lAS NOVEDADES de la base de datos
export function obtenerNovedadesAction() {
    return async (dispatch) => {
        dispatch( descargarNovedades() );
        try {
            const respuesta = await clienteAxios.get();
            dispatch( descargaNovedadesExitosa(respuesta.data.data) )
        } catch (error) {
            console.log(error);
            dispatch( descargaNovedadesError() )
        }
    }
}

const descargarNovedades = () => ({
    type: COMENZAR_DESCARGAS_NEWS,
    payload: true
});

const descargaNovedadesExitosa = novedades => ({
    type:  DESCARGAS_NEWS_EXITO,
    payload: novedades
})
const descargaNovedadesError= () => ({
    type: DESCARGAS_NEWS_ERROR, 
    payload: true
});
