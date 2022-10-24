import { configureStore } from "@reduxjs/toolkit"
import Search from "./Slice"
import Cart from "./CartSlice"
import Type from "./getProductType"

export default configureStore({
    reducer:{
        Search: Search,
        Cart : Cart,
        getProducType : Type
    }
})