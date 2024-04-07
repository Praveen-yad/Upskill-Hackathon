const nodemailer = require("nodemailer");
const Mailgen = require("mailgen")

const otp = Math.floor(1000+ Math.random()*9000)
const sendMail = async(Receiver) => {
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'acrecovery899@gmail.com',
        pass: 'wycntazfcbggzoug'
    },
});

let MailGenerator = new Mailgen({
    theme: "default",
    product:{
        name: "Praveen",
        link: "https://mailgen.js/"
    }
})

let response = {
    body:{
        name: "User",
        intro : "Here is your 4 digit OTP (One Time Password)",
        action:{
            button: {
                color: '#5B96F7',
                text: otp
            },
        },
        outro: "See ya at ECHO!"
    },
}

let mail = MailGenerator.generate(response)

let message = {
    form: "acrecovery899@gmail.com",
    to: Receiver,
    subject: "Login OTP",
    html: mail
}

transporter.sendMail(message)
}

module.exports = {sendMail, otp}