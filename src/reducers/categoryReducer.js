import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
    data: []
}

const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers:{
        listCate(state, action){
            state.data = action.payload
        },
        addCate(state, action){
            state.data.push(action.payload)
        },
        delCate(state, action){
            state.data = state.data.filter((cate) => cate.id !== action.payload)
        },
        updateCate(state, action){
            console.log('edit')
            console.log(action.payload)
            state.data = state.data.map((cate) => {
                if(cate.id === action.payload.id){
                    return{
                        ...cate,
                        name: action.payload.name,
                        description: action.payload.description
                    }
                }
                else{
                    return cate
                }
            })
        }
    }
})

export const { listCate, addCate, delCate, updateCate } = categorySlice.actions

export default categorySlice.reducer

export const fetchCategories = createAsyncThunk('category/fetchCategories', async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_CATEGORY}`)
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
})
