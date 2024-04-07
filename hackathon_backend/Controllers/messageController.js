const Chat = require("../models/chatModel")
const Message = require("../models/messageModel")
const User = require("../models/userModel")


const sendMessage = async(req,res) => {
    const { content, chatId } = req.body

    if(!content || !chatId){
        return res.status(400).send({sucess: false, message: "Incomplete Information"})
    }

    let newMessage = {
        sender: userData._id,
        content: content,
        chat: chatId
    }

    try{
        let message = await Message.create(newMessage)
        message = await message.populate("sender", "name pic")
        message = await message.populate("chat")
        message = await User.populate(message,{
            path: "chat.users",
            select: "name email pic"
        })

        await Chat.findByIdAndUpdate(chatId,{
            latestMessage: message,
        })
        res.status(200).send({sucess:true, response:message})
    }catch(err){
        res.status(400).send({sucess:false, message:'Unknown error occoured'})
    }
}

const allMessages = async(req,res) => {
    try{
        let messages = await Message.find({chat:req.params.chatId})
        .populate('sender', "name pic email")
        .populate('chat')

        messages = await User.populate(messages,{
            path: "chat.users",
            select: 'name email pic'
        })
        
        res.status(200).send({sucess: true, response: messages})
    }catch(err){
        res.status(400).send({sucess: false})
    }
}

const deleteAll = async(req, res) => {
    await Message.deleteMany({})
    res.send("done")
}

module.exports = { sendMessage, allMessages, deleteAll }