require('dotenv').config()

const POOL = require('pg').Pool
const pool = new POOL({
    host: 'localhost',
    user: 'lovec',
    database: 'data',
    password: process.env.POSTGRESS_PASSWORD,
    port: 5432
})
const getNames = (req, res)=>{
    pool.query('SELECT * FROM data ORDER BY id ASC', (error, result)=>{
        if(error){
            throw error;
        }
        res.status(200).json(result.rows)
    }, )
}
const createName = (req, res) =>{
    const name = req.body.name

    if(name && URL !== null){
       pool.query('INSERT INTO data (name) VALUES ($1)', [name], (error, result)=>{
        if(error){
            throw error;
        }
        res.status(201).send(`Name added`)
    },
    )
    } else{
        response.status(402).send("Server is expecting data")
    }
    const updateName =(req, res) =>{
        const id = parseInt(req.params.id)
        const name = req.body.name
    
        pool.query('UPDATE INTO data (name) VALUE ($1)', [name, id], (error, result)=>{
            if (error){
                throw error
            }
            res.status(200).send(`Update to data`)
        })
    }
    
    //delete link in the db
    const delName = (req, res)=>{
        const id = parseInt(req.params.id)
        const name = req.body.name
    
        pool.query('DELETE FROM data (name) VALUE ($1)', [name, id], (error, result)=>{
            if (error){
                throw error
            }
            response.status(200).send(`Delete from links`)
        })
    }
    const getNameById = (req, res) => {
        const id = parseInt(req.params.id)
      
        pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
          if (error) {
            throw error
          }
          res.status(200).json(results.rows)
        })
      }
    module.exports ={
        getNames, createName, delName, updateName, getNameById 
    }
    
}