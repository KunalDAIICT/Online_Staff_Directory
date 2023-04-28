const nodemailer = require('nodemailer');
const authorize = require('./authController');
const jwt = require("jsonwebtoken");


module.exports = async function sendAuthMail(userEmail,name) {

  let token = jwt.sign(
    { _id: userEmail },
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
      to: userEmail,
      subject: 'Email Verification',
      //attach id and role to the link
        html: `<h1>Hi ${name},</h1>
        <p>Thank you for registering with us. Please click on the link below to verify your email address.</p>
        <a href="http://localhost:3001/verify-email/${token}">Verify Email</a>`,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Verification email sent to ${userEmail}`);
  } catch (error) {
    console.error(error);
  }
};