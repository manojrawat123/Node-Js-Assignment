import mongoose from "mongoose";

const replySchema = new mongoose.Schema({
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        comment: {
            type: Schema.Types.ObjectId,
            ref: 'Post',
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
    }, { timestamps: true });
    

const replyModel = mongoose.model('Reply', replySchema);