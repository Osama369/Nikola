// videos model code 
import mongoose , {Schema} from "mongoose";

const videoSchema= new Schema ({
   
    // all the fields 

    owner:{
        type: Schema.Types.ObjectId,
        ref: "User"
        },

    videoFile:{
        type: String,
        required:true
    },

    thumbnail:{
        type: String,
        required:true
    },
    title:{
        type:String
    },

    description:{
       type:String,
       required:true
    },

    duration:{
        type:Number,
        required:true
    },

    views:{
        type:Number,
        required:true
    },
     
    isPublished:{
        type:Boolean,
        default:true
    },
},

{timestamps:true}

)

export const Videos= mongoose.model("Videos",videoSchema)