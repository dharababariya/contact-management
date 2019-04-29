//import  module

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

// contact list
const create_contact_list = async(req, res, next) => {

    res.send('SUCCESS');
}

//get contact list api
router.post('/v1/api/create_contact_list', create_contact_list);

module.exports = router;