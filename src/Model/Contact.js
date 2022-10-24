import mongoose from "mongoose";

const Schema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    phone : {
        type :String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    messenge : {
        type : String,
        required : true
    }
})

export const ContactModel = mongoose.model("contact",Schema) 