//import  module

const express = require('express');
const router = express.Router();

// contact list
const contact_list = ( req,res,next)=>{
    res.send('success');

}

//get contact list api
router.get('/v1/api/get_contact_list' , contact_list );



module.exports = router;