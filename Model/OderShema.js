import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    buy :  [{title: String, price: Number,amount:Number}],
    messenger : {
        type : String,
        default : "Không có yêu cần gì"
    },
    checkOder : {
        type :Boolean,
        default : false
    },
    SelectPay :{
        type : String,
        required : true
    },
    address :{
        type : String,
        required : true
    }
},{timestamps : true})

export const OderModel = mongoose.model("oder",Schema)