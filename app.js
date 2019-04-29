//import module
const express = require('express');
const app = express();

//fire routes
app.use(require('./routes/get_contact_list'));

//create server
app.listen(8000, ()=>{
    console.log('server running');
})