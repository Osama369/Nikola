import {v2 as cloudinary} from 'cloudinary';
import fs from "fs";          
// cloudinary configuration
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY, 
  api_secret: process.env.CLOUD_API_SECRET 
});

// method to upload the file on cloudinary
 const uploadOnCloudinary= async (localFilePath)=>{
       try {
        if (!localFilePath) { 
            return  null;
        }
         const response = await cloudinary.uploader.upload(localFilePath,{
            // pass an object
            resource_type:"auto"
         });
         console.log(response);
         return response;

       } catch (error) {
         // agar nahi hwa file uplaod to remove krdenge 
         fs.unlinkSync(localFilePath)
         return null;
       }

 }
 export {uploadOnCloudinary};