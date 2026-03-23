import { createSlice } from "@reduxjs/toolkit";
//state
const initialState={
    cartitems:[],
    totalprice:0,

}

const cartSlice=createSlice({
name:"cart",
initialState,
reducers:{
    addToCart:(state,action)=>{
        state.cartitems.push(action.payload)
        state.totalprice+=action.payload.price
    },
    removeFromCart:(state,action)=>
    {
        state.cartitems = state.cartitems.filter((item) => item.id != action.payload.id);
        state.totalprice -= action.payload.price;
    },
    additem:(state,action)=>{
        
        
       let item=state.cartitems.filter((item)=>item.id===action.payload.id)
       if(item){
        

        state.totalprice-=item[0].price*item[0].quantity
        item[0].quantity+=1;
        state.totalprice+=item[0].price*item[0].quantity

       }
    },
    removeitem:(state,action)=>{
        
        
      let item=state.cartitems.filter((item)=>item.id===action.payload.id)
       if(item){
        state.totalprice-=item[0].price*item[0].quantity
        item[0].quantity-=1;
        state.totalprice+=item[0].price*item[0].quantity

       }
    },

    clearCart:(state) => {
      state.cartitems = [];
      state.totalprice = 0;
    }
}
})
const {addToCart,removeFromCart,clearCart,additem,removeitem}=cartSlice.actions
const cartreducer=cartSlice.reducer
export default cartreducer
export {addToCart,removeFromCart,clearCart,additem,removeitem}