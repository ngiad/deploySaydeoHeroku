import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    img:{
        type : String
    },
    describe : {
        type : String,
        required : true
    },
    update:{
        type : Boolean,
        default : false
    },
    buyCount : {
        type : Number,
        default : 0
    },
    type :{
        type : String,
    }
},{ timestamps : true})


export const ProductModel = mongoose.model("products",schema)