const express = require("express")
const protect = require('../Middleware/authMiddleware')
const {sendMessage ,allMessages, deleteAll} = require('../Controllers/messageController')
const Router = express.Router()
const cloudinary = require('../utils/cloudinary')

Router.post('/', protect, sendMessage)
Router.get('/delete', deleteAll)
Router.get('/:chatId', protect, allMessages)
Router.post('/image', async(req,res) => {
    try{
        const upload = await cloudinary.uploader.upload(req.body.img,{
            upload_preset:'vyanjan'
        })
        console.log(upload)
        res.status(200).send({url: upload.url})
    }catch(error){
        res.status(400).send(error)
    }
})

module.exports = Router