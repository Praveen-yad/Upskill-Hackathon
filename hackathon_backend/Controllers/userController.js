const UserModel = require('../models/userModel')
const generateToken = require("./Config/generateToken")
const bcrypt = require("bcrypt")
const {sendMail, otp} = require("./sendMail")
const { response } = require('express')


const loginController = async (req,res) => {
    const {email, password} = req.body
    const user = await UserModel.findOne({email});
    if(user){
        const comparePassword = await bcrypt.compare(password, user.password)
        if(!comparePassword){
            res.status(400).send({sucess: false, message: "Invalid Username or Password"})
        }else{
            if(user.isVerified){
                const token = generateToken(user._id)
                res.status(200).send({sucess:true, response: user, token:token})
            }else{
                sendMail(user.email);
                res.status(400).send({sucess: false, response:user, message:"Email is not Verified"})
            }
        }
    }else{
        res.status(400).send({sucess:false, message: "Invalid Username or Password"})
    }
}


const registerController = async(req,res) => {
    const {name, email, password, pic, age, category, description, isMentor} = req.body
    
    if(!name || !email || !password){
        return res.status(400).send({sucess: false, message: "All necessary credentails have not been filled"})
    }

    const emailExist = await UserModel.findOne({email});
    if(emailExist){
        return res.status(400).send({sucess: false, message: "Email Already Exists"})
    }
    
    const nameExist = await UserModel.findOne({name});
    if(nameExist){
        return res.status(400).send({sucess: false, message: "Username Already Exists"})
    }
    const salt = await bcrypt.genSalt(10)
    const SecurePassword = await bcrypt.hash(password, salt)

    if(!isMentor){
       const user = await UserModel.create({
            name:name, 
            email:email,
            password:SecurePassword,
            pic:pic,
            age:age,
            isVerified: false,
            isMentor: false
        }) 
        
        sendMail(user.email);
        res.status(200).send({sucess:true, response:user})
    }else{
        const user = await UserModel.create({
            name:name, 
            email:email,
            password:SecurePassword,
            pic:pic,
            age:age,
            isVerified: false,
            category: category,
            description: description,
            isMentor: true,
            rating:0
        })
        
        sendMail(user.email);
        res.status(200).send({sucess:true, response:user})
    }

}

const rejectInvite = async(req, res) => {
    if(userData.isMentor){
        const sent = await UserModel.findByIdAndUpdate(
            userData._id,
            {
                $pull:{invites : req.body.id}
            }
        )
        const sent2 = await UserModel.findByIdAndUpdate(
            req.body.id,
            {
                $pull:{invited : userData._id}
            }
        )
        if(sent && sent2){
            res.status(200).send({sucess: true})
        }else{
            res.status(400).send({sucess: false})

        }
    }else{
        const sent = await UserModel.findByIdAndUpdate(
            userData._id,
            {
                $pull:{invited : req.body.id}
            }
            )
        const sent2 = await UserModel.findByIdAndUpdate(
            req.body.id,
            {
                $pull:{invites : userData._id}
            }
            )
        if(sent && sent2){
            res.status(200).send({sucess: true})    
        }else{
            res.status(400).send({sucess: false})

        }
    }
}


const otpVerification = async(req, res) => { 
    if(req.body.otp == otp){
        await UserModel.findOneAndUpdate({email: req.body.email}, {isVerified: true})
        res.status(200).send({sucess: true, message: "Otp Verified"})
    }else{
        res.status(400).send({sucess: false, message: "Incorrect OTP"})
    }
}

const searchUser = async(req, res) => {

    const users = await UserModel.find({category: req.body.search, isMentor:true})
    res.send(users)
}

const invitation = async(req, res) => {
    const {id, mentorId} = req.body
    const sent = await UserModel.findByIdAndUpdate(
        mentorId,
        {
            $push:{invites : id}
        }
    )

    const invited = await UserModel.findByIdAndUpdate(
        id,
        {
            $push:{invited : mentorId}
        }
    )

    if(!sent || !invited){
        res.status(400).send({sucess:false})
    }else{
        res.status(200).send({sucess:true})
    }
}

const fetchInvites = async(req, res) => {
    if(userData.isMentor){ 
        UserModel.findById(userData._id)
        .then(response => response.populate("invites", "-password -invited -invites"))
        .then(response => res.send(response.invites))
    }else{
        UserModel.findById(userData._id)
        .then(response => response.populate("invited", "-password -invited -invites"))
        .then(response => res.send(response.invited))
    }
}

const fetchMentors = async(req, res) => {
    await UserModel.find({isMentor:true})
    .then(response => res.send(response))
}


module.exports = {registerController, loginController, otpVerification, searchUser, invitation, fetchInvites, fetchMentors, rejectInvite}