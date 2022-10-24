import  express  from "express";
import cors from "cors"
import bodyParser from "body-parser"
import mongoose from "mongoose";
import ProductRouter from "./src/Router/Products.js";
import LoginRouter from "./src/Router/Login.js";
import NewsRouter from "./src/Router/News.js";
import OderRouter from "./src/Router/Oder.js";
import ContactRouter from "./src/Router/Contact.js";




const app = express()
const URL =   "mongodb+srv://Ngiad:Ngiad001@cluster0.2ts8aja.mongodb.net"

app.use(cors())
app.use(bodyParser.json())
const PORT = 7000


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



