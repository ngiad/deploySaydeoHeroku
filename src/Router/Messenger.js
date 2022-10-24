import express from "express"
import * as http from "http"
import { Server } from "socket.io"



const MesengeRouter = express()
const server = http.createServer(MesengeRouter)


const socketIo = new Server(server,{
    cors :{
        origin: "*",
    }
})

socketIo.on("connection",(res) =>{
    console.log(res.id);
    res.emit("getId", res.id)

    res.on("sendDataClient",(req) =>{
        socketIo.to(req.id).emit(req)
    })

    res.on("disconnect",() =>{
        console.log("Client disconnected");
    })
})

export default MesengeRouter