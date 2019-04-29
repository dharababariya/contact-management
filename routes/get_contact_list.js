//import  module

const express = require('express');
const router = express.Router();
const knex = require('../helpers/knex');

// contact list


    const contact_list = async( req,res,next)=>{

        const result = await knex("public.contact_list").select("*")
    
        res
        .status(201)
        .send({
            message:"get all contact",
            result: result
        })
    
    }
    





//get contact list api
router.get('/v1/api/get_contact_list', contact_list);



module.exports = router;