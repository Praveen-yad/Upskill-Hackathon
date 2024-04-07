const jwt = require("jsonwebtoken")
const User  =require("../models/userModel")
const jwtSecret = "OmNamahShivay"


const protect = async(req, res, next) => {
    let token;

    if(
        req.headers.authorization && 
        req.headers.authorization.startsWith("Bearer")
    ){
        try{
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, jwtSecret)
            userData = await User.findById(decoded.id).select("-password")
            next();
        }catch(err){
            res.status(401).send({sucess: false, message: "Not authorized, token failed"})
        }
    }

    if(!token){
        res.status(401).send({sucess:false, message:"No token found"})
    }
}

module.exports = protect