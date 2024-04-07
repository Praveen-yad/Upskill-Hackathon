const express = require("express")
const {registerController, loginController, otpVerification, searchUser, invitation, fetchInvites, fetchMentors,rejectInvite} = require("../Controllers/userController");
const protect = require("../Middleware/authMiddleware");

const Router = express.Router();

Router.post('/login', loginController)
Router.post('/register', registerController)
Router.post('/verify', otpVerification)
Router.post('/find',protect, searchUser)
Router.post('/invite',protect, invitation)
Router.get('/fetchinvites',protect, fetchInvites)
Router.get('/fetchmentors',protect, fetchMentors)
Router.post('/reject',protect, rejectInvite)


module.exports = Router