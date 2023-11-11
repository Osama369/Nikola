// user model code 

import mongoose , { Schema } from "mongoose";

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

 export const User= mongoose.model("User", userSchema);