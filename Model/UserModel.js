import mongoose from "mongoose"; 

const Shema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    passwork : {
        type : String,
        required : true
    },
    decentralization : {
        type : String,
        default : "User"
    }
},{ timestamps : true})

export const AdminModel = mongoose.model("admin",Shema)