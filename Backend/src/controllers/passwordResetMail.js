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
            <a href="https://campus-connect-ecru.vercel.app/resetpassword/${token}">Reset Password</a>`,
        };

        await transporter.sendMail(mailOptions);
        console.log(`Password reset email sent`);
        // return result=1;
    } catch (error) {
        console.error(error);
        // return result=0;
    }
  
};
