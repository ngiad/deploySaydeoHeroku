import { createSlice } from "@reduxjs/toolkit"

export const SearchSliceRedux = createSlice({
    name: "search",
    initialState:"",
    reducers:{
        update:(stare,action) =>{
            return stare = action.payload
        }
    }
})

export const { update } = SearchSliceRedux.actions

export default SearchSliceRedux.reducer