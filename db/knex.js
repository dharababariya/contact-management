

const knex = require('knex')({
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    debug: false
  });

//expose knex connection object;
module.exports = knex;