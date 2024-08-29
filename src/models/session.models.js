import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
    user : {
        type : mongoose.Types.ObjectId,
        ref : 'User'
    },
    valid : {
        type : Boolean,
        default : true
    }
},
{ 
    timestamps : true
});

const sessionModel = mongoose.model('Session', sessionSchema);

export default sessionModel;