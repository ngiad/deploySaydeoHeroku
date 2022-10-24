import { createSlice } from "@reduxjs/toolkit";

export const ProductType = createSlice({
    name : "type",
    initialState : "",
    reducers : {
        updateType : (state,action) =>{
            return state = action.payload
        }
    }
})

export const { updateType } = ProductType.actions

export default ProductType.reducer