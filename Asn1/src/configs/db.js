const Pool = require('pg').Pool 
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '1423',
  port: 5432,
});

module.exports = pool;