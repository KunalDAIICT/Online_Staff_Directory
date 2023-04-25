const nodemailer = require('nodemailer');
const authorize = require('./authController');
const jwt = require("jsonwebtoken");


module.exports = async function sendResetMail(email,name) {

    let token = jwt.sign(
        { _id: email },
        process.env.ACESS_TOKEN_SECRET
    );

    try {
        const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
        });
    
        const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Password Reset',
        //attach id and role to the link
            html: `<h1>Hi, ${name}</h1>
            <p>Click on the link below to reset your password.</p>
            <a href="http://localhost:3001/resetpassword/${token}">Reset Password</a>`,
        };
    
        await transporter.sendMail(mailOptions);
        console.log(`Password reset email sent`);
    } catch (error) {
        console.error(error);
    }
  
};