import { createSlice } from "@reduxjs/toolkit"
//state
const initialState = {
    products:[]


}
//logic
const productSlice=createSlice({
    name:"product",
    initialState,
    reducers:{
        setProducts:(state,action)=>{
            state.products=action.payload
        }   
    }
    
 
}
)
const {setProducts}=productSlice.actions
const productReducer=productSlice.reducer
export {setProducts}
export default productReducer