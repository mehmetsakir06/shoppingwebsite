import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    categoryScreen: [],
}

export const getCategoryScreen = createAsyncThunk('getshow', async (category) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    const data = response.json();
    return data;
})

const categoryScreenSlice = createSlice({
    name: 'categoryScreen',
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder.addCase(getCategoryScreen.fulfilled, (state, action) => {
            state.categoryScreen = action.payload;
        })}})

export default categoryScreenSlice.reducer;