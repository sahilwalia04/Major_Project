const { paymentOrder, paymentStatus } = require('../Controller/paymentController');
const express = require('express');

const router3 = express.Router();
router3.post('/create-order' , paymentOrder)
router3.post('/status' , paymentStatus )


module.exports = router3; 