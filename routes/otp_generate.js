//import  module

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

const otp_generate = async(req, res, next) => {
    try {

        const result = await knex("public.contact_list")
            .select('contact_no')
            .where("contact_no", req.body.contact_no)

        if (result == '') {
            res
                .status(401)
                .send({Success: "Failure", Message: "Enter valid contact number"})

        } else {

            // Function to generate OTP
            const generateOTP = () => {

                // Declare a digits variable which stores all digits
                const digits = '0123456789';
                let OTP = '';
                for (let i = 0; i < 6; i++) {
                    OTP += digits[Math.floor(Math.random() * 10)];
                }
                return OTP;
            }

            const result = await knex("public.contact_list")
                .update("otp", generateOTP())
                .where("contact_no", "=", req.body.contact_no)
                .returning("*")
            // console.log(result)

            res
                .status(200)
                .send({Status: 'SUCCESS'})

        }

    } catch (error) {
        console.error(error);

    }

}

// otp generate api
router.put('/api/otp/generate', otp_generate);

module.exports = router;