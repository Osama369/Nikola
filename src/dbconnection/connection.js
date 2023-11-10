import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const Connection = async ()=> {
    try {
     const dbConnectoin  = await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
     console.log(`\n database connected: ${dbConnectoin.connection.host}`);
    } catch (error) {
        console.log("ERROR to connect with mongodb", error);
        process.exit(1)
    }
}

export default Connection