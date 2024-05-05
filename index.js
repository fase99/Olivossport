const express = require('express')
const app = express()
const port = 3000

const { Pool } = require('pg')
const config = ({
  user: 'postgres',
  host: 'localhost',
  database: 'tarea1',
  password: '',
  port: 5432,
})
const pool = new Pool(config);

const getCars = async () => {
  const res = await pool.query('SELECT * FROM cars');
  console.log(res.rows);
}

getCars();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})