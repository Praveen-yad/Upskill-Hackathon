const jwt = require("jsonwebtoken")

const jwtSecret = "OmNamahShivay"
const generateToken = (id) => {
    return jwt.sign({id}, jwtSecret)
}

module.exports = generateToken