import { ContactModel } from "../Model/Contact.js"
import nodemailer from "nodemailer";


export const SendMessenge = async(req,res) =>{
    const {name ,messenge,phone,email} = req.body
    try {
        const Messenge = ContactModel(req.body)
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
              user: "devwebdainghia@gmail.com",
              pass: "imhfjpfebidvwoet",
            },
          })
          await transporter.sendMail(
            {
              from: "devwebdainghia@gmail.com",
              to: `trandainghia127@gmail.com`,
              subject: `Tin nhắn của khách hàng ${name}`,
              text: `email : ${email}. phone : ${phone} : Lời nhắn : ${messenge} `,
            },
            (err) => {
              if (err) return res.status(500).json({ success: false });
            }
          );
          await Messenge.save()
          res.status(200).json({success : true})
    } catch (error) {
        res.status(500).json({success : false})
    }
}