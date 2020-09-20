const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'todoapp2',
    password: 'postgres'
})

module.exports = pool;