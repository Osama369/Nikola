
import dotenv from "dotenv"
import Connection from "./dbconnection/connection.js"
import { app } from "./app.js"

dotenv.config({
    path:'./env'
})

// response or catch me error ko handle krenge 
Connection().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) =>{
    console.log("connection failed",err);
})
