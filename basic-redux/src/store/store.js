import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productslice";
import cartreducer from "../features/products/cart/cartSlice";
const store=configureStore({
    reducer:{
        products:productReducer, 
        cart:cartreducer
    }
})
export default store
