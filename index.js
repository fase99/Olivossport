const express = require('express')
const app = express()
const port = 3000

//Path: Data Base
const { Pool } = require('pg');

const config = ({
  user: 'postgres',
  host: 'localhost',
  database: 'tarea1',
  password: '',
  port: 5432, 
});

const pool = new Pool(config);

const getCars = async () => {
  const respuesta = await pool.query('SELECT * FROM cars');
  console.log(respuesta.rows);
}
getCars();

app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});
