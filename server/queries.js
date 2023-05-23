require('dotenv').config()

const POOL = require('pg').Pool
const pool = new POOL({
    host: 'localhost',
    user: 'lovec',
    database: 'data',
    password: process.env.POSTGRESS_PASSWORD,
    port: 5432
})