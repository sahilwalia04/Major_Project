const express = require('express');
const { signin, login, googleLogin, googleCallback } = require('../Controller/userController');
const nodemail = require('../middleware/nodemailer');
const verifytokens = require('../middleware/verifytoken');
const verifyOPT = require('../middleware/verifyotp');

const router = express.Router();

router.post('/login', login);
router.post('/signin', signin , nodemail);
router.get('/', verifytokens);
router.get('/google' , googleLogin);
router.get("/google/callback", googleCallback);

// router.post('/verify-otp' , verifyOPT )
module.exports = router; 
