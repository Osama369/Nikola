
import dotenv from "dotenv"
import Connection from "./dbconnection/connection.js"

dotenv.config({
    path:'./env'
})

Connection()
