// api handler
const asynHandler = (handel)=> async (req,res,next) => {
   try {
        await handel(req,res,next)
   } catch (error) {
    res.status(err.code || 500).json({
        success:false,
        message:err.message
    })
   }
}

export { asynHandler }