//import  module

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

// update contact list
const update_contact_list = async(req, res, next) => {

    try {

        const result = await knex("public.contact_list")
            .update("name", req.body.name)
            .where("id", "=", req.body.id)
            .returning("*")

        return res
            .status(200)
            .send({status: 'SUCCESS', data: result});

    } catch (error) {

        console.error(error.message);
        res.status(500);

    }

}

//update contact list api
router.put('/api/update_contact_list', update_contact_list);
module.exports = router;