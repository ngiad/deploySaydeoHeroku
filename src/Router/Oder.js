import  express  from "express";
import { CreateOde, DeleteOde, getOder, UpdateOde } from "../controlles/Oder.js";
import { checkPay,handleUpdateAmountProduct } from "../MIddleware/UpdateAmountProduct.js";

const  OderRouter = express()

OderRouter.get("/getalloder",getOder)
OderRouter.post("/createoder",handleUpdateAmountProduct,checkPay,CreateOde)
OderRouter.post("/updateoder",UpdateOde)
OderRouter.delete("/deleteoder",DeleteOde)

export default OderRouter

