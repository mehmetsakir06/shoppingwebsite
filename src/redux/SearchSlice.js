import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
    name: 'query',
    initialState: {
        query: 0
    },
    reducers: {
        searchProduct: (state, action) => {
            state.query = action.payload;
        }
    }
})

export const { searchProduct } = searchSlice.actions;
export default searchSlice.reducer;