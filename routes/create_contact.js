//import  module

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const Joi = require('joi');

// create new contact
const create_contact_list = async(req, res, next) => {
    try {

        const data = req.body

        // define the validation schema
        const schema = Joi
            .object()
            .keys({
                // name is required
                name: Joi
                    .string()
                    .alphanum()
                    .min(3)
                    .max(30)
                    .required(),
                // phone is required and must be a string of the format XXXXXXXXXX where X is
                // a digit (0-9)
                contact_no: Joi
                    .string()
                    .regex(/^\d{3}\d{3}\d{4}$/)
                    .required(),
                // country code is not required
                country_code: Joi
                    .string()
                    .alphanum()
                    .required()
            });

        Joi.validate(data, schema, async(err, value) => {

            if (err) {
                console.log(err)
                // send a 422 error response if validation fails
                res
                    .status(422)
                    .json({
                        status: 'error', 
                        message: 'Enter valid data',
                        data: data});
            } else {
                // send a success response if validation passes
                // console.log(JSON.stringify(req.body));

                const result = await knex("public.contact_list").insert({
                     name: req.body.name,
                     contact_no: req.body.contact_no, 
                     country_code: req.body.country_code});
                res.json({
                    status: 'success',
                    message: 'successfully added new contact',
                    
                });

            }

        });

    } catch (error) {
        console.error(error);

    }

}

//create new contact api
router.post('/api/create_contact_list', create_contact_list);

module.exports = router;