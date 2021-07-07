import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ApiService } from '../services/ApiService';

const newsState = {
    data: [],
    status: 'idle',
    error: null,
};


const newsSlice = createSlice({
    name: "newsBackoffice",
    initialState: newsState,
    reducers: {
        newAdded: {
            reducer(state, action) {
                state.data.push(action.payload)
            }
        },
        reactionAdded(state, action) {
            const { newId, reaction } = action.payload
            const existingNew = state.data.find(newBackoffice => newBackoffice.id === newId)
            if (existingNew) {
                existingNew.reactions[reaction]++
            }
        },
        newUpdated(state, action) {
            const { id, name, content } = action.payload
            const existingNew = state.data.find(newBackoffice => newBackoffice.id === id)
            if (existingNew) {
                existingNew.name = name
                existingNew.content = content
            }
        },
        deleteNew(state, action) {
            const { id } = action.payload
            console.log(state, id)
        },

    }
})

export const { newAdded, newUpdated, reactionAdded, deleteNew } = newsSlice.actions

export const selectNews = state => state.news.data

export default newsSlice.reducer

export const selectNewById = (state, newId) =>
    state.newsBackoffice.newsBackoffice.find(newBackoffice => newBackoffice.id === newId)

export const fetchNewsBackoffice = createAsyncThunk('news/fetchNewsBackoffice', async () => {
    const response = await ApiService.get('/news')
    console.log(response.data)
    return response.data
})
