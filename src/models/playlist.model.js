import mongoose,{Schema} from "mongoose";   

const playListSchema = new Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    videos:[{
        type:Schema.Types.ObjectId,
        ref:"Video"
    }]
},{timestamps:true});   

export const PlayList = mongoose.model("PlayList",playListSchema);