import  express  from "express";
import { SendMessenge } from "../controlles/Contact.js";

const ContactRouter = express()

ContactRouter.post("/sendmessenge",SendMessenge)


export default ContactRouter