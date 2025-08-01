const { setOTP } = require("./nodemailer");

const verifyOPT = (req, res, next) => {
    const { otp } = req.body;
    console.log(setOTP);
    
    console.log("otp" , otp);
    if (!otp) {
        return res.status(400).json({
            status: false,
            message: "Please fill all the fields",
        });
    }
    // Compare the OTP with the generated OTP
    if (otp !== setOTP ) {
        return res.status(400).json({
            status: false,
            message: "Invalid OTP",
        });
    }
   res.status(200).json({
        status: true,
        message: "OTP verified successfully",
    });
    
}
module.exports = verifyOPT;