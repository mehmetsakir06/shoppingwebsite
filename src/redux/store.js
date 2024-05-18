import { configureStore } from '@reduxjs/toolkit';
import categorySlice from './CategorySlice';
import ProductListSlice from './ProductListSlice';
import SearchSlice from './SearchSlice';
import CategoryScreenSlice from './CategoryScreenSlice';
import SingleProductSlice from './SingleProductSlice';
import CartSlice from './CartSlice';


export const store = configureStore({

    reducer: {
        categories: categorySlice,
        products: ProductListSlice,
        querys: SearchSlice,
        categoryScreen: CategoryScreenSlice,
        singleProducts: SingleProductSlice,
        cart: CartSlice,


    }
})
