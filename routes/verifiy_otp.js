//import  module

const express = require('express');
const router = express.Router();

const knex = require('../db/knex');

// otp generate
const verify_otp = async(req, res, next) => {

    try {

        const result = await knex("public.contact_list")
            .select('otp')
            .where("otp", req.body.otp)
        // console.log(result)

        if (result == '') {
            res
                .status(401)
                .send({Success: "Failure", Message: "Enter valid otp"})
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
router.post('/api/otp/verify', verify_otp);

module.exports = router;