import { asyncHandler } from "../utils/asynHandler.js";

// method to register user in mongodb 

const userRegister= asyncHandler (async(req,res)=>{
    res.status(200).json({
        message:'ok'
    })
})

export { userRegister };