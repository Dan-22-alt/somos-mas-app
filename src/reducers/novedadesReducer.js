import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'


const newsState = {
    data: [],
    status: 'idle',
    error: null,
    newsEliminar: null,
    newsEditar: null
};