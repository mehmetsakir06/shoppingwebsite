import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
    product: []
}

export const getProducts = createAsyncThunk('product', async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = response.json();
    return data;
})

const productListSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.product = action.payload;
    }) }})

export default productListSlice.reducer 