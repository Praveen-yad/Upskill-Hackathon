const { Double, Decimal128 } = require("mongodb");
const mongoose = require("mongoose")

const userModel = mongoose.Schema({
    name:{
        type: String,
        required :true
    },
    email:{
        type: String,
        required :true
    },
    pic:{
        type:String
    },
    age:{
        type:Number
    },
    password:{
        type: String,
        required :true
    },
    isVerified:{
        type: Boolean
    },
    invites:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    invited:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    rating:{
        type: Number
    },
    isMentor:{
        type: Boolean,
    },
    category:{
            type: String
    },
    description:{
        type: String
    }
},{
    timestamps: true
})

const User = mongoose.model("User", userModel);
module.exports = User; 