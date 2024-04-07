const mongoose = require("mongoose")

const chatModel = mongoose.Schema({
    chatName: {type : String},
    users : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    latestMessage:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message"
    },
    newMessage: {type: Boolean}
},
    {
        timestamps : true
    }
)

const Chat = mongoose.model("Chat", chatModel);
module.exports = Chat;