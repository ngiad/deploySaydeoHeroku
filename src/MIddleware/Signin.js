import { AdminModel } from "../Model/UserModel.js"

export const SigninMiddleware = async (req,res,next) => {
    try {
        const Admin = await AdminModel.findOne({username : req.body.username})
        if(Admin.passwork === req.body.passwork){
            return next()
        }else{
            return res.status(500).json({false : false})
        }
    } catch (error) {
        res.status(500).json({false : false})
    }
}

