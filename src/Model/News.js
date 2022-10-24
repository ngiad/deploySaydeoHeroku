import mongoose from "mongoose";


const Schema  = new mongoose.Schema({
    title: {
        type : String,
        required : true
    },
    p1 : {
        type : String,
        required : true
    },
    img : {
        type : String,
        required : true
    },
    p2 : {
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true
    },
    link : {
        type : String
    },
    view : {
        type : Number,
        default : 0
    }
},{timestamps : true})

export const NewsModel = mongoose.model("news",Schema)