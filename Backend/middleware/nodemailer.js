// const http = require("http");
const nodemailer = require("nodemailer");
const generateOTP = require("./optgenrater");

const setOTP = generateOTP();
console.log(`Your OTP is: ${setOTP}`);

const nodemail = ( req , res ) => {
    const { email ,username} = req.body;
    
    
    const auth = nodemailer.createTransport({
        service: "gmail",
        secure: true,
        port: 465,
        auth: {
            user: "sahilm16ump@gmail.com",
            pass: "luuqrcnereeisiih"
        },
        tls: {
            rejectUnauthorized: false   
             }
    });

    const receiver = {
    from: "sahilm16ump@gmail.com",
    to: email,
    subject: "Welcome to Sahil App",
    html: `
        <h1>Hello ${username},</h1>
        <p>Welcome to Sahil App.</p>
        <p>This is your first email from Sahil App.</p>
        <p>Please verify your email.</p>
        <h2>Your OTP is: <b>${setOTP}</b></h2>
    `,
};


    auth.sendMail(receiver, (error, emailResponse) => {
        if(error) {
            console.error("Error sending email:", error);
            res.statusCode = 500;
            res.json({
                message: "Error sending email",
                error: error.message,
            });
        } else {
            console.log("Email sent successfully!");
           res.json({
            message: "User signed in successfully",
            data: {
                username,
                email,
                opt : setOTP,
            }
        });
        }
    });
}
    
module.exports =  nodemail ;