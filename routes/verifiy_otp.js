//import  module

const express = require('express');
const router = express.Router();

const knex = require('../db/knex');

// otp generate
const verify_otp = async(req, res, next) => {


    res.send('success');
    try {

        const result = await knex("public.contact_list")
            .select(['contact_no','otp'])
            .where("contact_no", req.body.contact_no  , "otp" , req.body.otp)

        if (result == '') {
            res
                .status(401)
                .send({Success: "Failure", Message: "Enter valid contact number"})
        } else {
            
            res
                .status(200)
                .send({Status: 'SUCCESS'})

        }

    } catch (error) {
        console.error(error);

    }

}

//verify otp api
router.post('/api/otp/verify', verify_otp );

module.exports = router;