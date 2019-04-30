//import module
const express = require('express');
const app = express();
const port = 3000;
const body_parser = require('body-parser');

//middleware
app.use(body_parser.json());

//fire routes
app.use(require('./routes/get_contact_list'));
app.use(require('./routes/update_contact_list'));
app.use(require('./routes/create_contact'));

//create server
app.listen(port, ()=>{
    console.log(`server running ${port}`);
})