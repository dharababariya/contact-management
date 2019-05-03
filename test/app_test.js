const request = require('supertest');
const app = require('../app');


describe("test" , ()=>{
    it("get all contact" , (done)=>{

    request(app).get('/v1/api/get_contact_list')
    .send()
    .expect(200, done)

})

})