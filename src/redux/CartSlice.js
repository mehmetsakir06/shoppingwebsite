import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
    totalCount: 0,
    cartSendId: ''
}

export const addCart = createAsyncThunk('addcart', async (cartId) => {
    const response = await fetch(`https://fakestoreapi.com/products/${cartId}`)
    const data = response.json();
    return data;

})

const cartSlice = createSlice({
    name: 'singleProduct',
    initialState,
    reducers: {
        deleteProduct: (state, action) => {
            const index = state.cart.findIndex(cartElement => cartElement.id === action.payload)
            state.cart.splice(index, 1);

        },
        cartCount: (state) => {
            state.totalCount += 1
        },

        increment: (state, action) => {
            state.cart.find(a => a.id === action.payload).count += 1;

        },

        decrement: (state, action) => {
            if (state.cart.find(a => a.id === action.payload).count > 0) {
                state.cart.find(a => a.id === action.payload).count -= 1;
                state.totalCount -= 1
            }
        },
        afterRemoveTotalCount: (state, action) => {
            state.totalCount -= action.payload
        },
    },

    extraReducers: (builder) => {
        builder.addCase(addCart.fulfilled, (state, action) => {
            if (state.cart.find(cartElement => cartElement.id === action.payload.id)) {
                const cartSendId = action.payload.id
            }
            else {
                state.cart.push({ ...action.payload, count: 1 });
                state.totalCount += 1
            }
        })
    }

})

export const { deleteProduct, cartCount, increment, decrement, afterRemoveTotalCount } = cartSlice.actions
export default cartSlice.reducer;