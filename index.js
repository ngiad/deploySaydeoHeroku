import  express  from "express";
import cors from "cors"
import bodyParser from "body-parser"
import mongoose from "mongoose";
import ProductRouter from "./Router/Products.js";
import LoginRouter from "./Router/Login.js";
import NewsRouter from "./Router/News.js";
import OderRouter from "./Router/Oder.js";
import ContactRouter from "./Router/Contact.js";
import path from "path";




const app = express()
const URL =   "mongodb+srv://Ngiad:Ngiad001@cluster0.2ts8aja.mongodb.net"

app.use(cors())
app.use(bodyParser.json())

if(process.env.NODE_ENV === "production"){
    app.use(express.static("./client/build"))

    app.get("*",(req,res) =>{
        res.sendFile(path.resolve(__dirname,"./client","build","index.html"))
    })
}
const PORT = process.env.PORT || 8000


app.use("/products",ProductRouter)
app.use("/login",LoginRouter)
app.use("/news",NewsRouter)
app.use("/oder",OderRouter)
app.use("/contact",ContactRouter)




mongoose.connect(URL,{useNewUrlParser : true})
.then(() =>{
    app.listen(PORT,() =>{
        console.log("server iss runing ...", PORT)
    })
})
.catch((e) =>{
    console.log("connect mongodb Fales  : ",e)
})



