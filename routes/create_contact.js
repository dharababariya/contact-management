//import  module

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

// contact list
const create_contact_list = async(req, res, next) => {

    console.log(JSON.stringify(req.body));
    const result = await knex("public.contact_list").insert({
        name: req.body.name, 
        contact_no: req.body.contact_no, 
        country_code: req.body.country_code
    });
    console.log(result);
    res
        .status(200)
        .send({message: 'successfully added new contact'})

}

//get contact list api
router.post('/api/create_contact_list', create_contact_list);

module.exports = router;