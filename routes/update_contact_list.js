//import  module

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

// contact list
const update_contact_list = async(req, res, next) => {


    res
        .send('SUCCESS')

}


//get contact list api
router.put('/v1/api/update_contact_list', update_contact_list);
module.exports = router;