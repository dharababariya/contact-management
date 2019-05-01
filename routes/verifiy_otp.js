//import  module

const express = require('express');
const router = express.Router();

const knex = require('../db/knex');

// otp generate
const verify_otp = async(req, res, next) => {


    res.send('success');
   

}

//verify otp api
router.post('/api/otp/verify', verify_otp );

module.exports = router;