import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:["burer" , "pizza"]
    },

    reducers:{
        addItem:(state , action)=>{
            state.items.push(action.payload);
        },

        removeItem:()=>{
            state.items.pop();
        },

        clearCart:()=>{
            state.items.length=0;
        }
    }
})


export const {addItem , removeItem , clearCart} = cartSlice.actions;
export default cartSlice.reducer;