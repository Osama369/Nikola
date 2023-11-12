// user model code 

import mongoose , { Schema } from "mongoose";
import bcrypy from "bcrypt";
import jwt from "jsonwebtoken";

 const userSchema= new Schema({
    
    // all the  fields of user schema

    username:{
        type: String,
        required: true,
        unique: true,
        lowercase:true,
        trim:true,
        index:true
    },
    password:{
        type: String,
        required: [true, "password is required"],
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase:true,
        trim:true,
    },

    fullname:{
        type: String,
        required: true,
        trim:true,
        index:true
    },
    avatar:{      // cloudnary url
        type: String,
        required: true,
    },
    coverimage:{        // cloudnary url
        type: String,
    },

    watchHistory:[   // is me  array of objects honge videos k
        {
            type: Schema.Types.ObjectId,
            ref: "Videos"
        }
    ],

    refreshToken:{
        type: String
    }
 },
   {timestamps:true}
 
 )

 // bycrypt will encrypt the password and many more like compare the passwords
 // and middleware or hooks to validate  
 // pre is middleware to save data before saving the data by hashing the password
 userSchema.pre("save",  async function(next){
    if (!this.isModified("password")) {
        return next()
    }
     this.password= bcrypy.hash(this.password, 10);
     next();
 })
 

 // custome method to compare the password to validate the user
 userSchema.methods.isPasswordCorrect= async function(password){
     return await bcrypy.compare(password,this.password)
     // if tru password is safe and login
     // otherwise false
 }

 // method to create generate token
 userSchema.methods.generateAccessToken= function(){
    jwt.sign({
        _id :this._id,
        email: this.email,
        fullname: this.fullname,
        username: this.usernames 
    },
        // acceess token from env
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
 }
 userSchema.methods.generateRefreshToken= function(){
    jwt.sign({
        _id :this._id,
    },
        // refresh token from env
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
 }

 export const User= mongoose.model("User", userSchema);