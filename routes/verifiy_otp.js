//import  module

const express = require('express');
const router = express.Router();

const knex = require('../db/knex');

// otp generate
const verify_otp = async(req, res, next) => {

    try {

        const result = await knex("public.contact_list")
            .select('otp')
            .where("contact_no", req.body.contact_no)

        const desired_result = result[0];

        const final_result = desired_result.otp;

        if (final_result == req.body.otp) {
            res
                .status(200)
                .send({Status: 'SUCCESS'})

        } else {
            res
                .status(401)
                .send({Success: "Failure", Message: "Enter valid otp"})

        }

    } catch (error) {
        console.error(error);

    }

}

//verify otp api
router.post('/api/otp/verify', verify_otp);

module.exports = router;