const express = require('express');
const router = express.Router();

const sslComm = require('../Controllers/sslEcommerse.controller.js')
const donateSslComm = require('../Controllers/donateSslCommerse.controller.js')
const paySuccess = require('../Controllers/paySuccess.controller.js')
const payFailed = require('../Controllers/payFailed.controller.js')
const donationSuccess = require('../Controllers/donationSuccess.controller.js')
const donationFailed = require('../Controllers/donationFailed.controller.js')


router.route("/payment").post(sslComm)
router.route("/payment/success/:tranId").post(paySuccess)
router.route("/payment/fail/:tranId").post(payFailed)
router.route("/donation").post(donateSslComm)
router.route("/donation/success/:tranId").post(donationSuccess)
router.route("/donation/fail/:tranId").post(donationFailed)



module.exports = router