//import module
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const body_parser = require('body-parser');

//middleware
app.use(body_parser.json());


//env config
dotenv.config();

//fire routes
app.use(require('./routes/get_contact_list'));
app.use(require('./routes/update_contact_list'));
app.use(require('./routes/create_contact'));

//create server
app.listen(8000, ()=>{
    console.log('server running');
})