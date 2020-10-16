require('dotenv').config()
const pool = require('./config/db')

// This is how I have to call the query
const query = async (query, params) => {
  try {
    const result = await pool.query(query, params)
    console.log(result)
  } catch (error) {
    console.error(error)
  }
}
query('SELECT * FROM attendants', [])
