import  express  from "express";
import jsonwebtoken from "jsonwebtoken"

import { SigninMiddleware } from "../MIddleware/Signin.js";

const LoginRouter = express()


function signJWT (username,namespace,){
    return jsonwebtoken.sign(username,namespace,{expiresIn : "8h"})
}


LoginRouter.post("/",SigninMiddleware,(req,res) =>{
    try {
        const token =  signJWT({username : req.body.username},"congo") 
        res.json({token}).status(200)
    } catch (error) {
        res.status(500).json({false : false})
    }
})

export default LoginRouter
