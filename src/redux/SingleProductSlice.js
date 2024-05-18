import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    singleProduct: []
}

export const getSingleProduct = createAsyncThunk('getsingle', async (singleProduct) => {
    const response = await fetch(`https://fakestoreapi.com/products/${singleProduct}`)
    const data = response.json();
    return data;

})

const singleProductSlice = createSlice({
    name: 'singleProduct',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getSingleProduct.fulfilled, (state, action) => {

            state.singleProduct = [action.payload];
        })
    }
})

export default singleProductSlice.reducer;