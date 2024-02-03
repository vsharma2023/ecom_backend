const {Pool} = require('pg');
//object destructuring:
//import only specific functions, classes, or objects from a package rather than the entire package. Here's how you can use destructuring during import

//The Pool object is a part of the pg package and represents a pool of database connections that can be reused to interact with a PostgreSQL database.
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'project-learn',
  password: 'argus2023',
  port: 5432, 
});

module.exports = pool;