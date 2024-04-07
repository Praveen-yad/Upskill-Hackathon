const express = require('express')
const protect = require('../Middleware/authMiddleware')
const { accessChat,fetchChats,sendReciver,AddNewMessage,RemoveNewMessage,deleteChat} = require("../Controllers/chatController")
const Router = express.Router()

Router.post("/", protect, accessChat)
Router.get("/", protect, fetchChats)
Router.post("/getreciver", protect, sendReciver)
Router.post("/addnew", protect, AddNewMessage)
Router.post("/removenew", protect, RemoveNewMessage)
Router.post("/deletechat", protect, deleteChat)

module.exports = Router